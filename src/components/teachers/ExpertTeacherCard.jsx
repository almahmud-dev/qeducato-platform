import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ExpertTeacherCard({ teacher }) {
  const { name, role, image, social, slug } = teacher;

  return (
    <Link href={`/teachers/${slug}`} className="group block">
      <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
        {/* Full rectangular image */}
        <div className="relative w-full aspect-4/3 overflow-hidden">
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
          <h3 className="text-[17px] font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
            {name}
          </h3>
          <p className="text-sm text-primary mt-1 mb-4">{role}</p>

          {/* Divider */}
          <div className="w-full h-px bg-border mb-4" />

          {/* Social icons */}
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
                className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-primary hover:border-primary hover:text-white hover:scale-110 transition-all duration-200"
              >
                <Icon size={13} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}