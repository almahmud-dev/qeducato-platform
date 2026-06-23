
import { notFound } from "next/navigation";
import { FiCalendar, FiUser } from "react-icons/fi";
import { formatDate } from "@/lib/utils";
import blogDetails from "@/helper/blogs/blogsDetails/details";
export async function generateMetadata({ params }) {
  const b = blogs.find(b => b.slug === params.slug);
  return { title: b?.title ?? "Post Not Found" };
}
export function generateStaticParams() {
  return blogDetails.map(b => ({ slug: b.slug }));
}
export default function BlogDetailPage({ params }) {
  const b = blogs.find(b => b.slug === params.slug);
  if (!b) notFound();
  return (
    <div style={{padding:"80px 0"}}>
      <div className="container" style={{maxWidth:780}}>
        <span style={{fontSize:"0.8rem",background:"#fff3ee",color:"var(--primary)",padding:"4px 12px",borderRadius:20,fontWeight:600}}>{b.category}</span>
        <h1 style={{fontSize:"2.2rem",color:"var(--secondary)",fontFamily:"'Playfair Display',serif",margin:"16px 0 14px"}}>{b.title}</h1>
        <div style={{display:"flex",gap:20,marginBottom:28,fontSize:"0.9rem",color:"var(--text-muted)"}}>
          <span style={{display:"flex",alignItems:"center",gap:6}}><FiUser size={14}/>{b.author} · {b.authorRole}</span>
          <span style={{display:"flex",alignItems:"center",gap:6}}><FiCalendar size={14}/>{formatDate(b.date)}</span>
        </div>
        <div style={{background:"#dde4ec",height:300,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"3rem",marginBottom:32}}>📰</div>
        <p style={{color:"var(--text-muted)",lineHeight:1.9,fontSize:"1rem"}}>{b.content}</p>
      </div>
    </div>
  );
}
