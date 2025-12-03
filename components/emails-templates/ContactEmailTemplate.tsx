import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
  Link,
} from "@react-email/components";

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
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#f5f5f5", fontFamily: "Arial, sans-serif" }}>
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "40px 20px",
          }}
        >
          <Heading
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#1e2a3b",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            New Message Received
          </Heading>
          <Text
            style={{
              fontSize: "18px",
              color: "#6b7280",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            You have received a new message from your contact form.
          </Text>
          <Section
            style={{
              backgroundColor: "#ffffff",
              padding: "30px",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <Text style={{ fontSize: "16px", fontWeight: "bold", color: "#1e2a3b", marginBottom: "5px" }}>
              Name
            </Text>
            <Text style={{ fontSize: "16px", color: "#1e2a3b", marginBottom: "20px" }}>
              {name}
            </Text>

            <Text style={{ fontSize: "16px", fontWeight: "bold", color: "#1e2a3b", marginBottom: "5px" }}>
              Email
            </Text>
            <Text style={{ fontSize: "16px", color: "#1e2a3b", marginBottom: "20px" }}>
              {email}
            </Text>

            <Text style={{ fontSize: "16px", fontWeight: "bold", color: "#1e2a3b", marginBottom: "5px" }}>
              Message
            </Text>
            <Text style={{ fontSize: "16px", color: "#1e2a3b", marginBottom: "20px", whiteSpace: "pre-wrap" }}>
              {message}
            </Text>

            <Hr style={{ margin: "20px 0", borderColor: "#e5e7eb" }} />

            <Link
              href={`mailto:${email}?subject=${subject}`}
              style={{
                display: "inline-block",
                width: "100%",
                backgroundColor: "#374151",
                color: "#ffffff",
                padding: "12px 20px",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "6px",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Reply to message
            </Link>
          </Section>
          <Text
            style={{
              fontSize: "14px",
              color: "#6b7280",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            This is an automated notification. Please do not reply directly to this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
