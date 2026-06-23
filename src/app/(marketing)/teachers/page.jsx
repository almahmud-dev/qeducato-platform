import teachers from "@/helper/teachers/teachers";
import Link from "next/link";

import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
export const metadata = { title: "Teachers", description: "Meet our expert faculty at Qeducato." };
export default function TeachersPage() {
  return (
    <div style={{padding:"80px 0"}}>
      <div className="container">
        <div style={{textAlign:"center",marginBottom:48}}><span className="section-eyebrow">Faculty</span><h1 className="section-title">Our Expert Teachers</h1></div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24}}>
          {teachers.map(t=>(
            <Link key={t.slug} href={`/teachers/${t.slug}`} className="card" style={{textDecoration:"none",display:"block",textAlign:"center"}}>
              <div style={{background:"#dde4ec",height:220,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"3rem"}}>👤</div>
              <div style={{padding:16}}>
                <h3 style={{fontWeight:700,color:"var(--secondary)",marginBottom:4}}>{t.name}</h3>
                <p style={{fontSize:"0.82rem",color:"var(--text-muted)",marginBottom:14}}>{t.role}</p>
                <div style={{display:"flex",justifyContent:"center",gap:8}}>
                  {[FiFacebook,FiTwitter,FiLinkedin].map((Icon,i)=><span key={i} style={{width:30,height:30,borderRadius:"50%",background:"var(--secondary)",display:"flex",alignItems:"center",justifyContent:"center"}}><Icon size={13} color="#fff"/></span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
