import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, Section, SlackIcon, } from "lucide-react"

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: "Zeeshan Haider"
    },
    {
        icon: <PhoneCall size={20}/>,
        text: "+92-202727926"
    },
    {
        icon: <Calendar size={20}/>,
        text: "Born on 17 June, 2003"
    },
    {
        icon: <GraduationCap size={20}/>,
        text: "UnderGraduation on Software Engineer"
    },
    {
        icon: <HomeIcon size={20}/>,
        text: "Block#18, Gulistan e Jouhar, Karachi, Sindh, Pakistan "
    },
    {
        icon: <MailIcon size={20}/>,
        text: "zh7774440@gmail.com"
    },
]

const qualificationData = [
    {
        title: "education",
        data:[
            {
                university: "Virtual University",
                qualification: "UnderGraduate of Software Engineer",
                year: "2024-2028"
            },
            {
                university: "D.J Sindh Govt.Science College",
                qualification: "Pre-Engineering",
                year: "2020-2022"
            },
            {
                university: "The Smart School",
                qualification: "Computer Science",
                year: "2018-2020"
            },
        ]
    },
    {
        title: "courses",
        data:[
            {
                company: "SMIT",
                role: "Web And Mobile Development",
                year: "2024-2025"
            },
            {
                company: "PITP (NEDUET)",
                role: "Graphic Designing",
                year: "oct to nov -2024"
            },
            {
                company: "Bano Qabil",
                role: "Digital Marketing",
                year: "2024-2024- decmber to february "
            },
        ]
    }
]

const skillData = [
    {
        title: "skills",
        data:[
            {
                name: "HTML, CSS",
            },
            {
                name: "JavaScript",
            },
            {
                name: "React.js",
            },
            {
                name: "Next.js",
            },
            {
                name: "Front-end Development",
            },
            {
                name: "Adobe Illustrator",
            },
            {
                name: "Adobe PhotoShop",
            },
            {
                name: "Graphic Designer",
            },
        ],
    },
    {
        title: "tools",
        data:[
            {
                imgPath: "/assets/about/vscode.svg",
            },
            {
                imgPath: "/assets/about/figma.svg",
            },
            {
                imgPath: "/assets/about/notion.svg",
            },
            {
                imgPath: "/assets/about/illustratorIcon.avif",
            },
            {
                imgPath: "/assets/about/photoShopIcon.png",
            },
        ],
    },
]

const About = () => {

    const getData = (arr, title) =>{
        return (
            arr.find((item)=> item.title === title)
        )
    }
    
  return (
 <section className="xl:h-[860px] pb-12 xl:py-24 ">
  <div className="container mx-auto">
    <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
    <div className='flex flex-col xl:flex-row'>
        {/* images */}
        <div className='hidden xl:flex flex-1 relative'>
            <DevImg containerStyles='bg-about_Shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/ZeeshanHaider.jpg'/>
        </div>
        {/* tabs */}
        <div className='flex-1'>
            <Tabs defaulValue='personal'>
                <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                    <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                    <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualification</TabsTrigger>
                    <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                </TabsList>
                {/* tabs content */}
                <div className='text-lg mt-12 xl:mt-8'>
                    {/* personal */}
                    <TabsContent value='personal'>
                        <div className='text-center xl:text-left'>
                            <h3 className='h3 mb-4'>Get to Know Me</h3>
                            <p className='subtitle max-w-xl mx-auto xl:mx-0'>I specialize in crafting intuitive websites with cutting-edge technology, delivery dyanamic and engaging user experiences.   </p>
                            {/* icons */}
                            <div className='grid xl:grid-cols-2 gap-2 mb-12'>
                                {infoData.map((item,index)=>{
                                    return <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                        <div className='text-primary'>{item.icon}</div>
                                        <div>{item.text}</div>
                                    </div>
                                })}
                            </div>
                            {/* langauge */}
                           <div className='flex flex-col gap-y-2'>
                           <div className='text-primary'>Language Skills</div>
                            <div className="border-b border-border"></div>
                            <div>English, Urdu, Sindhi</div>
                           </div>
                        </div>
                    </TabsContent>
                    {/* qualification */}
                    <TabsContent value='qualifications'>
                        <div>
                            <h3 className='h3 mb-8 text-center xl:text-left'>My Awesome Journey </h3>
                            {/* experience and eduction wrapper */}
                            <div className='grid md:grid-cols-2 gap-y-8'>
                                {/* experience  */}
                                <div className='flex flex-col gap-y-6'>
                                    <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                        <SlackIcon/>
                                        <h4 className='capitalize font-medium'>
                                            {getData(qualificationData,'courses').title}
                                        </h4>
                                    </div>
                                    {/* list */}
                                    <div className='flex flex-col gap-y-8'>
                                        {getData(qualificationData, 'courses').data.map((item,index)=>{
                                            const {company,role,year} = item
                                            return(
                                                <div className='flex gap-x-8 group' key={index}>
                                                    <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                    </div>
                                                    <div>
                                                        <div className='font-semibold text-xl leading-none mb-2'>
                                                            {company}
                                                        </div>
                                                        <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                            {role}
                                                        </div>
                                                        <div className='text-base font-medium'>
                                                            {year}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                {/* education  */}
                                <div className='flex flex-col gap-y-6'>
                                    <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                        <GraduationCap size={28}/>
                                        <h4 className='capitalize font-medium'>
                                            {getData(qualificationData,'education').title}
                                        </h4>
                                    </div>
                                    {/* list */}
                                    <div className='flex flex-col gap-y-8'>
                                        {getData(qualificationData, 'education').data.map((item,index)=>{
                                            const {university,qualification,year} = item
                                            return(
                                                <div className='flex gap-x-8 group' key={index}>
                                                    <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                    </div>
                                                    <div>
                                                        <div className='font-semibold text-xl leading-none mb-2'>
                                                            {university}
                                                        </div>
                                                        <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                            {qualification}
                                                        </div>
                                                        <div className='text-base font-medium'>
                                                            {year}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value='skills'>
                        <div className='text-center xl:text-left'>
                            <h3 className='h3 mb-8'>What I Use EveryDay</h3>
                            {/* skills */}
                            <div className='mb-16'>
                                <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                <div className='border-b border-border mb-4'></div>
                                {/* skill list  */}
                                <div>
                                    {getData(skillData, 'skills').data.map((item,index)=>{
                                        const {name} = item
                                        return <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                                            <div className='font-medium'>{name}</div>
                                        </div>
                                    })}
                                </div>
                            </div>
                            {/* tools */}
                            <div>
                            <div className='mb-16'>
                                <h4 className='text-xl font-semibold mb-2 xl:text-left'>Skills</h4>
                                <div className='border-b border-border mb-4'></div>
                                {/* tool list  */}
                                <div className='flex gap-x-8 justify-center xl:justify-start'>
                                    {getData(skillData, 'tools').data.map((item,index)=>{
                                        const {imgPath} = item
                                        return <div key={index}>
                                            <Image src={imgPath} width={48} height={48} alt='' priority/>
                                        </div>
                                    })}
                                </div>
                            </div>
                            </div>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </div>
  </div>
 </section>
  )
}

export default About;