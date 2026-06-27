import Image from "next/image";
import { FaUniversity, FaUserGraduate } from "react-icons/fa";
import { campusSectionsData } from "@/helper/about/aboutData";

const iconMap = {
  FaUniversity: <FaUniversity size={36} className="text-orange-500" />,
  FaUserGraduate: <FaUserGraduate size={36} className="text-orange-500" />,
};

export default function CampusSections() {
  return (
    <div>
      {campusSectionsData.map((section) => (
        <div key={section.id} className="flex flex-col lg:flex-row" style={{ minHeight: "420px" }}>
          {section.imagePosition === "right" ? (
            <>
              <div className="flex-1 flex items-center px-20 py-16" style={{ backgroundColor: "#0d2e3e" }}>
                <div className="max-w-lg">
                  <div className="mb-6">{iconMap[section.icon]}</div>
                  <h2 className="text-5xl font-bold text-white mb-5">{section.title}</h2>
                  <p className="text-sm text-white/80 leading-relaxed">{section.description}</p>
                </div>
              </div>
              <div className="relative flex-1 min-h-80">
                <Image src={section.image} alt={section.title} fill className="object-cover" />
              </div>
            </>
          ) : (
            <>
              <div className="relative flex-1 min-h-80">
                <Image src={section.image} alt={section.title} fill className="object-cover" />
              </div>
              <div className="flex-1 flex items-center px-20 py-16" style={{ backgroundColor: "#0d2e3e" }}>
                <div className="max-w-lg">
                  <div className="mb-6">{iconMap[section.icon]}</div>
                  <h2 className="text-5xl font-bold text-white mb-5">{section.title}</h2>
                  <p className="text-sm text-white/80 leading-relaxed">{section.description}</p>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}