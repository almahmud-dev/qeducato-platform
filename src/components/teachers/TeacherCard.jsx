import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function TeacherCard({ teacher }) {
  const { name, role, avatar, social, slug } = teacher;

  return (
    <Link href={`/teachers/${slug}`} className="group block">
      <div className="relative overflow-hidden flex flex-col items-center text-center bg-card rounded-3xl p-6 lg:p-10 border border-border shadow-md group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300">
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Avatar */}
        <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-primary/10 shadow-md group-hover:border-primary/30 transition-all duration-300 mb-4">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover object-top"
            sizes="120px"
          />
        </div>

        {/* Name */}
        <h3 className="text-[18px] font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>

        {/* Role */}
        <p className="text-sm text-primary mt-1 mb-4">{role}</p>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-4" />

        {/* Social Icons */}
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
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-primary hover:border-primary hover:text-white hover:scale-110 transition-all duration-200"
            >
              <Icon size={14} />
            </button>
          ))}
        </div>
      </div>
    </Link>
  );
}
