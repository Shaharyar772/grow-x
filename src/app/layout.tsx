import type { Metadata } from "next";
import "./globals.css";
import LoadingWrapper from "@/components/LoadingWrapper";

export const metadata: Metadata = {
  title: "GrowX | Invest & Multiply Your Wealth",
  description: "The ultimate investment app for consistent 10% monthly returns. Secure, transparent, and easy to use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LoadingWrapper>
          <div className="bg-glow">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
          </div>
          {children}
        </LoadingWrapper>
      </body>
    </html>
  );
}
