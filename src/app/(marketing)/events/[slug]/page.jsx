import events from "@/helper/events";
import { notFound } from "next/navigation";
import { FiCalendar, FiMapPin, FiClock } from "react-icons/fi";
import { formatDate } from "@/lib/utils";
export async function generateMetadata({ params }) {
  const e = events.find(e => e.slug === params.slug);
  return { title: e?.title ?? "Event Not Found" };
}
export function generateStaticParams() {
  return events.map(e => ({ slug: e.slug }));
}
export default function EventDetailPage({ params }) {
  const e = events.find(e => e.slug === params.slug);
  if (!e) notFound();
  return (
    <div style={{padding:"80px 0"}}>
      <div className="container" style={{maxWidth:800}}>
        <span style={{fontSize:"0.8rem",background:"#fff3ee",color:"var(--primary)",padding:"4px 12px",borderRadius:20,fontWeight:600}}>{e.category}</span>
        <h1 style={{fontSize:"2.2rem",color:"var(--secondary)",fontFamily:"'Playfair Display',serif",margin:"16px 0 20px"}}>{e.title}</h1>
        <div style={{display:"flex",gap:24,marginBottom:28,flexWrap:"wrap"}}>
          {[{Icon:FiCalendar,val:formatDate(e.date)},{Icon:FiClock,val:e.time},{Icon:FiMapPin,val:e.location}].map(({Icon,val},i)=>(
            <span key={i} style={{display:"flex",alignItems:"center",gap:8,color:"var(--text-muted)",fontSize:"0.9rem"}}><Icon size={16} color="var(--primary)"/>{val}</span>
          ))}
        </div>
        <div style={{background:"#dde4ec",height:300,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"3rem",marginBottom:28}}>📅</div>
        <p style={{color:"var(--text-muted)",lineHeight:1.8,fontSize:"1rem"}}>{e.description}</p>
        <a href="/contact" className="btn-primary" style={{display:"inline-block",textDecoration:"none",marginTop:28}}>Register for Event</a>
      </div>
    </div>
  );
}
