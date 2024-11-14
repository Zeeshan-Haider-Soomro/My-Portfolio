import { GanttChartSquare, Blocks, Gem, GitGraphIcon, AppWindow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: 'Passionate about building websites with a focus on intuitive design, usability, and responsive layouts. Designing clean, modern websites that combine aesthetics with functionality to engage visitors.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 'Passionate about creating responsive and user-friendly websites that are both functional and visually appealing. Building websites with a focus on usability, performance, and a seamless user experience.'
    },
    {
        icon: <AppWindow size={72} strokeWidth={0.8} />,
        title: 'App Development',
        description: 'Providing reliable and creative app development services as I grow my skills and expertise in the field. Building simple, functional apps that focus on usability and seamless performance.'
    },
    {
        icon: <GitGraphIcon size={72} strokeWidth={0.8} />,
        title: 'Graphic Design ',
        description: 'Providing fresh, modern designs for logos, social media, and branding to support your vision. Offering creative and affordable design solutions tailored to help your brand stand out. Excited to work with you and bring your ideas to life as I build my skills and experience in graphic design.'
    },
];

const Services = () => {
    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto font-bold xl:pt-[112px]">My Services</h2>
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 p-5">
                    {servicesData.map((item, index) => (
                        <Card className="w-full max-w-[424px] h-[400px] flex flex-col pt-16 pb-10 justify-center items-center relative"  key={index}>
                            <CardHeader className='text-primary absolute -top-[60px]'>

                                <div className="w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center">

                                {item.icon}
                                </div>
                          
                            </CardHeader>
                          
                            <CardContent className='text-center'>
                            <CardTitle classNamem='mb-4'>{item.title}</CardTitle>

                                <CardDescription className='text-lg p-3'>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;