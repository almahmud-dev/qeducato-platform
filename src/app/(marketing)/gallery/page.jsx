export const metadata = { title: "Gallery", description: "Explore campus life at Qeducato." };
export default function GalleryPage() {
  return <div style={{minHeight:"60vh",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}}><div><h1 style={{fontSize:"2.5rem",color:"var(--secondary)",fontFamily:"'Playfair Display',serif",marginBottom:12}}>Gallery</h1><p style={{color:"var(--text-muted)"}}>Campus life, events, and facilities.</p></div></div>;
}
