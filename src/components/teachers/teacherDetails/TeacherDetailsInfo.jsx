import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

// Teacher er right side — name, stats strip, about info, social, button
export default function TeacherDetailsInfo({ teacher }) {
  const {
    name,
    role,
    courses,
    students,
    experience,
    phone,
    email,
    bio,
    social,
  } = teacher;

  return (
    <div className="flex-1">
      {/* Name & Role */}
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
        {name}
      </h1>
      <p className="text-gray-500 text-base mb-6">{role}</p>

      {/* Stats Strip */}
      <div className="border border-gray-200 rounded-lg px-6 py-5 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Courses & Students */}
          <div className="space-y-1">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">Course:</span>{" "}
              {courses}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">Students:</span>{" "}
              {students}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-1">
            <p className="text-sm font-semibold text-gray-800">Experience:</p>
            <p className="text-sm text-gray-600">{experience}</p>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-[--primary] transition-colors duration-200"
            >
              <FiPhone size={13} className="text-[--primary]" />
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-[--primary] transition-colors duration-200"
            >
              <FiMail size={13} className="text-[--primary]" />
              {email}
            </a>
          </div>
        </div>
      </div>

      {/* About Info */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">About Info</h2>
      <p className="text-gray-500 text-base leading-relaxed mb-8">{bio}</p>

      {/* Bottom Row — Social + Button */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={social.facebook}
            aria-label={`${name} Facebook`}
            className="w-9 h-9 rounded-full bg-[--primary] flex items-center justify-center text-white hover:opacity-85 transition-opacity duration-200"
          >
            <FaFacebookF size={14} />
          </a>
          <a
            href={social.instagram}
            aria-label={`${name} Instagram`}
            className="w-9 h-9 rounded-full bg-[--primary] flex items-center justify-center text-white hover:opacity-85 transition-opacity duration-200"
          >
            <FaInstagram size={14} />
          </a>
          <a
            href={social.twitter}
            aria-label={`${name} Twitter`}
            className="w-9 h-9 rounded-full bg-[--primary] flex items-center justify-center text-white hover:opacity-85 transition-opacity duration-200"
          >
            <FaTwitter size={14} />
          </a>
        </div>

        {/* Read More — teachers list e ফিরে যাবে */}
        <Link
          href="/teachers"
          className="inline-flex items-center gap-2 bg-[--primary] text-white text-sm font-semibold px-6 py-3 rounded hover:opacity-90 transition-opacity duration-200"
        >
          Read More
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
