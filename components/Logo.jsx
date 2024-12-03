import Link from "next/link";
// import Image from "next/image";

const Logo = () => {
  return (
    <div>
    
    <Link href='/'>
    {/* <Image size='100px' src='/zeeshanLogo.png' width={54} height={54} priority alt=""/> */}
    <h1 className="text-3xl font-medium m-3">Portfolio</h1>
    
    </Link>
    </div>
  )
}

export default Logo
