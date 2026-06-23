import Container from "@/components/ui/Container";
import TeacherDetailsImage from "./TeacherDetailsImage";
import TeacherDetailsInfo from "./TeacherDetailsInfo";

export default function TeacherDetailsContent({ teacher }) {
  return (
    <section className="py-16 lg:py-20">
      <Container size="xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <TeacherDetailsImage
            name={teacher.name}
            avatar={teacher.avatar}
          />
          <TeacherDetailsInfo teacher={teacher} />
        </div>
      </Container>
    </section>
  );
}