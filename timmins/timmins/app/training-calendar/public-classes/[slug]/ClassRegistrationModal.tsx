"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { DEFAULT_COURSE_CONTENT, type CourseContent } from "@/lib/course-content";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
  sessionId?: string;
  sessionDate?: string;
  sessionLocation?: string;
  config?: CourseContent | null;
};

const DEFAULT_JOB_ROLES = ["Engineer", "Lead", "Manager", "L & D", "HR", "Other"];
const DEFAULT_HEAR_ABOUT = ["Website", "Social Media", "Referral", "HR", "Email", "Sales call", "Other"];
const DEFAULT_EXPERIENCE_LEVELS = [
  "Beginner (No prior experience)",
  "Intermediate (Some experience, have worked with it before)",
  "Advanced (Extensive experience, want technical insight)",
];
const DEFAULT_WHO_PAYS = ["Myself", "Company sponsored", "HRDC Claim"];
const DEFAULT_INVOICE_OPTIONS = ["Yes", "No"];
const DEFAULT_DIETARY = ["Vegetarian", "Halal", "Not applicable"];

type FormData = {
  fullName: string;
  email: string;
  mobileNumber: string;
  organizationName: string;
  jobRole: string;
  jobRoleOther: string;
  hearAbout: string[];
  hearAboutOther: string;
  experienceLevel: string;
  learningExpectations: string;
  whoPays: string;
  requireInvoice: string;
  dietary: string;
  dietarySpecialNote: string;
  additionalComments: string;
  confirmTerms: boolean;
};

const initialForm: FormData = {
  fullName: "",
  email: "",
  mobileNumber: "",
  organizationName: "",
  jobRole: "",
  jobRoleOther: "",
  hearAbout: [],
  hearAboutOther: "",
  experienceLevel: "",
  learningExpectations: "",
  whoPays: "",
  requireInvoice: "",
  dietary: "",
  dietarySpecialNote: "",
  additionalComments: "",
  confirmTerms: false,
};

