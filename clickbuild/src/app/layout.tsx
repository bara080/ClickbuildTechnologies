// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClickBuild Technologies | B2B Mobile & SaaS Solutions",
  description:
    "Bridge the gap between services & clients with ClickBuild — mobile-first and cloud SaaS solutions.",
  robots: { index: false, follow: false }, // set false/false while staging
  verification: {
    google: "KXtYyJTO8990A-UZV1IV2GxHvvx2bI50dPW6zX3mcqc", // paste ONLY the code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
