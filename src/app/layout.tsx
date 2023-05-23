import Header from "@/components/header"
import { ReactLenis } from "@studio-freight/react-lenis"
import { Inter } from "next/font/google"
import "../styles/global.scss"
import Smooth from "@/components/smooth"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* <PageTransition></PageTransition> */}
        <Smooth>{children}</Smooth>
      </body>
    </html>
  )
}
