"use client";

import Image from "next/image";
import { Search, ChevronRight } from "lucide-react";

export default function CoursesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/40 via-white to-white">
      {/* Background Blur */}
      <div className="absolute -left-44 top-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-[130px]" />

      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-violet-200/20 blur-[150px]" />

      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid min-h-[700px] items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            {/* Breadcrumb */}

            <div className="mb-8 flex items-center gap-3 text-sm text-slate-500">
              <span>Home</span>

              <ChevronRight size={16} />

              <span className="font-medium text-indigo-600">Courses</span>
            </div>

            {/* Heading */}

            <h1 className="max-w-xl text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
              Discover Courses
              <br />
              That Build
              <span className="text-indigo-600"> Real Careers.</span>
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Explore industry-ready undergraduate, postgraduate and
              professional programs designed by expert faculty to help you
              achieve your future goals.
            </p>

            {/* Search */}

            <div className="mt-10 flex max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-indigo-100/30">
              <input
                type="text"
                placeholder="Search programs, departments..."
                className="h-16 flex-1 bg-transparent px-6 outline-none"
              />

              <button className="flex w-20 items-center justify-center bg-indigo-600 transition hover:bg-indigo-700">
                <Search size={22} className="text-white" />
              </button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            {/* Main Image */}

            <div className="relative overflow-hidden rounded-[36px]">
              <Image
                src="/images/hero/student.png"
                alt="University Student"
                width={700}
                height={800}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Floating Card 01 */}

            <div className="absolute left-0 top-16 rounded-3xl border border-white/60 bg-white/90 px-6 py-5 shadow-2xl backdrop-blur-md">
              <h4 className="text-3xl font-bold text-slate-900">96%</h4>

              <p className="mt-1 text-slate-500">Placement Rate</p>
            </div>

            {/* Floating Card 02 */}

            <div className="absolute -bottom-8 right-0 rounded-3xl border border-white/60 bg-white/90 px-8 py-6 shadow-2xl backdrop-blur-md">
              <h4 className="text-3xl font-bold text-slate-900">25K+</h4>

              <p className="mt-1 text-slate-500">Students Enrolled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
