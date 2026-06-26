// components/contact/ContactInfo.jsx

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { contactInfoData } from "@/helper/contact/contactData";

const iconMap = {
  FaPhone: <FaPhone size={24} />,
  FaEnvelope: <FaEnvelope size={24} />,
  FaMapMarkerAlt: <FaMapMarkerAlt size={24} />,
};

export default function ContactInfo() {
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <p className="text-orange-500 text-sm font-medium flex items-center justify-center gap-2 mb-2">
          <FaEnvelope size={14} /> Contact Info
        </p>
        <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {contactInfoData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center py-10 px-6"
            style={{ backgroundColor: item.bg }}
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm text-gray-800">
              {iconMap[item.icon]}
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {item.title}
            </h3>
            <p className="text-sm" style={{ color: "#777" }}>
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}