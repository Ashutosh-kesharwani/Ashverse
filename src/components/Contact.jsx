import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { lazy, Suspense, useRef, useState } from "react";
import { toast } from "react-hot-toast";

import { config } from "../config/config.js";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
const EarthCanvas = lazy(() => import("./canvas/Earth"));

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error("Please fill all fields correctly.");
      return;
    }

    setLoading(true);

    const toastId = toast.loading("Sending your message...");

    try {
      await emailjs.send(
        config.emailServiceId,
        config.emailTemplateId,
        {
          from_name: form.name,
          to_name: config.myName,
          from_email: form.email,
          to_email: config.myEmail,
          message: form.message,
        },
        config.emailPublicKey
      );

      toast.success("Message sent successfully! I'll get back to you soon.", {
        id: toastId,
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message. Please try again later.", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    form.name.trim() &&
    form.email.trim() &&
    form.message.trim() &&
    isEmailValid(form.email);

  return (
    <div className="xl:mt-12 grid grid-cols-1 xl:grid-cols-2 gap-10 items-stretch overflow-hidden">
      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-col rounded-card border border-black-200 bg-black-100 p-6 sm:p-8 xl:aspect-square"
      >
        <p className={styles.sectionSubText}>Get in touch</p>

        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="mt-8 flex flex-1 flex-col gap-5"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label htmlFor="name" className="flex flex-col gap-2">
              <span className="font-medium text-white-100">
                Your Name <span className="text-required">*</span>
              </span>

              <input
                id="name"
                type="text"
                name="name"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl border border-black-200 bg-tertiary px-4 py-3.5 font-medium text-white-100 placeholder:text-secondary outline-none transition-colors duration-300 focus:border-accent"
              />
            </label>

            <label htmlFor="email" className="flex flex-col gap-2">
              <span className="font-medium text-white-100">
                Your Email <span className="text-required">*</span>
              </span>

              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-black-200 bg-tertiary px-4 py-3.5 font-medium text-white-100 placeholder:text-secondary outline-none transition-colors duration-300 focus:border-accent"
              />
            </label>
          </div>

          <label htmlFor="message" className="flex flex-col gap-2">
            <span className="font-medium text-white-100">
              Your Message <span className="text-required">*</span>
            </span>

            <textarea
              id="message"
              rows={6}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help?"
              className="min-h-36 w-full resize-none rounded-xl border border-black-200 bg-tertiary px-4 py-3.5 font-medium text-white-100 placeholder:text-secondary outline-none transition-colors duration-300 focus:border-accent"
            />
          </label>
          <button
            type="submit"
            disabled={loading || !isFormValid}
            className="w-full rounded-xl bg-accent px-8 py-3.5 font-bold text-white-100 transition-all duration-300 hover:bg-accent-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-accent"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* Earth */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="order-first h-[350px] md:h-[500px] xl:order-none xl:h-auto"
      >
        <Suspense fallback={null}>
          <EarthCanvas />
        </Suspense>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
