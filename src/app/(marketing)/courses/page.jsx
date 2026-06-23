import Link from "next/link";
import courses from "@/helper/courses";
import { FiUsers, FiClock, FiStar } from "react-icons/fi";
export const metadata = { title: "Courses", description: "Explore all courses at Qeducato University." };
export default function CoursesPage() {
  return (
    <div style={{padding:"80px 0"}}>
      <div className="container">
        <div style={{textAlign:"center",marginBottom:48}}><span className="section-eyebrow">All Courses</span><h1 className="section-title">Explore Our Programs</h1></div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}}>
          {courses.map(c=>(
            <Link key={c.slug} href={`/courses/${c.slug}`} className="card" style={{textDecoration:"none",display:"block"}}>
              <div style={{background:"#dde4ec",height:180,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem"}}>📚</div>
              <div style={{padding:18}}>
                <span style={{fontSize:"0.75rem",background:"#fff3ee",color:"var(--primary)",padding:"3px 10px",borderRadius:20,fontWeight:600}}>{c.category}</span>
                <h3 style={{margin:"10px 0 8px",fontSize:"1rem",fontWeight:700,color:"var(--secondary)"}}>{c.title}</h3>
                <p style={{fontSize:"0.85rem",color:"var(--text-muted)",marginBottom:12,lineHeight:1.6}}>{c.description.slice(0,90)}...</p>
                <div style={{display:"flex",gap:14,fontSize:"0.8rem",color:"var(--text-muted)"}}>
                  <span style={{display:"flex",alignItems:"center",gap:4}}><FiClock size={12}/>{c.duration}</span>
                  <span style={{display:"flex",alignItems:"center",gap:4}}><FiUsers size={12}/>{c.students}</span>
                  <span style={{display:"flex",alignItems:"center",gap:4}}><FiStar size={12}/>{c.rating}</span>
                </div>
                <div style={{marginTop:12,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",justifyContent:"space-between"}}>
                  <span style={{fontWeight:700,color:"var(--primary)"}}>${c.price}</span>
                  <span style={{fontSize:"0.8rem",color:"var(--primary)",fontWeight:600}}>Enroll Now →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
