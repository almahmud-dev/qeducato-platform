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
        <div
          key={section.id}
          className="flex flex-col lg:flex-row"
          style={{ minHeight: "480px" }}
        >
          {section.imagePosition === "right" ? (
            <>
              {/* Left: Content */}
              <div
                className="w-full lg:w-1/2 flex items-center px-20 py-16"
                style={{ backgroundColor: "#0d2e3e" }}
              >
                <div>
                  <div className="mb-6">{iconMap[section.icon]}</div>
                  <h2 className="text-5xl font-bold text-white mb-5">{section.title}</h2>
                  <p className="text-sm text-white leading-relaxed">{section.description}</p>
                </div>
              </div>

              {/* Right: Image */}
              <div className="w-full lg:w-1/2 relative" style={{ minHeight: "480px" }}>
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </>
          ) : (
            <>
              {/* Left: Image */}
              <div className="w-full lg:w-1/2 relative" style={{ minHeight: "480px" }}>
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>

              {/* Right: Content */}
              <div
                className="w-full lg:w-1/2 flex items-center px-20 py-16"
                style={{ backgroundColor: "#0d2e3e" }}
              >
                <div>
                  <div className="mb-6">{iconMap[section.icon]}</div>
                  <h2 className="text-5xl font-bold text-white mb-5">{section.title}</h2>
                  <p className="text-sm text-white leading-relaxed">{section.description}</p>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}