import pricing from "@/helper/pricing";
import { FiCheck, FiX } from "react-icons/fi";
export const metadata = { title: "Pricing", description: "Affordable tuition plans at Qeducato." };
export default function PricingPage() {
  return (
    <div style={{padding:"80px 0"}}>
      <div className="container">
        <div style={{textAlign:"center",marginBottom:48}}>
          <span className="section-eyebrow">Pricing</span>
          <h1 className="section-title">Choose Your Plan</h1>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:28}}>
          {pricing.map(p=>(
            <div key={p.id} style={{borderRadius:10,border:p.popular?"2px solid var(--primary)":"1px solid var(--border)",padding:32,textAlign:"center",position:"relative",background:p.color==="dark"?"var(--secondary)":"#fff"}}>
              {p.popular&&<span style={{position:"absolute",top:-14,left:"50%",transform:"translateX(-50%)",background:"var(--primary)",color:"#fff",padding:"4px 16px",borderRadius:20,fontSize:"0.75rem",fontWeight:700}}>Most Popular</span>}
              <h2 style={{fontSize:"1.2rem",fontWeight:700,color:p.color==="dark"?"#fff":"var(--secondary)",marginBottom:8}}>{p.plan}</h2>
              <div style={{fontSize:"2.5rem",fontWeight:700,color:"var(--primary)",marginBottom:4}}>${p.price}</div>
              <div style={{fontSize:"0.85rem",color:p.color==="dark"?"rgba(255,255,255,0.5)":"var(--text-muted)",marginBottom:24}}>{p.period}</div>
              <ul style={{listStyle:"none",marginBottom:28,textAlign:"left"}}>
                {p.features.map(f=><li key={f} style={{display:"flex",alignItems:"center",gap:8,marginBottom:10,fontSize:"0.9rem",color:p.color==="dark"?"rgba(255,255,255,0.8)":"var(--text)"}}><FiCheck size={16} color="var(--primary)"/>{f}</li>)}
                {p.notIncluded.map(f=><li key={f} style={{display:"flex",alignItems:"center",gap:8,marginBottom:10,fontSize:"0.9rem",color:"var(--text-muted)"}}><FiX size={16}/>{f}</li>)}
              </ul>
              <a href="/contact" style={{display:"block",padding:"12px 0",borderRadius:4,background:p.popular?"var(--primary)":"transparent",border:"2px solid var(--primary)",color:p.popular?"#fff":"var(--primary)",fontWeight:600,textDecoration:"none"}}>Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
