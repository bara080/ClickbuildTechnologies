import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClickBuild Technologies | B2B Mobile & SaaS Solutions",
  description:
    "Bridge the gap between services & clients with ClickBuild — mobile-first and cloud SaaS solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="KXtYyJTO8990A-UZV1IV2GxHvvx2bI50dPW6zX3mcqc"
      />
      <body>{children}</body>
    </html>
  );
}
