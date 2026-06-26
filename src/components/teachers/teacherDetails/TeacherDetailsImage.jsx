import Image from "next/image";

// avatar ekta image e diye details o dekhano hobe — alag detailImage lagbe na
export default function TeacherDetailsImage({ name, avatar }) {
  return (
    <div className="w-full lg:w-95 shrink-0">
      <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden">
        <Image
          src={avatar}
          alt={name}
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 380px"
        />
      </div>
    </div>
  );
}