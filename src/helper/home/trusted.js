import {
  RiBankLine,
  RiGroupLine,
  RiGlobalLine,
  RiAwardLine,
} from "react-icons/ri";
import harvard from "@/../public/images/brand/harvard.png";
import mit from "@/../public/images/brand/mit.png";
import stanford from "@/../public/images/brand/stanford.png";
import microsoft from "@/../public/images/brand/microsoft.png";
import google from "@/../public/images/brand/google.jpg";
import ibm from "@/../public/images/brand/ibm.png";

export const brandLogos = [
  { name: "Harvard University", src: harvard },
  { name: "MIT", src: mit },
  { name: "Stanford University", src: stanford },
  { name: "Microsoft", src: microsoft },
  { name: "Google", src: google },
  { name: "IBM", src: ibm },
];

export const statsData = [
  {
    icon: <RiBankLine className="w-6 h-6 text-primary" aria-hidden="true" />,
    iconBg: "bg-primary/10",
    countTo: 150,
    prefix: "",
    suffix: "+",
    label: "Partner Institutions",
    desc: "We partner with top universities and organizations worldwide.",
  },
  {
    icon: <RiGroupLine className="w-6 h-6 text-secondary" aria-hidden="true" />,
    iconBg: "bg-secondary/10",
    countTo: 500,
    prefix: "",
    suffix: "+",
    label: "Industry Collaborations",
    desc: "Strong connections with leading companies and organizations.",
  },
  {
    icon: (
      <RiGlobalLine className="w-6 h-6 text-foreground" aria-hidden="true" />
    ),
    iconBg: "bg-surface",
    countTo: 50,
    prefix: "",
    suffix: "+",
    label: "Countries Impacted",
    desc: "Our global network spans across 50+ countries.",
  },
  {
    icon: <RiAwardLine className="w-6 h-6 text-primary" aria-hidden="true" />,
    iconBg: "bg-primary/10",
    countTo: 25,
    prefix: "",
    suffix: "+",
    label: "Years of Excellence",
    desc: "Delivering quality education and building lasting partnerships.",
  },
];
