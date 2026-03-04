"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function CollaborationSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.send(
        "service_r9o2uei",     // 🔹 Replace this
        "template_yw4o09r",    // 🔹 Replace this
        form,
        "Y1h6UYGkeQ6YJI11w"      // 🔹 Replace this
      );

      setSuccess(true);

      // Reset form
      setForm({
        name: "",
        company: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message ❌");
    }

    setLoading(false);
  };

  return (
    <section className="bg-slate-900 border-t border-slate-800 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Start Your Industrial Transformation
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Interested in deploying RTLS, predictive monitoring, or custom IoT
          systems? Let’s collaborate and build scalable industrial solutions.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid gap-6"
      >
        <input
          type="text"
          value={form.name}
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="text"
          value={form.company}
          placeholder="Company Name"
          required
          className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
          onChange={(e) =>
            setForm({ ...form, company: e.target.value })
          }
        />

        <input
          type="email"
          value={form.email}
          placeholder="Email Address"
          required
          className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <textarea
          value={form.message}
          placeholder="Project Requirement / Message"
          rows={4}
          required
          className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-3 rounded-lg font-medium transition"
        >
          {loading ? "Sending..." : "Request Consultation"}
        </button>

        {success && (
          <p className="text-green-500 text-center">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
}
