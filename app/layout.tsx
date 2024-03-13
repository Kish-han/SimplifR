import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SimplefyR",
  description: "One Stop Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div className="">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
