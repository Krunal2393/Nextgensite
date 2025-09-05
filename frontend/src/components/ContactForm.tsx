"use client";

import * as React from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

type FormValues = {
  name: string;
  phone: string;
  company: string;
  email: string;
};

export default function ContactForm() {
  const [values, setValues] = React.useState<FormValues>({
    name: "",
    phone: "",
    company: "",
    email: "",
  });
  const [submitting, setSubmitting] = React.useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || "Submission failed");
      }

      alert("Thanks! We received your message.");
      setValues({ name: "", phone: "", company: "", email: "" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message || "Something went wrong");
      } else {
        alert("Something went wrong");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="w-full bg-gradient-to-b from-sky-50 to-sky-100/70">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-12">
        {/* Form Header */}
        <header className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
            Get started with today
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            We help you shape your vision into bold, practical action.
          </p>
        </header>

        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className="rounded-xl bg-sky-100/40 p-6 backdrop-blur-[1px] ring-1 ring-sky-200/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              id="name"
              name="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              className="input-soft"
              required
            />
            <input
              id="phone"
              name="phone"
              placeholder="Mobile No."
              value={values.phone}
              onChange={handleChange}
              className="input-soft"
              inputMode="tel"
            />
            <input
              id="company"
              name="company"
              placeholder="Company"
              value={values.company}
              onChange={handleChange}
              className="input-soft"
            />
            <input
              id="email"
              name="email"
              placeholder="E-Mail"
              type="email"
              value={values.email}
              onChange={handleChange}
              className="input-soft"
            />
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="btn-gradient w-full"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </form>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Head Office",
              address:
                "Silver Residence-2, Science City Road, Opp. Empire Business House, Sola, Ahmedabad, Gujarat 380060",
            },
            {
              title: "Ahmedabad Office",
              address:
                "Sradbhu Complex-41, Drive In Rd, Big Bazar, Nr Himalaya Mall, Ahmedabad, Gujarat 380052",
            },
            {
              title: "Surat Office",
              address:
                "9th Floor, APMC Krushi Bazar, Yogini Ten Rd, Nr. Beside North Extension, Bagumpara, Surat 395003",
            },
          ].map((office, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-start"
            >
              <MapPin className="text-sky-600 mb-2" size={22} />
              <h3 className="font-semibold text-slate-800">{office.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{office.address}</p>
              <button className="mt-4 text-sm font-medium text-white bg-sky-600 px-4 py-1.5 rounded-md shadow hover:bg-sky-700">
                See on Map →
              </button>
            </div>
          ))}
        </div>

        {/* Contact Details Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-3">
            <Clock className="text-sky-600" size={20} />
            <div>
              <p className="text-sm font-medium text-slate-800">
                Monday - Saturday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-sm text-slate-500">Sunday: Closed</p>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-3">
            <Phone className="text-sky-600" size={20} />
            <span className="text-sm text-slate-800">+91 98982 98149</span>
          </div>

          <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-3">
            <Mail className="text-sky-600" size={20} />
            <span className="text-sm text-slate-800">
              support@nextgenbusiness.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
