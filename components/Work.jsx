'use client'
import Link from "next/link";
import { Button } from "./ui/button";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProjectCard from '/components/ProjectCard';

const projectData = [
  {
    image: '/assets/work/chawkbazarweb.png',
    category: 'react js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Website",
    link: 'https://figam-test-zhsk.netlify.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Website-Test-Smit-React.Js.git",
  },
  {
    image: '/assets/work/ZeeshanCollection.png',
    category: 'react js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Website",
    link: 'https://fake-api-store-zhs.vercel.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Fake-Api-Store-.git",
  },
  {
    image: '/assets/work/ReactPortfolio.png',
    category: 'react js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Portfolio",
    link: 'https://porfolio-figma-react-js.netlify.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Portfolio-Figma-From-React.git",
  },
  {
    image: '/assets/work/NextJsFigma.png',
    category: 'next js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Next JS Website",
    link: 'https://giaic-website-next-tailwind.vercel.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Next.Js-Figma-Giaic.git",
  },

  {
    image: '/assets/work/SmootieWeb.png',
    category: 'react js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Website",
    link: 'https://smoothie-figma-zhsk.netlify.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Smoothie-Figma-From-React.Js.git",
  },
  {
    image: '/assets/work/CardDetailPage.png',
    category: 'react js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Website",
    link: 'https://project01-zhsk.netlify.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Card-with-detail-page.git",
  },
  {
    image: '/assets/work/DeliveryWebsite.png',
    category: 'react js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Website",
    link: 'https://delivery-figma-react-js.netlify.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Delivery-Figma-From-React.js.git",
  },
  {
    image: '/assets/work/FoodDeliveryWeb.png',
    category: 'react js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Website",
    link: 'https://food-delivery-reatjs-zhsk.netlify.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Food-Delivery-Figma-Form-React.js.git",
  },
  {
    image: '/assets/work/GithubProfiler.png',
    category: 'react js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Api Fetch",
    link: 'https://zeeshan-haider-soomro.github.io/Search-Github-User-App---by-API-Fetch/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Search-Github-User-App---by-API-Fetch.git",
  },
  {
    image: '/assets/work/FireBase.png',
    category: 'react js',
    description: "SignUp, SignIn, Dashboard, Logout Fucnalities",
    name: "FireBase",
    link: 'https://zeeshan-haider-soomro.github.io/SignUp-LogIn-Dashboard-With-Firebase/index.html',
    github: "https://github.com/Zeeshan-Haider-Soomro/SignUp-LogIn-Dashboard-With-Firebase.git",
  },
  {
    image: '/assets/work/SaylaniForm.png',
    category: 'react js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Generate Id Card",
    link: 'https://zeeshan-haider-soomro.github.io/Saylani-Registration-Form-/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Saylani-Registration-Form-.git",
  },
  {
    image: '/assets/work/WeatherApi.png',
    category: 'react js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Weather Api ",
    link: 'https://zeeshan-haider-soomro.github.io/Weather-Application-/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Weather-Application-.git",
  },


];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi nobis quas nemo, eum nam!</p>
          <Link href='/projects'><Button>All Projects</Button></Link>
        </div>

        <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
          <Swiper className="h-[480px]" slidesPreview={1} breakpoints={{
            640:{
                slidesPerView:2
            }
          }}  spaceBetween={30} modules={[Pagination]} pagination={{clickable:true}}>
            
            {projectData.slice(0).map((project, index) => {
                return (
              <SwiperSlide key={index}>
                <ProjectCard  project={project} />
              </SwiperSlide>)
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work;