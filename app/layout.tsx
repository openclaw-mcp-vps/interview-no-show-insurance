import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interview No-Show Insurance | Get Paid When Candidates Ghost",
  description: "Insurance pool where companies pay a small fee per interview and get compensated when candidates no-show. Protect your recruiting investment."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8c27af3c-2a79-4543-b127-14641516cf2f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
