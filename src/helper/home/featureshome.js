import { MdOutlineLocalOffer } from "react-icons/md";
import { BiAtom } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import featureImg1 from "@/../public/images/home/feature/_3.jpg";
import featureImg2 from "@/../public/images/home/feature/_3.jpg";
import featureImg3 from "@/../public/images/home/feature/_3.jpg";

export const featuresList = [
  {
    image: featureImg1,
    icon: <HiOutlineAcademicCap className="w-5 h-5 text-background" aria-hidden="true" />,
    iconBg: "bg-primary",
    tag: "B.Sc. / M.Sc.",
    title: "Skilled Teachers",
    desc: "Innovate the future with cutting-edge programs taught by highly experienced, supportive, and dedicated expert faculty members.",
    students: "4,250+",
    rating: "4.8/5",
    borderColor: "border-b-primary",
  },
  {
    image: featureImg2,
    icon: <MdOutlineLocalOffer className="w-5 h-5 text-background" aria-hidden="true" />,
    iconBg: "bg-secondary",
    tag: "BBA / MBA",
    title: "Affordable Courses",
    desc: "Develop leadership and strategic skills with our cost-effective and budget-friendly global educational modules.",
    students: "6,150+",
    rating: "4.7/5",
    borderColor: "border-b-secondary",
  },
  {
    image: featureImg3,
    icon: <BiAtom className="w-5 h-5 text-background" aria-hidden="true" />,
    iconBg: "bg-foreground",
    tag: "B.Sc. / M.Sc.",
    title: "Efficient & Flexible",
    desc: "Explore the world of modern learning with schedule models that seamlessly blend with your professional life goals.",
    students: "3,780+",
    rating: "4.6/5",
    borderColor: "border-b-foreground",
  },
];