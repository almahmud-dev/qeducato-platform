export const metadata = { title: "About Us", description: "Learn about Qeducato University." };
export default function AboutPage() {
  return <div style={{minHeight:"60vh",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}}><div><h1 style={{fontSize:"2.5rem",color:"var(--secondary)",fontFamily:"'Playfair Display',serif",marginBottom:12}}>About Us</h1><p style={{color:"var(--text-muted)"}}>Learn about our mission, history, and commitment to excellence.</p></div></div>;
}
