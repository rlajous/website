interface EmailTemplateProps {
  message: string;
  name: string;
  email: string;
}

export default function EmailTemplate({
  message,
  name,
  email,
}: EmailTemplateProps) {
  const subject = encodeURIComponent(
    `Re: Contact Form Submission from ${name}`
  );

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "40px 20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          color: "#1e2a3b",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        New Message Received
      </h1>
      <p
        style={{
          fontSize: "18px",
          color: "#6b7280",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        You have received a new message from your contact form.
      </p>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <label
              style={{ fontSize: "16px", fontWeight: "bold", color: "#1e2a3b" }}
            >
              Name
            </label>
          </div>
          <input
            defaultValue={name}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              backgroundColor: "#ffffff",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <label
              style={{ fontSize: "16px", fontWeight: "bold", color: "#1e2a3b" }}
            >
              Email
            </label>
          </div>
          <input
            defaultValue={email}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              backgroundColor: "#ffffff",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <label
              style={{ fontSize: "16px", fontWeight: "bold", color: "#1e2a3b" }}
            >
              Message
            </label>
          </div>
          <textarea
            defaultValue={message}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              minHeight: "100px",
              backgroundColor: "#ffffff",
            }}
          />
        </div>
        <a
          href={`mailto:${email}?subject=${subject}`}
          style={{
            display: "inline-block",
            width: "100%",
            backgroundColor: "#374151",
            color: "#ffffff",
            padding: "12px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            textAlign: "center",
            textDecoration: "none",
            boxSizing: "border-box",
          }}
        >
          Reply to message
        </a>
      </div>
      <p
        style={{
          fontSize: "14px",
          color: "#6b7280",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        This is an automated notification. Please do not reply directly to this
        email.
      </p>
    </div>
  );
}
