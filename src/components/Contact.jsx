import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

// Prefer environment variables, but default to the provided contact details
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'flowvaani@gmail.com';
const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE || '8319060160';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16" id="contact">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">Let’s Grow Your Business with Flowvaani</h2>
            <p className="mt-2 text-gray-600">Enter your details and our team will get in touch with you.</p>

            <div className="mt-6 space-y-4 text-gray-700">
              <p className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-blue-600" /> {CONTACT_EMAIL}</p>
              <p className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-blue-600" /> {CONTACT_PHONE}</p>
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-blue-600" /> Ambikapur, Chhattisgarh, India</p>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            {!submitted ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={onChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={onChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder={CONTACT_PHONE}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder={CONTACT_EMAIL}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">Thanks! 🎉</h3>
                <p className="mt-2 text-gray-600">Your details have been received. Our team will reach out shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
