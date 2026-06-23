import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ExpertTeacherCard({ teacher }) {
  const { name, role, image, social } = teacher;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      {/* Full rectangular image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Info */}
      <div className="px-5 pt-5 pb-5">
        <h3 className="text-[17px] font-bold text-gray-900 leading-snug">
          {name}
        </h3>
        <p className="text-sm text-[--primary] mt-1 mb-4">{role}</p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-4" />

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a
            href={social.facebook}
            aria-label={`${name} Facebook`}
            className="text-gray-400 hover:text-[--primary] transition-colors duration-200"
          >
            <FaFacebookF size={14} />
          </a>
          <a
            href={social.instagram}
            aria-label={`${name} Instagram`}
            className="text-gray-400 hover:text-[--primary] transition-colors duration-200"
          >
            <FaInstagram size={14} />
          </a>
          <a
            href={social.twitter}
            aria-label={`${name} Twitter`}
            className="text-gray-400 hover:text-[--primary] transition-colors duration-200"
          >
            <FaTwitter size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
