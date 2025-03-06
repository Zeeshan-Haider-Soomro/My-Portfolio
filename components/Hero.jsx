"use client";
import Image from "next/image";

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiArrowDownSFill,
} from "react-icons/ri";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import Typewriter from 'typewriter-effect';



const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-xl uppercase font-semibold mb-4 text-primary tracking-[4px] ">
            <Typewriter
  options={{
    strings: ['I Am Developer', 'I Am Web Developer', 'I Am Web Designer', 'I Am Grapic Designer', 'I Am App Developer' ],
    autoStart: true,
    loop: true,
  }}
/>
            </div>
            <h1 className="text-5xl font-bold mb-4 xl:leading-[60px] tracking-[-2px]">Hello, I'm  Zeeshan Haider</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational
              journey,and what I engage in professionally.
            </p>

            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              {/* <Link href="/ZeeshanResume.png" download='/ZeeshanResume.png'> */}
              <Button variant="secondary" className="gap-x-2">
                <a href="/ZeeshanHaiderResume.pdf" download='/ZeeshanHaiderResume.pdf'>Download CV</a>
                 <Download size={18} />
              </Button>
              {/* </Link> */}
            </div>

          {/* socials */}
          <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[32px] hover:text-primary transition-all "
            />
          </div>

          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={8}
              badgeText="Months of Experience in Learning"
            />
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={50}
              endCountText=""
              badgeText="Mini Finished Projects"
            />
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={2}
              endCountText="k"
              badgeText="LinkedIn Followers"
            />
            {/* bg-hero_shape2_light  dark:bg-hero_shape2_dark */}
            <div className="w-[500px] h-[500px] bg-no-repeat absolute -top-8 -right-4"></div>
            <DevImg
              containerStyles="right-[50px] w-[400px] h-[400px] bg-no-repeat relative bg-bottom"
              imgSrc={"/Zeeshan_Zhsk.png"}
              
            />
          </div>
        </div>

        <div className="md:flex absolute left-1/2 bottom-0 xl:bottom-12 hidden">
          <RiArrowDownSFill className="text-3xl text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
