'use client'
import { RiYoutubeFill,RiLinkedinFill,RiGithubFill,RiFacebookFill, RiInstagramFill } from "react-icons/ri"
import Link from "next/link"

const icons = [
  {
    path: 'https://www.youtube.com/channel/UCyyN-92o0FFpDNDHwwMY2xg',
    name: <RiYoutubeFill/>,
  },
  {
    path: 'https://www.linkedin.com/in/zeeshan-haider-b12338288/',
    name: <RiLinkedinFill/>,
  },
  {
    path: 'https://github.com/Zeeshan-Haider-Soomro',
    name: <RiGithubFill/>,
  },
  {
    path: 'https://www.facebook.com/zeexhan.haider.73',
    name: <RiFacebookFill/>,
  },
  {
    path: 'https://www.instagram.com/zeeshanhaider.soomro/',
    name: <RiInstagramFill/>,
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon,index)=>{
        return <Link href={icon.path} key={index}>
        <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      })}
    </div>
  )
}

export default Socials