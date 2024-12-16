'use client'
// import { useState } from "react"
import React, {useState} from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard"

const projectData = [
  {
    image: '/assets/work/chawkbazarweb.png',
    category: 'React.Js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Website",
    link: 'https://figam-test-zhsk.netlify.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Website-Test-Smit-React.Js.git",
  },
  {
    image: '/assets/work/ProductStore.png',
    category: 'React.Js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Website",
    link: 'https://product-store-react-js.vercel.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Product-Store-React.Js.git",
  },
  {
    image: '/assets/work/Furniro.png',
    category: 'Next.Js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Website",
    link: 'https://giaic-2nd-quater-hackathon-from-next-js-iue8.vercel.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Giaic-2nd-Quater-Hackathon-From-Next-Js.git",
  },
  {
    image: '/assets/work/NextJsFigma.png',
    category: 'Next.Js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Next JS Website",
    link: 'https://giaic-website-next-tailwind.vercel.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Next.Js-Figma-Giaic.git",
  },
  {
    image: '/assets/work/DeliveryWebsite.png',
    category: 'React.Js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Website",
    link: 'https://delivery-figma-react-js.netlify.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Delivery-Figma-From-React.js.git",
  },
  {
    image: '/assets/work/WeatherApi.png',
    category: 'Javascript',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Weather Api ",
    link: 'https://zeeshan-haider-soomro.github.io/Weather-Application-/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Weather-Application-.git",
  },
  {
    image: '/assets/work/ZeeshanCollection.png',
    category: 'React.Js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Website",
    link: 'https://fake-api-store-zhs.vercel.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Fake-Api-Store-.git",
  },
  {
    image: '/assets/work/ReactPortfolio.png',
    category: 'React.Js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Portfolio",
    link: 'https://porfolio-figma-react-js.netlify.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Portfolio-Figma-From-React.git",
  },
  {
    image: '/assets/work/SmootieWeb.png',
    category: 'React.Js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Website",
    link: 'https://smoothie-figma-zhsk.netlify.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Smoothie-Figma-From-React.Js.git",
  },
  {
    image: '/assets/work/CardDetailPage.png',
    category: 'React.Js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Website",
    link: 'https://project01-zhsk.netlify.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Card-with-detail-page.git",
  },
  {
    image: '/assets/work/FoodDeliveryWeb.png',
    category: 'React.Js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "React Js Website",
    link: 'https://food-delivery-reatjs-zhsk.netlify.app/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Food-Delivery-Figma-Form-React.js.git",
  },
  {
    image: '/assets/work/GithubProfiler.png',
    category: 'React.Js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Api Fetch",
    link: 'https://zeeshan-haider-soomro.github.io/Search-Github-User-App---by-API-Fetch/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Search-Github-User-App---by-API-Fetch.git",
  },
  {
    image: '/assets/work/FireBase.png',
    category: 'Javascript',
    description: "SignUp, SignIn, Dashboard, Logout Fucnalities",
    name: "FireBase",
    link: 'https://zeeshan-haider-soomro.github.io/SignUp-LogIn-Dashboard-With-Firebase/index.html',
    github: "https://github.com/Zeeshan-Haider-Soomro/SignUp-LogIn-Dashboard-With-Firebase.git",
  },
  {
    image: '/assets/work/SaylaniForm.png',
    category: 'Javascript',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Generate Id Card",
    link: 'https://zeeshan-haider-soomro.github.io/Saylani-Registration-Form-/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Saylani-Registration-Form-.git",
  },
  {
    image: '/assets/work/StopWatch.png',
    category: 'Javascript',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Stop Watch",
    link: 'https://zeeshan-haider-soomro.github.io/Stop-Watch-By-JavaScript/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Stop-Watch-By-JavaScript.git",
  },
  {
    image: '/assets/work/Drag&Drop.png',
    category: 'Javascript',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Drag & Drop",
    link: 'https://zeeshan-haider-soomro.github.io/Drag-and-Drop-By-javascript-/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Drag-and-Drop-By-javascript-.git",
  },
  {
    image: '/assets/work/horizontalSlider.png',
    category: 'Javascript',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Horizontal Slider using mouse",
    link: 'https://zeeshan-haider-soomro.github.io/Horizontal-Slider-Using-Mouse-Scroller-By-JavaScript-/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Horizontal-Slider-Using-Mouse-Scroller-By-JavaScript-.git",
  },
  {
    image: '/assets/work/sliderBarModal.png',
    category: 'Javascript',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Side Bar & Modal",
    link: 'https://zeeshan-haider-soomro.github.io/Side-Bar-And-Modal-By-JavaScript/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Side-Bar-And-Modal-By-JavaScript.git",
  },
  {
    image: '/assets/work/tictactoegame.png',
    category: 'Javascript',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Tic Tac toe Game",
    link: 'https://zeeshan-haider-soomro.github.io/Tic-Tac-Toe-Game-By-JavaScript/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Tic-Tac-Toe-Game-By-JavaScript.git",
  },
  {
    image: '/assets/work/colorGenerator.png',
    category: 'Javascript',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Color Generator App",
    link: 'https://zeeshan-haider-soomro.github.io/Generate-Random-Color-App-By-JavaScript/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Generate-Random-Color-App-By-JavaScript.git",
  },
  {
    image: '/assets/work/randompassword.png',
    category: 'Javascript',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Random Password Generator App",
    link: 'https://zeeshan-haider-soomro.github.io/Random-Password-Generator-Using-JavaScript-/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Random-Password-Generator-Using-JavaScript-.git",
  },
  {
    image: '/assets/work/speechConverter.png',
    category: 'Javascript',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Text To Speech Converter",
    link: 'https://zeeshan-haider-soomro.github.io/Text-to-Speech-Converter-By-JavaScript-/',
    github: "https://github.com/Zeeshan-Haider-Soomro/Text-to-Speech-Converter-By-JavaScript-.git",
  },



];

const uniqueCategories = ["All Projects",...new Set(projectData.map((item)=>item.category))]
// console.log(uniqueCategories);



const page = () => {
  const [categories,setCategories] = useState(uniqueCategories)
  const [category,setCategory] = useState('All Projects')
  const filteredProjects = projectData.filter((project)=>{
    return category === 'All Projects'? project : project.category === category
  })
    
  
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category,index)=>{
              return <TabsTrigger onClick={()=> setCategory(category)} value={category} key={index} className='capitalize w-[162px] md:w-auto'>
                {category}
              </TabsTrigger>
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 xl:grid-cols-3 gap-4 p-5">
            {filteredProjects.map((project,index)=>{
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project}/>
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default page