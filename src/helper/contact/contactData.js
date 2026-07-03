// helper/contact/contactData.js  ← pure JS, no JSX

export const contactInfoData = [
  {
    id: 1,
    icon: "FaPhone",
    title: "+1 (444) 000-8888",
    subtitle: "Phone Support",
    bg: "#EBF0FA",
  },
  {
    id: 2,
    icon: "FaEnvelope",
    title: "jobs@webtrueexample.com",
    subtitle: "Email Address",
    bg: "#FEF0E8",
  },
  {
    id: 3,
    icon: "FaMapMarkerAlt",
    title: "12/A, Dhanmondi, Dhaka",
    subtitle: "Office Address",
    bg: "#EBF0FA",
  },
];

export const contactFormData = {
  heading: "Custom Inquire Form",
  fields: [
    { id: "firstName", name: "firstName", type: "text", placeholder: "First Name", icon: "FaUser" },
    { id: "email", name: "email", type: "email", placeholder: "Email", icon: "FaEnvelope" },
    { id: "phone", name: "phone", type: "tel", placeholder: "Phone No", icon: "FaPhone" },
  ],
  textarea: { id: "message", name: "message", placeholder: "Write comments", rows: 6, icon: "FaEdit" },
  button: "Make An Request",
};

export const contactMapData = {
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2!2d90.3742!3d23.7461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd",
  height: "400px",
};