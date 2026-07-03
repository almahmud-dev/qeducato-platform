import Image from "next/image";
import Link from "next/link";
import { FiBookOpen, FiStar, FiBookmark } from "react-icons/fi";
import { categoryStyles } from "@/helper/courses/allCoursesData";

export default function CourseCard({ course, view = "grid", priority = false }) {
  const {
    slug,
    title,
    category,
    description,
    image,
    lessons,
    rating,
    reviewCount,
  } = course;

  const badgeClass =
    categoryStyles[category] ?? "bg-black/5 text-foreground/70";

  const isList = view === "list";

  return (
    <Link
      href={`/courses/${slug}`}
      className={`group flex overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
        isList ? "flex-row items-stretch" : "flex-col"
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          isList ? "w-40 shrink-0 sm:w-56" : "aspect-[4/3] w-full"
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes={
            isList
              ? "(max-width: 640px) 160px, 224px"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}
        >
          {category}
        </span>

        <button
          type="button"
          aria-label={`Bookmark ${title}`}
          onClick={(e) => e.preventDefault()}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-foreground/70 shadow-sm transition-colors hover:text-primary"
        >
          <FiBookmark className="h-4 w-4" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-serif text-lg font-semibold text-foreground">
          {title}
        </h3>
        <p className="line-clamp-2 text-sm text-foreground/60">
          {description}
        </p>

        <div className="mt-auto flex items-center gap-4 pt-2 text-sm text-foreground/60">
          <span className="flex items-center gap-1.5">
            <FiBookOpen className="h-4 w-4 text-secondary" />
            {lessons} Lessons
          </span>
          <span className="flex items-center gap-1">
            <FiStar className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-medium text-foreground">{rating}</span>
            <span>({reviewCount})</span>
          </span>
        </div>
      </div>
    </Link>
  );
}