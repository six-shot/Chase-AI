import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/globals/navbar";
import Footer from "@/components/globals/footer";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        {children}
    
      </body>
    </html>
  );
}
