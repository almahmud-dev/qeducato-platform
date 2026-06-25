"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaChalkboardTeacher,
  FaBook,
  FaClock,
  FaUsers,
  FaGlobe,
  FaArrowRight,
  FaCheck,
  FaChevronDown,
  FaChevronLeft,
} from "react-icons/fa";

export default function CourseDetailsContent({ course }) {
  const [openFaq, setOpenFaq] = useState(course.faq[0]?.id || null);

  const discount = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT CONTENT */}
          <div className="flex-1 min-w-0">

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {course.title}
            </h1>

            {/* Main Image */}
            <div className="relative w-full h-80 mb-6 overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Teacher Info Bar */}
            <div className="flex items-center justify-between bg-gray-900 px-5 py-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={course.teacher.avatar}
                    alt={course.teacher.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">
                    {course.teacher.name}
                  </p>
                  <p className="text-gray-400 text-xs">{course.teacher.role}</p>
                </div>
                <div className="ml-6">
                  <p className="text-white text-sm font-semibold leading-tight">
                    {course.teacher.category}
                  </p>
                  <p className="text-gray-400 text-xs">Categories</p>
                </div>
              </div>
              <span className="bg-orange-500 text-white text-sm px-5 py-2">
                ${course.price}.00
              </span>
            </div>

            {/* Course Overview */}
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Course Overview
            </h2>
            {course.overview.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: "#777" }}>
                {para}
              </p>
            ))}

            {/* What You Will Learn */}
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              What You Will Learn
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {course.whatYouWillLearn.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <FaCheck size={12} className="text-orange-500 mt-1 shrink-0" />
                  <p className="text-sm" style={{ color: "#777" }}>{item}</p>
                </div>
              ))}
            </div>

            {/* Study Options */}
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Study Options:
            </h2>
            <table className="w-full text-sm mb-10">
              <thead>
                <tr className="bg-orange-500 text-white">
                  <th className="text-left px-4 py-3 font-medium">Qualification</th>
                  <th className="text-left px-4 py-3 font-medium">Length</th>
                  <th className="text-left px-4 py-3 font-medium">Code</th>
                </tr>
              </thead>
              <tbody>
                {course.studyOptions.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3" style={{ color: "#777" }}>{row.qualification}</td>
                    <td className="px-4 py-3" style={{ color: "#777" }}>{row.length}</td>
                    <td className="px-4 py-3" style={{ color: "#777" }}>{row.code}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* FAQ */}
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Frequently Asked Question
            </h2>
            <p className="text-sm mb-6" style={{ color: "#777" }}>
              A business or organization established to provide a particular service.
            </p>
            <div className="flex flex-col gap-3">
              {course.faq.map((item) => (
                <div key={item.id} className="border border-gray-200">
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === item.id ? null : item.id)
                    }
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#777" }}
                    >
                      {item.question}
                    </span>
                    {openFaq === item.id ? (
                      <FaChevronDown size={12} style={{ color: "#777" }} />
                    ) : (
                      <FaChevronLeft size={12} style={{ color: "#777" }} />
                    )}
                  </button>
                  {openFaq === item.id && (
                    <div className="px-5 pb-4">
                      <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-72 shrink-0">
            <div className="sticky top-20">
              <div className="border border-gray-200">

                {/* Sidebar Header */}
                <div className="bg-gray-900 px-5 py-4">
                  <h3 className="text-white font-semibold text-base">
                    Course Features
                  </h3>
                </div>

                {/* Price */}
                <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
                  <span className="text-orange-500 font-bold text-xl">
                    ${course.price}.00
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    ${course.originalPrice}.00
                  </span>
                  <span className="bg-orange-100 text-orange-500 text-xs px-2 py-0.5 font-medium">
                    {discount}% OFF
                  </span>
                </div>

                {/* Feature List */}
                <div className="px-5 py-4 flex flex-col gap-4">
                  {[
                    { icon: <FaChalkboardTeacher size={14} />, label: "Instructor", value: course.instructor },
                    { icon: <FaBook size={14} />, label: "Lectures", value: course.lectures },
                    { icon: <FaClock size={14} />, label: "Duration", value: course.duration },
                    { icon: <FaUsers size={14} />, label: "Enrolled", value: `${course.enrolled} students` },
                    { icon: <FaGlobe size={14} />, label: "Language", value: course.language },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-sm border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <div className="flex items-center gap-2" style={{ color: "#777" }}>
                        <span className="text-orange-500">{item.icon}</span>
                        {item.label}:
                      </div>
                      <span style={{ color: "#777" }}>{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Enroll Button */}
                <div className="px-5 pb-5">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-3 flex items-center justify-center gap-2 transition-colors duration-200">
                    Enroll <FaArrowRight size={12} />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}