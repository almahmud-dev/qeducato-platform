"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPhone, FiMail, FiMapPin, FiCheck } from "react-icons/fi";
import Container from "@/components/ui/Container";
import DirectionalButton from "@/components/common/DirectionalButton";
import { contactContent } from "@/helper/about/aboutSectionsData";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  phone: FiPhone,
  mail: FiMail,
  pin: FiMapPin,
};

const initialForm = { name: "", email: "", subject: "", message: "" };

function FloatingField({ id, label, type = "text", value, onChange, error, textarea }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <Tag
        id={id}
        name={id}
        type={!textarea ? type : undefined}
        rows={textarea ? 4 : undefined}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`peer w-full rounded-xl border bg-background px-4 pt-5 pb-2 PeraThree text-foreground outline-none transition-colors resize-none ${
          error ? "border-red-400" : "border-border focus:border-primary"
        }`}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-3.5 caption text-muted transition-all pointer-events-none peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px]"
      >
        {label}
      </label>
      {error && <p className="caption text-red-500 mt-1">{error}</p>}
    </div>
  );
}

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-info",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        ".contact-form-card",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-28 bg-surface">
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="contact-info">
            <p className="label text-primary mb-3">{contactContent.eyebrow}</p>
            <h2 className="headingTwo text-secondary mb-5">
              {contactContent.title}
            </h2>
            <p className="PeraOne text-muted mb-10">{contactContent.desc}</p>

            <div className="space-y-6">
              {contactContent.details.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={item.id} className="flex items-center gap-4">
                    <span className="shrink-0 w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                      {Icon && <Icon size={20} />}
                    </span>
                    <div>
                      <p className="caption text-muted">{item.label}</p>
                      <p className="PeraTwo text-foreground font-semibold">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="contact-form-card bg-background rounded-3xl shadow-lg border border-border p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <span className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <FiCheck size={28} />
                </span>
                <h3 className="headingFive text-secondary mb-2">
                  Message Sent
                </h3>
                <p className="PeraThree text-muted max-w-xs">
                  Thanks for reaching out. Our team will get back to you
                  within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="label text-primary mt-6 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <FloatingField
                  id="name"
                  label="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <FloatingField
                  id="email"
                  label="Email Address"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <FloatingField
                  id="subject"
                  label="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  error={errors.subject}
                />
                <FloatingField
                  id="message"
                  label="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                  textarea
                />
                <DirectionalButton
                  label="Send Message"
                  type="submit"
                  bgColor="var(--color-primary)"
                  borderColor="var(--color-primary)"
                  textColor="#ffffff"
                  textHoverColor="#ffffff"
                  size="lg"
                  className="w-full"
                />
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}