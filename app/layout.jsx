import {Outfit} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit ({subsets: ['latin']})


export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
        <Header/>
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
