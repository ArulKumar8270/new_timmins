"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  downloadUrl: string;
  caseStudyName: string;
  title?: string;
};

type FormData = {
  fullName: string;
  organization: string;
  email: string;
  contactNumber: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function CaseStudyDownloadModal({ isOpen, onClose, downloadUrl, caseStudyName, title }: Props) {
  const [formData, setFormData] = useState<FormData>({ fullName: "", organization: "", email: "", contactNumber: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.fullName.trim()) e.fullName = "Required";
    if (!formData.organization.trim()) e.organization = "Required";
    if (!formData.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Invalid email";
    if (!formData.contactNumber.trim()) e.contactNumber = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    try {
      const { error } = await supabase.from("case_study_enquiries").insert({
        case_study_name: caseStudyName,
        full_name: formData.fullName,
        organization: formData.organization,
        email: formData.email,
        contact_number: formData.contactNumber,
      });

      if (error) throw error;

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = downloadUrl.split("/").pop() || "case-study.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({ fullName: "", organization: "", email: "", contactNumber: "" });
      }, 1500);
    } catch {
      setErrors({ email: "Download failed. Please try again." });
    }
    setSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="case-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-modal-title"
    >
      <div className="case-modal" onClick={(e) => e.stopPropagation()}>
        <div className="case-modal-header">
          <h5 id="case-modal-title">{title ?? "Download Full Case Study"}</h5>
          <button type="button" className="case-modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="case-modal-body">
          {submitted ? (
            <p className="case-modal-success">Thank you! Your download has started.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="case-form-group">
                <label htmlFor="cs-fullname">Full Name</label>
                <input
                  id="cs-fullname"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData((p) => ({ ...p, fullName: e.target.value }))}
                  className={errors.fullName ? "error" : ""}
                  required
                />
                {errors.fullName && <span className="case-form-error">{errors.fullName}</span>}
              </div>
              <div className="case-form-group">
                <label htmlFor="cs-org">Organization</label>
                <input
                  id="cs-org"
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData((p) => ({ ...p, organization: e.target.value }))}
                  className={errors.organization ? "error" : ""}
                  required
                />
                {errors.organization && <span className="case-form-error">{errors.organization}</span>}
              </div>
              <div className="case-form-group">
                <label htmlFor="cs-email">Email</label>
                <input
                  id="cs-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  className={errors.email ? "error" : ""}
                  required
                />
                {errors.email && <span className="case-form-error">{errors.email}</span>}
              </div>
              <div className="case-form-group">
                <label htmlFor="cs-phone">Contact Number</label>
                <input
                  id="cs-phone"
                  type="tel"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData((p) => ({ ...p, contactNumber: e.target.value }))}
                  className={errors.contactNumber ? "error" : ""}
                  required
                />
                {errors.contactNumber && <span className="case-form-error">{errors.contactNumber}</span>}
              </div>
              <button type="submit" className="case-modal-submit" disabled={submitting}>
                {submitting ? "Sending…" : "Submit & Download"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
