"use client";

import Image from "next/image";
import {
  Star,
  Users,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function CourseCard({
  image,
  category,
  title,
  duration,
  level,
  mode,
  rating,
  reviews,
  students,
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>

        {/* Wishlist */}
        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow transition hover:text-red-500">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="line-clamp-2 text-xl font-bold text-gray-900">
          {title}
        </h3>

        {/* Course Info */}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <span>{duration}</span>
          <span>•</span>
          <span>{level}</span>
          <span>•</span>
          <span>{mode}</span>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-1 text-sm">
              <Star
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
              <span className="font-medium">{rating}</span>
              <span className="text-gray-500">
                ({reviews})
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Users size={16} />
              {students} Students
            </div>
          </div>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-200 text-indigo-600 transition hover:bg-indigo-600 hover:text-white">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}