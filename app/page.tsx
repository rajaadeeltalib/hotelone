import Link from "next/link"
// components
import Header from "./components/Header"
import Footer from "./components/Footer"
// pages
import Home from "./pages/Home"
import RoomDetails from "./pages/RoomDetails"


export default function App() {
  return (
    <div>
      <Header />
      <Link href="/"><Home /></Link>
      <Footer />
    </div>
  )
}
