import Image from "next/image"
import LogoWhite from "../../public/logo-white.svg"
import Link from "next/link"



const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-white flex justify-between">
    {/* logo */}
    <Link href="/"><Image src={LogoWhite} alt="Logo White" /></Link>
    
      Copyright &copy; 2023. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer