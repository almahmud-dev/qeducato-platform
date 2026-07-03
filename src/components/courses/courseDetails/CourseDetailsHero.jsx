import Image from "next/image";
import { FiBookmark, FiShare2 } from "react-icons/fi";

export default function CourseDetailsHero({ course }) {
  const { tag, title, subtitle, image } = course;

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            {tag}
          </span>
          <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-xl text-sm text-foreground/60 sm:text-base">
            {subtitle}
          </p>
        </div>

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Bookmark this course"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-foreground/60 transition-colors hover:text-primary"
          >
            <FiBookmark className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Share this course"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-foreground/60 transition-colors hover:text-primary"
          >
            <FiShare2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative mt-6 aspect-[16/8] w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
        />

        {/* Teacher strip */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-secondary/95 px-5 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-white/70">
              <Image
                src={course.teacher.avatar}
                alt={course.teacher.name}
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
            <div className="text-white">
              <p className="text-sm font-semibold leading-tight">
                {course.teacher.name}
              </p>
              <p className="text-xs text-white/70 leading-tight">
                {course.category}
              </p>
            </div>
          </div>

          <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-white">
            ${course.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}