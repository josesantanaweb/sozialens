import "./globals.css";
import "@sozialens/ui/styles.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Sozialens",
  description: "Sozialens",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout:React.FC<RootLayoutProps> = ({ children }): JSX.Element => {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
};

export default RootLayout;

