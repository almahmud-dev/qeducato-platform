import courses from "@/helper/courses";
import { notFound } from "next/navigation";
import { FiUsers, FiClock, FiStar, FiUser } from "react-icons/fi";
export async function generateMetadata({ params }) {
  const course = courses.find(c => c.slug === params.slug);
  return { title: course?.title ?? "Course Not Found" };
}
export function generateStaticParams() {
  return courses.map(c => ({ slug: c.slug }));
}
export default function CourseDetailPage({ params }) {
  const course = courses.find(c => c.slug === params.slug);
  if (!course) notFound();
  return (
    <div style={{padding:"80px 0"}}>
      <div className="container" style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:48}}>
        <div>
          <span style={{fontSize:"0.8rem",background:"#fff3ee",color:"var(--primary)",padding:"4px 12px",borderRadius:20,fontWeight:600}}>{course.category}</span>
          <h1 style={{fontSize:"2.2rem",color:"var(--secondary)",fontFamily:"'Playfair Display',serif",margin:"16px 0 12px"}}>{course.title}</h1>
          <div style={{display:"flex",gap:20,marginBottom:24,fontSize:"0.9rem",color:"var(--text-muted)"}}>
            <span style={{display:"flex",alignItems:"center",gap:6}}><FiUser size={14}/>{course.instructor}</span>
            <span style={{display:"flex",alignItems:"center",gap:6}}><FiClock size={14}/>{course.duration}</span>
            <span style={{display:"flex",alignItems:"center",gap:6}}><FiUsers size={14}/>{course.students} students</span>
            <span style={{display:"flex",alignItems:"center",gap:6}}><FiStar size={14}/>{course.rating}</span>
          </div>
          <p style={{color:"var(--text-muted)",lineHeight:1.8,fontSize:"1rem"}}>{course.description}</p>
        </div>
        <div style={{background:"#fff",border:"1px solid var(--border)",borderRadius:10,padding:28,height:"fit-content",boxShadow:"0 4px 20px rgba(0,0,0,0.08)"}}>
          <div style={{fontSize:"2rem",fontWeight:700,color:"var(--primary)",marginBottom:4}}>${course.price}</div>
          <p style={{color:"var(--text-muted)",fontSize:"0.85rem",marginBottom:20}}>Full course access</p>
          <a href="/contact" className="btn-primary" style={{display:"block",textAlign:"center",textDecoration:"none",marginBottom:12}}>Enroll Now</a>
          <a href="/contact" className="btn-outline" style={{display:"block",textAlign:"center",textDecoration:"none"}}>Ask a Question</a>
        </div>
      </div>
    </div>
  );
}
