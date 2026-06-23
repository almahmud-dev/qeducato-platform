
import teacherDetails from "@/helper/teachers/teachersDetails/details";
import { notFound } from "next/navigation";
import { FiBookOpen, FiUsers, FiMail } from "react-icons/fi";
export async function generateMetadata({ params }) {
  const t = teachers.find(t => t.slug === params.slug);
  return { title: t?.name ?? "Teacher Not Found" };
}
export function generateStaticParams() {
  return teacherDetails.map(t => ({ slug: t.slug }));
}
export default function TeacherDetailPage({ params }) {
  const t = teachers.find(t => t.slug === params.slug);
  if (!t) notFound();
  return (
    <div style={{padding:"80px 0"}}>
      <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:48}}>
        <div>
          <div style={{background:"#dde4ec",height:320,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"4rem",marginBottom:20}}>👤</div>
          <div style={{display:"flex",gap:16,textAlign:"center"}}>
            {[{Icon:FiBookOpen,val:t.courses,lab:"Courses"},{Icon:FiUsers,val:t.students,lab:"Students"},{Icon:null,val:t.experience,lab:"Experience"}].map((s,i)=>(
              <div key={i} style={{flex:1,background:"var(--bg-alt)",borderRadius:8,padding:"12px 8px"}}>
                <div style={{fontWeight:700,color:"var(--primary)",fontSize:"1.1rem"}}>{s.val}</div>
                <div style={{fontSize:"0.75rem",color:"var(--text-muted)"}}>{s.lab}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="section-eyebrow">Faculty</span>
          <h1 style={{fontSize:"2.2rem",color:"var(--secondary)",fontFamily:"'Playfair Display',serif",marginBottom:4}}>{t.name}</h1>
          <p style={{color:"var(--primary)",fontWeight:600,marginBottom:20}}>{t.role}</p>
          <p style={{color:"var(--text-muted)",lineHeight:1.8,marginBottom:20}}>{t.bio}</p>
          <div style={{display:"flex",alignItems:"center",gap:8,color:"var(--text-muted)",fontSize:"0.9rem"}}><FiMail size={16} color="var(--primary)"/>{t.email}</div>
        </div>
      </div>
    </div>
  );
}
