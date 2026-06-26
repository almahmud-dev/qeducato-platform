// components/contact/ContactForm.jsx

"use client";

import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaEdit,
    FaArrowRight,
} from "react-icons/fa";
import { contactFormData } from "@/helper/contact/contactData";
import Container from "../ui/Container";

const iconMap = {
    FaUser: <FaUser size={13} />,
    FaEnvelope: <FaEnvelope size={13} />,
    FaPhone: <FaPhone size={13} />,
    FaEdit: <FaEdit size={13} />,
};

const initialState = {
    firstName: "",
    email: "",
    phone: "",
    message: "",
};

export default function ContactForm() {
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim())
            newErrors.firstName = "First name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[0-9+\-\s]{7,15}$/.test(formData.phone)) {
            newErrors.phone = "Invalid phone number";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error("Please fix the errors before submitting.");
            return;
        }
        setLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            toast.success("Your request has been submitted successfully!");
            setFormData(initialState);
            setErrors({});
        } catch {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-16 bg-[#dbe2e7]"   >
            <Container>
                <Toaster position="top-right" />

            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900">
                    {contactFormData.heading}
                </h2>
            </div>

            <form onSubmit={handleSubmit} noValidate>
                {/* Fields Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    {contactFormData.fields.map((field) => (
                        <div key={field.id} className="relative">
                            <input
                                type={field.type}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                className="w-full bg-white px-4 py-3 pr-10 text-sm outline-none border border-transparent focus:border-orange-400 transition"
                                style={{ color: "#777" }}
                            />
                            <span
                                className="absolute right-4 top-1/2 -translate-y-1/2"
                                style={{ color: "#bbb" }}
                            >
                                {iconMap[field.icon]}
                            </span>
                            {errors[field.name] && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors[field.name]}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Textarea */}
                <div className="relative mb-6">
                    <textarea
                        name={contactFormData.textarea.name}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={contactFormData.textarea.placeholder}
                        rows={contactFormData.textarea.rows}
                        className="w-full bg-white px-4 py-3 pr-10 text-sm outline-none border border-transparent focus:border-orange-400 transition resize-none"
                        style={{ color: "#777" }}
                    />
                    <span className="absolute right-4 top-4" style={{ color: "#bbb" }}>
                        {iconMap[contactFormData.textarea.icon]}
                    </span>
                    {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                </div>

                {/* Submit */}
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-8 py-3 flex items-center gap-2 mx-auto transition-colors duration-200 disabled:opacity-60"
                    >
                        {loading ? "Sending..." : contactFormData.button}
                        {!loading && <FaArrowRight size={12} />}
                    </button>
                </div>
            </form>
            </Container>
        </section>
    );
}
