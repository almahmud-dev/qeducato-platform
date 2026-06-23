import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// TeacherCard — click করলে /teachers/[slug] এ navigate করবে
export default function TeacherCard({ teacher }) {
  const { name, role, avatar, social, slug } = teacher;

  return (
    // পুরো card টা Link এ wrap করা হয়েছে
    <Link href={`/teachers/${slug}`} className="group block">
      <div className="flex flex-col items-center text-center bg-white rounded-2xl px-6 pt-8 pb-6 shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow duration-300">
        {/* Circular avatar */}
        <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-gray-100 mb-4">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover object-top"
            sizes="120px"
          />
        </div>

        {/* Name */}
        <h3 className="text-[17px] font-bold text-gray-900 leading-snug group-hover:text-[--primary] transition-colors duration-200">
          {name}
        </h3>

        {/* Role */}
        <p className="text-sm text-[--primary] mt-1 mb-4">{role}</p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-4" />

        {/* Social icons — e গুলো আলাদা link তাই card click থেকে আলাদা করতে e.preventDefault chain ভাঙা হয়েছে */}
        <div className="flex items-center gap-3">
          <a
            href={social.facebook}
            aria-label={`${name} Facebook`}
            onClick={(e) => e.stopPropagation()}
            className="text-gray-400 hover:text-[--primary] transition-colors duration-200"
          >
            <FaFacebookF size={14} />
          </a>
          <a
            href={social.instagram}
            aria-label={`${name} Instagram`}
            onClick={(e) => e.stopPropagation()}
            className="text-gray-400 hover:text-[--primary] transition-colors duration-200"
          >
            <FaInstagram size={14} />
          </a>
          <a
            href={social.twitter}
            aria-label={`${name} Twitter`}
            onClick={(e) => e.stopPropagation()}
            className="text-gray-400 hover:text-[--primary] transition-colors duration-200"
          >
            <FaTwitter size={14} />
          </a>
        </div>
      </div>
    </Link>
  );
}