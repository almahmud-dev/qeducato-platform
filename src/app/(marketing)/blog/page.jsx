import Link from "next/link";

import { FiCalendar, FiUser } from "react-icons/fi";
import { formatDate } from "@/lib/utils";
import blogs from "@/helper/blogs/blogs";
export const metadata = { title: "Blog", description: "Latest news and articles from Qeducato." };
export default function BlogPage() {
  return (
    <div style={{padding:"80px 0"}}>
      <div className="container">
        <div style={{textAlign:"center",marginBottom:48}}><span className="section-eyebrow">Our Blog</span><h1 className="section-title">Latest News & Articles</h1></div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:28}}>
          {blogs.map(b=>(
            <Link key={b.slug} href={`/blog/${b.slug}`} className="card" style={{textDecoration:"none",display:"block"}}>
              <div style={{background:"#dde4ec",height:200,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2.5rem"}}>📰</div>
              <div style={{padding:20}}>
                <span style={{fontSize:"0.75rem",background:"#fff3ee",color:"var(--primary)",padding:"3px 10px",borderRadius:20,fontWeight:600}}>{b.category}</span>
                <h3 style={{margin:"10px 0 10px",fontSize:"1rem",fontWeight:700,color:"var(--secondary)",lineHeight:1.4}}>{b.title}</h3>
                <p style={{fontSize:"0.85rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:14}}>{b.excerpt}</p>
                <div style={{display:"flex",gap:16,fontSize:"0.8rem",color:"var(--text-muted)"}}>
                  <span style={{display:"flex",alignItems:"center",gap:5}}><FiUser size={12}/>{b.author}</span>
                  <span style={{display:"flex",alignItems:"center",gap:5}}><FiCalendar size={12}/>{formatDate(b.date)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