export default function ClassRegistrationModal({
  isOpen,
  onClose,
  courseName,
  sessionId,
  sessionDate,
  sessionLocation,
  config,
}: Props) {
  const c = config ?? DEFAULT_COURSE_CONTENT;
  const JOB_ROLES = c.registration_job_roles?.length ? c.registration_job_roles : DEFAULT_JOB_ROLES;
  const HEAR_ABOUT = c.registration_hear_about?.length ? c.registration_hear_about : DEFAULT_HEAR_ABOUT;
  const EXPERIENCE_LEVELS = c.registration_experience_levels?.length ? c.registration_experience_levels : DEFAULT_EXPERIENCE_LEVELS;
  const WHO_PAYS = c.registration_who_pays?.length ? c.registration_who_pays : DEFAULT_WHO_PAYS;
  const INVOICE_OPTIONS = c.registration_invoice_options?.length ? c.registration_invoice_options : DEFAULT_INVOICE_OPTIONS;
  const DIETARY = c.registration_dietary?.length ? c.registration_dietary : DEFAULT_DIETARY;
  const experienceLabel = c.registration_experience_label || DEFAULT_COURSE_CONTENT.registration_experience_label || "What is your experience level?";
  const successMessage = c.registration_success_message || DEFAULT_COURSE_CONTENT.registration_success_message || "Thank you! We will contact you shortly to complete your registration.";
  const termsText = c.registration_terms_text || DEFAULT_COURSE_CONTENT.registration_terms_text || "I confirm that the information provided is accurate and agree to be contacted by Timmins Training Consulting regarding this training.";

  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) e.fullName = "Required";
    if (!formData.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Invalid email";
    if (!formData.mobileNumber.trim()) e.mobileNumber = "Required";
    if (!formData.organizationName.trim()) e.organizationName = "Required";
    if (!formData.jobRole.trim()) e.jobRole = "Please select one";
    if (!formData.experienceLevel.trim()) e.experienceLevel = "Please select one";
    if (!formData.whoPays.trim()) e.whoPays = "Please select one";
    if (!formData.requireInvoice.trim()) e.requireInvoice = "Please select one";
    if (!formData.dietary.trim()) e.dietary = "Please select one";
    if (!formData.confirmTerms) e.confirmTerms = "You must confirm to proceed";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    try {
      const { error } = await supabase.from("class_registrations").insert({
        course_name: courseName,
        session_id: sessionId ?? null,
        session_date: sessionDate ?? null,
        session_location: sessionLocation ?? null,
        full_name: formData.fullName,
        email: formData.email,
        mobile_number: formData.mobileNumber,
        organization_name: formData.organizationName,
        job_role: formData.jobRole,
        job_role_other: formData.jobRoleOther || null,
        hear_about: formData.hearAbout,
        hear_about_other: formData.hearAboutOther || null,
        experience_level: formData.experienceLevel,
        learning_expectations: formData.learningExpectations || null,
        who_pays: formData.whoPays,
        require_invoice: formData.requireInvoice,
        dietary: formData.dietary,
        dietary_special_note: formData.dietarySpecialNote || null,
        additional_comments: formData.additionalComments || null,
      });

      if (error) throw error;

      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData(initialForm);
      }, 2000);
    } catch {
      setErrors({ email: "Submission failed. Please try again." });
    }
    setSubmitting(false);
  };

  const toggleHearAbout = (val: string) => {
    setFormData((p) => ({
      ...p,
      hearAbout: p.hearAbout.includes(val) ? p.hearAbout.filter((x) => x !== val) : [...p.hearAbout, val],
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      className="reg-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reg-modal-title"
    >
      <div className="reg-modal" onClick={(e) => e.stopPropagation()}>
        <div className="reg-modal-header">
          <h5 id="reg-modal-title">Register for {courseName}</h5>
          <button type="button" className="reg-modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="reg-modal-body">
          {submitted ? (
            <p className="reg-modal-success">{successMessage}</p>
          ) : (
            <form onSubmit={handleSubmit} className="reg-form">
              <div className="reg-form-group">
                <label>1. Full Name *</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData((p) => ({ ...p, fullName: e.target.value }))}
                  className={errors.fullName ? "error" : ""}
                />
                {errors.fullName && <span className="reg-form-error">{errors.fullName}</span>}
              </div>

              <div className="reg-form-group">
                <label>2. Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && <span className="reg-form-error">{errors.email}</span>}
              </div>

              <div className="reg-form-group">
                <label>3. Mobile Number (WhatsApp preferred) *</label>
                <input
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData((p) => ({ ...p, mobileNumber: e.target.value }))}
                  className={errors.mobileNumber ? "error" : ""}
                />
                {errors.mobileNumber && <span className="reg-form-error">{errors.mobileNumber}</span>}
              </div>

              <div className="reg-form-group">
                <label>4. Organization Name *</label>
                <input
                  type="text"
                  value={formData.organizationName}
                  onChange={(e) => setFormData((p) => ({ ...p, organizationName: e.target.value }))}
                  className={errors.organizationName ? "error" : ""}
                />
                {errors.organizationName && <span className="reg-form-error">{errors.organizationName}</span>}
              </div>

              <div className="reg-form-group">
                <label>5. Job Role / Title *</label>
                <div className="reg-radio-group">
                  {JOB_ROLES.map((r) => (
                    <label key={r} className="reg-radio-label">
                      <input
                        type="radio"
                        name="jobRole"
                        value={r}
                        checked={formData.jobRole === r}
                        onChange={() => setFormData((p) => ({ ...p, jobRole: r }))}
                      />
                      {r}
                    </label>
                  ))}
                </div>
                {formData.jobRole === "Other" && (
                  <input
                    type="text"
                    placeholder="Specify"
                    value={formData.jobRoleOther}
                    onChange={(e) => setFormData((p) => ({ ...p, jobRoleOther: e.target.value }))}
                    style={{ marginTop: "0.5rem" }}
                  />
                )}
                {errors.jobRole && <span className="reg-form-error">{errors.jobRole}</span>}
              </div>

              <div className="reg-form-group">
                <label>6. How did you hear about this training?</label>
                <div className="reg-checkbox-group">
                  {HEAR_ABOUT.map((h) => (
                    <label key={h} className="reg-checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.hearAbout.includes(h)}
                        onChange={() => toggleHearAbout(h)}
                      />
                      {h}
                    </label>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Other (specify)"
                  value={formData.hearAboutOther}
                  onChange={(e) => setFormData((p) => ({ ...p, hearAboutOther: e.target.value }))}
                  style={{ marginTop: "0.5rem" }}
                />
              </div>

              <div className="reg-form-group">
                <label>7. {experienceLabel} *</label>
                <div className="reg-radio-group">
                  {EXPERIENCE_LEVELS.map((l) => (
                    <label key={l} className="reg-radio-label">
                      <input
                        type="radio"
                        name="experienceLevel"
                        value={l}
                        checked={formData.experienceLevel === l}
                        onChange={() => setFormData((p) => ({ ...p, experienceLevel: l }))}
                      />
                      {l}
                    </label>
                  ))}
                </div>
                {errors.experienceLevel && <span className="reg-form-error">{errors.experienceLevel}</span>}
              </div>

              <div className="reg-form-group">
                <label>8. What are your key learning expectations from this training?</label>
                <textarea
                  rows={3}
                  value={formData.learningExpectations}
                  onChange={(e) => setFormData((p) => ({ ...p, learningExpectations: e.target.value }))}
                />
              </div>

              <div className="reg-form-group">
                <label>9. Who will be paying for the training? *</label>
                <div className="reg-radio-group">
                  {WHO_PAYS.map((w) => (
                    <label key={w} className="reg-radio-label">
                      <input
                        type="radio"
                        name="whoPays"
                        value={w}
                        checked={formData.whoPays === w}
                        onChange={() => setFormData((p) => ({ ...p, whoPays: w }))}
                      />
                      {w}
                    </label>
                  ))}
                </div>
                {errors.whoPays && <span className="reg-form-error">{errors.whoPays}</span>}
              </div>

              <div className="reg-form-group">
                <label>10. Do you require an official invoice? *</label>
                <div className="reg-radio-group">
                  {INVOICE_OPTIONS.map((o) => (
                    <label key={o} className="reg-radio-label">
                      <input
                        type="radio"
                        name="requireInvoice"
                        value={o}
                        checked={formData.requireInvoice === o}
                        onChange={() => setFormData((p) => ({ ...p, requireInvoice: o }))}
                      />
                      {o}
                    </label>
                  ))}
                </div>
                {errors.requireInvoice && <span className="reg-form-error">{errors.requireInvoice}</span>}
              </div>

              <div className="reg-form-group">
                <label>11. Any dietary preferences or restrictions? (for in-person training) *</label>
                <div className="reg-radio-group">
                  {DIETARY.map((d) => (
                    <label key={d} className="reg-radio-label">
                      <input
                        type="radio"
                        name="dietary"
                        value={d}
                        checked={formData.dietary === d}
                        onChange={() => setFormData((p) => ({ ...p, dietary: d }))}
                      />
                      {d}
                    </label>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Special note (allergy, etc.)"
                  value={formData.dietarySpecialNote}
                  onChange={(e) => setFormData((p) => ({ ...p, dietarySpecialNote: e.target.value }))}
                  style={{ marginTop: "0.5rem" }}
                />
                {errors.dietary && <span className="reg-form-error">{errors.dietary}</span>}
              </div>

              <div className="reg-form-group">
                <label>12. Any additional comments or special requests?</label>
                <textarea
                  rows={2}
                  value={formData.additionalComments}
                  onChange={(e) => setFormData((p) => ({ ...p, additionalComments: e.target.value }))}
                />
              </div>

              <div className="reg-form-group">
                <label>13. {termsText} *</label>
                <label className="reg-checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.confirmTerms}
                    onChange={(e) => setFormData((p) => ({ ...p, confirmTerms: e.target.checked }))}
                  />
                  Yes
                </label>
                {errors.confirmTerms && <span className="reg-form-error">{errors.confirmTerms}</span>}
              </div>

              <button type="submit" className="reg-modal-submit" disabled={submitting}>
                {submitting ? "Submitting…" : "Submit Registration"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
