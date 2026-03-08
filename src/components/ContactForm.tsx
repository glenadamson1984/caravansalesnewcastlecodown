"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-coastal-100 mb-1">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 focus:ring-2 focus:ring-coastal-400 focus:border-coastal-500 placeholder:text-slate-400"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-coastal-100 mb-1">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 focus:ring-2 focus:ring-coastal-400 focus:border-coastal-500 placeholder:text-slate-400"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-coastal-100 mb-1">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 focus:ring-2 focus:ring-coastal-400 focus:border-coastal-500 placeholder:text-slate-400"
          placeholder="Your phone number"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-coastal-100 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 focus:ring-2 focus:ring-coastal-400 focus:border-coastal-500 placeholder:text-slate-400"
          placeholder="Your enquiry about the Willerby Kirkland..."
        />
      </div>
      {status === "success" && (
        <p className="text-emerald-600 font-medium">
          Thanks! Your enquiry has been sent. We&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-medium">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 bg-white text-coastal-700 hover:bg-coastal-50 disabled:bg-slate-200 disabled:text-slate-500 font-semibold px-8 py-4 rounded-xl transition-colors"
      >
        {status === "sending" ? "Sending..." : "Send Enquiry"}
        {status !== "sending" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        )}
      </button>
    </form>
  );
}
