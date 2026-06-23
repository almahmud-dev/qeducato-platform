import Link from "next/link";
import courses from "@/helper/courses";
export const metadata = { title: "Courses Page 2", description: "More courses at Qeducato." };
export default function CoursesPage2() {
  return (
    <div style={{padding:"80px 0"}}>
      <div className="container">
        <div style={{textAlign:"center",marginBottom:48}}><span className="section-eyebrow">More Courses</span><h1 className="section-title">Discover More Programs</h1></div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}}>
          {courses.slice(3).map(c=>(
            <Link key={c.slug} href={`/courses/${c.slug}`} className="card" style={{textDecoration:"none",display:"block"}}>
              <div style={{background:"#dde4ec",height:180,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem"}}>📚</div>
              <div style={{padding:18}}>
                <h3 style={{fontWeight:700,color:"var(--secondary)",marginBottom:8}}>{c.title}</h3>
                <p style={{fontSize:"0.85rem",color:"var(--text-muted)",lineHeight:1.6}}>{c.description.slice(0,90)}...</p>
                <div style={{marginTop:12,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",justifyContent:"space-between"}}>
                  <span style={{fontWeight:700,color:"var(--primary)"}}>${c.price}</span>
                  <span style={{fontSize:"0.8rem",color:"var(--primary)",fontWeight:600}}>View →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:32}}><Link href="/courses" style={{color:"var(--primary)",fontWeight:600}}>← Back to All Courses</Link></div>
      </div>
    </div>
  );
}
