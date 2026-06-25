import DirectionalButton from "@/components/common/DirectionalButton";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiPhone, FiMail, FiArrowRight } from "react-icons/fi";

const SOCIAL_LINKS = [
  { key: "facebook", label: "Facebook", Icon: FaFacebookF },
  { key: "instagram", label: "Instagram", Icon: FaInstagram },
  { key: "twitter", label: "Twitter", Icon: FaTwitter },
];

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

  const stats = [
    {
      group: [
        { label: "Courses", value: courses },
        { label: "Students", value: students },
      ],
    },
    {
      group: [{ label: "Experience", value: experience }],
    },
    {
      group: [
        {
          label: "Phone",
          value: phone,
          href: `tel:${phone}`,
          Icon: FiPhone,
        },
        {
          label: "Email",
          value: email,
          href: `mailto:${email}`,
          Icon: FiMail,
        },
      ],
    },
  ];

  return (
    <div className="flex-1 min-w-0">
      {/* Name & Role */}
      <div className="mb-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-1">
          {name}
        </h1>
        <p className="text-primary text-base font-medium">{role}</p>
      </div>

      {/* Stats Strip */}
      <div
        className="border border-border rounded-xl px-6 py-6 mb-8 bg-muted/10"
        role="list"
        aria-label={`${name} overview`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {/* Col 1 — Courses & Students */}
          <div className="space-y-2 pb-4 sm:pb-0" role="listitem">
            {stats[0].group.map(({ label, value }) => (
              <p key={label} className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{label}:</span>{" "}
                {value}
              </p>
            ))}
          </div>

          {/* Col 2 — Experience */}
          <div className="space-y-1 py-4 sm:py-0 sm:px-6" role="listitem">
            <p className="text-sm font-semibold text-foreground">Experience</p>
            <p className="text-sm text-muted-foreground">{experience}</p>
          </div>

          {/* Col 3 — Contact */}
          <div className="space-y-2 pt-4 sm:pt-0 sm:px-6" role="listitem">
            {stats[2].group.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={`${label}: ${value}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:text-primary transition-colors duration-200 group"
              >
                <Icon
                  size={13}
                  className="text-primary shrink-0"
                  aria-hidden="true"
                />
                <span className="truncate group-hover:underline underline-offset-2">
                  {value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-3">About Info</h2>
        <p className="text-muted text-base leading-relaxed">{bio}</p>
      </div>

      {/* Bottom Row — Social + CTA */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Social Icons */}
        <div
          className="flex items-center gap-2"
          role="list"
          aria-label={`${name} social media`}
        >
          {SOCIAL_LINKS.map(({ key, label, Icon }) =>
            social[key] ? (
              <a
                key={key}
                href={social[key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on ${label}`}
                role="listitem"
                className="w-10 h-10 rounded-full bg-[#125875] flex items-center justify-center text-white hover:bg-primary hover:scale-110 hover:shadow-lg transition-all duration-700 ease-out"
              >
                <Icon size={14} aria-hidden="true" />
              </a>
            ) : null,
          )}
        </div>

          {/* Back to Teachers */}
          <DirectionalButton
            href="/teachers"
            label="Read More"
            rightIcon={<BsArrowRight size={16} />}
            bgColor="#FF5101"
            flairColor="#125875"
            borderColor="#FF5101"
            textColor="#ffffff"
            textHoverColor="#ffffff"
            shadowHover=""
            size="md"
            className="font-semibold rounded-sm px-8 py-5.5"
          />
      </div>
    </div>
  );
}
