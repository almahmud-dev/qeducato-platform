import Link from "next/link";
import events from "@/helper/events";
import { FiCalendar, FiMapPin, FiClock } from "react-icons/fi";
import { formatDate } from "@/lib/utils";
export const metadata = { title: "Events", description: "Upcoming events at Qeducato University." };
export default function EventsPage() {
  return (
    <div style={{padding:"80px 0"}}>
      <div className="container">
        <div style={{textAlign:"center",marginBottom:48}}><span className="section-eyebrow">Events</span><h1 className="section-title">Upcoming Events</h1></div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}}>
          {events.map(e=>(
            <Link key={e.slug} href={`/events/${e.slug}`} className="card" style={{textDecoration:"none",display:"block"}}>
              <div style={{background:"#dde4ec",height:200,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2.5rem",position:"relative"}}>📅<span style={{position:"absolute",top:12,left:12,background:"var(--primary)",color:"#fff",padding:"3px 10px",borderRadius:20,fontSize:"0.75rem",fontWeight:600}}>{e.category}</span></div>
              <div style={{padding:20}}>
                <h3 style={{fontSize:"1rem",fontWeight:700,color:"var(--secondary)",marginBottom:10}}>{e.title}</h3>
                <div style={{display:"flex",flexDirection:"column",gap:6,fontSize:"0.83rem",color:"var(--text-muted)"}}>
                  <span style={{display:"flex",alignItems:"center",gap:6}}><FiCalendar size={13} color="var(--primary)"/>{formatDate(e.date)}</span>
                  <span style={{display:"flex",alignItems:"center",gap:6}}><FiClock size={13} color="var(--primary)"/>{e.time}</span>
                  <span style={{display:"flex",alignItems:"center",gap:6}}><FiMapPin size={13} color="var(--primary)"/>{e.location}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
