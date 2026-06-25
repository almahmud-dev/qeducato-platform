"use client";
import Container from "@/components/ui/Container";
import ExpertTeacherCard from "./ExpertTeacherCard";
import { expertTeachersData } from "@/helper/teachers/expertTeachersData";
import SectionHeader from "../common/SectionHeader";

export default function ExpertTeachers() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container size="xl">
        {/* Section heading */}
        <SectionHeader
          label="Our Teacher"
          text="Our Expert Teacher"
          colorWord="Expert"
        />

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
