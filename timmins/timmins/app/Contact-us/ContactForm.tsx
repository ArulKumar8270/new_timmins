"use client";

import React from "react";

export default function ContactForm() {
  return (
    <div className="cu-form-card">
      <div className="cu-form-card__header">
        <h3 className="cu-form-card__title">Plan Your Next Capability Move</h3>
        <p className="cu-form-card__sub">Tell us your goals and we’ll get back to you shortly.</p>
      </div>

      <form className="cu-form" onSubmit={(e) => e.preventDefault()}>
        <div className="cu-form__grid">
          <div className="cu-form__row">
            <label className="cu-form__label" htmlFor="cu-name">Full Name</label>
            <input id="cu-name" type="text" className="cu-form__input" placeholder="Your name" />
          </div>
          <div className="cu-form__row">
            <label className="cu-form__label" htmlFor="cu-org">Organization</label>
            <input id="cu-org" type="text" className="cu-form__input" placeholder="Company or institution" />
          </div>
        </div>

        <div className="cu-form__grid">
          <div className="cu-form__row">
            <label className="cu-form__label" htmlFor="cu-email">Email</label>
            <input id="cu-email" type="email" className="cu-form__input" placeholder="you@company.com" required />
          </div>
          <div className="cu-form__row">
            <label className="cu-form__label" htmlFor="cu-phone">Contact Number</label>
            <input id="cu-phone" type="tel" className="cu-form__input" placeholder="+60 ..." />
          </div>
        </div>

        <div className="cu-form__row">
          <label className="cu-form__label" htmlFor="cu-interest">Area of interest</label>
          <select id="cu-interest" className="cu-form__input cu-form__select">
            <option value="">Select an option</option>
            <option value="embedded">Embedded Systems</option>
            <option value="ai">AI & Machine Learning</option>
            <option value="5g">5G & Telecom</option>
            <option value="cloud">Cloud & DevOps</option>
            <option value="mobile">Mobile Development</option>
            <option value="safe">SAFe® / Agile</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="cu-form__row">
          <label className="cu-form__label" htmlFor="cu-message">Message (optional)</label>
          <textarea id="cu-message" className="cu-form__input cu-form__textarea" rows={4} placeholder="How can we help? Share your training or consulting needs." />
        </div>

        <button type="submit" className="cu-form__submit">
          <span>Connect with Our Team</span>
          <span className="cu-form__submit-arrow" aria-hidden="true">→</span>
        </button>
      </form>
    </div>
  );
}
