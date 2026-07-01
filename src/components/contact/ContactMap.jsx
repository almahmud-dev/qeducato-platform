// components/contact/ContactMap.jsx

import { contactMapData } from "@/helper/contact/contactData";

export default function ContactMap() {
  return (
    <div className="w-full" style={{ height: contactMapData.height }}>
      <iframe
        src={contactMapData.src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}