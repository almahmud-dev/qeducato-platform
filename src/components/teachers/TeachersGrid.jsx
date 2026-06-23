"use client"
import Container from "@/components/ui/Container";
import TeacherCard from "./TeacherCard";
import { teachersData } from "@/helper/teachers/teachersData";

export default function TeachersGrid() {
  return (
    <section className="py-16 md:py-20 bg-[#f8fafc]">
      <Container size="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachersData.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </Container>
    </section>
  );
}