import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "react-email";

export type WaitlistEmailProps = {
  fullName: string;
  country: string;
  email: string;
  priceRange: string;
};

export const WaitlistEmail = ({
  fullName,
  country,
  email,
  priceRange,
}: WaitlistEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Apex Cabins waitlist signup from {fullName}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>New waitlist signup</Heading>
          <Text style={styles.intro}>
            Someone joined the Apex Cabins stay waitlist on the Giveon Apex
            website.
          </Text>

          <Section style={styles.card}>
            <Text style={styles.label}>Full name</Text>
            <Text style={styles.value}>{fullName}</Text>

            <Hr style={styles.divider} />

            <Text style={styles.label}>Country</Text>
            <Text style={styles.value}>{country}</Text>

            <Hr style={styles.divider} />

            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{email}</Text>

            <Hr style={styles.divider} />

            <Text style={styles.label}>Cabin budget</Text>
            <Text style={styles.value}>{priceRange}</Text>
          </Section>

          <Text style={styles.footer}>
            You can reply directly to this email to respond to {fullName}.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

WaitlistEmail.PreviewProps = {
  fullName: "Ama Mensah",
  country: "Ghana",
  email: "ama@example.com",
  priceRange: "GHS 1,500 – 2,500 (~$125 – $208) / night",
} satisfies WaitlistEmailProps;

export default WaitlistEmail;

const styles = {
  body: {
    backgroundColor: "#000C04",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    margin: "0",
    padding: "24px 0",
  },
  container: {
    backgroundColor: "#013030",
    borderRadius: "12px",
    margin: "0 auto",
    maxWidth: "560px",
    padding: "32px 24px",
  },
  heading: {
    color: "#ffffff",
    fontSize: "28px",
    fontStyle: "italic",
    fontWeight: "400",
    lineHeight: "1.2",
    margin: "0 0 12px",
  },
  intro: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "14px",
    lineHeight: "1.5",
    margin: "0 0 24px",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(217, 219, 219, 0.35)",
    borderRadius: "8px",
    padding: "20px",
  },
  label: {
    color: "#e38837",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "0.04em",
    margin: "0 0 4px",
    textTransform: "uppercase" as const,
  },
  value: {
    color: "#ffffff",
    fontSize: "16px",
    lineHeight: "1.4",
    margin: "0",
  },
  divider: {
    borderColor: "rgba(217, 219, 219, 0.2)",
    margin: "16px 0",
  },
  footer: {
    color: "rgba(255, 255, 255, 0.55)",
    fontSize: "12px",
    lineHeight: "1.5",
    margin: "24px 0 0",
  },
};
