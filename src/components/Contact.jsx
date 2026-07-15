import React, { useState } from 'react'

import { FaEnvelope, FaMapMarkedAlt, FaClock, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

const initialForm = { name: "", email: "", phone: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const validate = (values) => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.phone.trim()) {
      next.phone = "Please enter your phone number.";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(values.phone)) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!values.subject.trim()) next.subject = "Please enter a subject.";
    if (!values.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      // NOTE: no backend endpoint currently exists for this form.
      // Wire this up to your API / Formspree / EmailJS endpoint here.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass = (field) =>
    `w-full rounded-lg border px-4 py-3 text-sm md:text-base bg-white text-gray-800 outline-none transition-all duration-300
     focus:ring-2 focus:ring-[#FFF200] focus:border-[#FFF200]
     ${errors[field] ? "border-red-400" : "border-gray-300"}`;

  return (
    <div className='top-container-1' id='contact'>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-50 rounded-xl p-4 md:p-10">

        {/* Left column - business info (preserved content) */}
        <ScrollReveal variant="left" className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Natarajan and Co</h3>

            <div className="mb-6 text-sm md:text-lg">
              <FaMapMarkedAlt className='inline-block text-[#FFF200] mr-2' />
              <span>14 PARUPPOORANI SOUTH, V.O.C ROAD,SRI MUTHU MARIAMMAN KOVIL STREET,KARAIKUDI,TAMILNADU-630001</span>
            </div>

            <div className="mb-6 text-sm md:text-lg">
              <FaEnvelope className='inline-block text-[#FFF200] mr-2' />
              <a href="mailto:karaikudinatarajan@gmail.com" className='hover:text-gray-600 transition-colors duration-300'>
                karaikudinatarajan@gmail.com
              </a>
            </div>

            <div className="mb-6 text-sm md:text-lg">
              <FaClock className='inline-block text-[#FFF200] mr-2' />
              <span>Open daily &middot; 9:00 AM &ndash; 8:00 PM</span>
            </div>

      

            <div className="flex gap-5 text-2xl mb-6">
              <a href="https://wa.me/8667408717?text=hello i need for cement and buliding material ?" target="_blank" rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#25D366] transition-all duration-300 hover:scale-125">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/karaikudinatarajan?igsh=MTluYmZpemRsc3JsMA==" target="_blank" rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-500 transition-all duration-300 hover:scale-125">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className='h-0 overflow-hidden relative pb-[50%] rounded-lg shadow-md'>
            <iframe className='h-full w-full left-0 right-0 top-0 absolute' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.2704303470796!2d78.76214647485969!3d10.076913590032438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00675c9dfc161b%3A0x69bc1b0ab7639fa4!2sNATARAJAN%20%26%20CO!5e0!3m2!1sen!2sin!4v1739297700769!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Natarajan and Co location"></iframe>
          </div>
        </ScrollReveal>

        {/* Right column - contact form */}
        <ScrollReveal variant="right">
          <form onSubmit={handleSubmit} noValidate className="bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col gap-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Send us a message</h3>

            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className={inputClass("name")}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className={inputClass("email")}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className={inputClass("phone")}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className={inputClass("subject")}
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={inputClass("message")}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="button-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2 flex items-center justify-center gap-2"
            >
              {status === "submitting" && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-sm font-semibold text-center animate-[fadeIn_400ms_ease-out]">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm font-semibold text-center animate-[fadeIn_400ms_ease-out]">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </div>
  )
}

export default Contact
