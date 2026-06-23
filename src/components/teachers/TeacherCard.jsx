import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// TeacherCard — click korle /teachers/[slug] e navigate korbe
export default function TeacherCard({ teacher }) {
  const { name, role, avatar, social, slug } = teacher;

  return (
    // Full card ta Link এ wrap kora hoyeche
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

        {/* Social icons — link alada tai card click theke alda korte e.preventDefault chain vanga hoyeche */}
        <div className="flex items-center gap-3">
          {[
            { href: social.facebook, label: "Facebook", Icon: FaFacebookF },
            { href: social.instagram, label: "Instagram", Icon: FaInstagram },
            { href: social.twitter, label: "Twitter", Icon: FaTwitter },
          ].map(({ href, label, Icon }) => (
            <button
              key={label}
              aria-label={`${name} ${label}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(href, "_blank", "noopener,noreferrer");
              }}
              className="text-gray-400 hover:text-[--primary] transition-colors duration-200"
            >
              <Icon size={14} />
            </button>
          ))}
        </div>
      </div>
    </Link>
  );
}
