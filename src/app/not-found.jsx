import Link from "next/link";
export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div>
        <div
          style={{ fontSize: "5rem", fontWeight: 700, color: "var(--primary)" }}
        >
          404
        </div>
        <h2
          style={{
            fontSize: "1.8rem",
            color: "var(--secondary)",
            marginBottom: 12,
          }}
        >
          Page Not Found
        </h2>
        <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="btn-primary"
          style={{ textDecoration: "none" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
