import { GanttChartSquare, Blocks, Gem, GitGraphIcon, AppWindow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Frontend Development',
        description: `◾Responsive & user-friendly web applications\n ◾Expertise in React.js, Next.js, Tailwind CSS \n ◾Interactive UI/UX design`
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'MERN Stack Development (Learning & Building)',
        description: '◾MongoDB, Express.js, React.js, Node.js\n ◾Full-stack web applications \n ◾API integration & database management'
    },
    {
        icon: <AppWindow size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: '◾Modern, responsive, and User-friendly websites◾Custom web solutions using React.js & Next.js◾Clean, maintainable, and scalable code◾Pixel-perfect UI/UX design.'
    },
];

const Services = () => {
    return (
        <section className="mb-12 xl:mb-36 xl:mt-10">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto font-bold xl:pt-[112px]">My Services</h2>
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 p-5 xl:gap-5">
                    {servicesData.map((item, index) => (
                        <Card className="w-full max-w-[424px] h-[400px] flex flex-col pt-16 pb-10 justify-center items-center relative"  key={index}>
                            <CardHeader className='text-primary absolute -top-[60px]'>

                                <div className="w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center">

                                {item.icon}
                                </div>
                          
                            </CardHeader>
                          
                            <CardContent className='text-center'>
                            <CardTitle classNamem='mb-4'>{item.title}</CardTitle>

                                <CardDescription className='text-lg p-3'>{`${item.description.slice(0,150)}...`}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;