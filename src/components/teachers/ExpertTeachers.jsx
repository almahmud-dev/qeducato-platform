import Container from "@/components/ui/Container";
import ExpertTeacherCard from "./ExpertTeacherCard";
import { expertTeachersData } from "@/helper/teachers/expertTeachersData";

export default function ExpertTeachers() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container size="xl">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-[--primary] text-sm font-medium mb-2 flex items-center justify-center gap-1">
            {/* screenshot e emoji-style icon ache, text diye simulate korchi */}
            <span>🎓</span> Our Teacher
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Expert Teacher
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertTeachersData.map((teacher) => (
            <ExpertTeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </Container>
    </section>
  );
}
