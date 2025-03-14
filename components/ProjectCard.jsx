import Image from "next/image";
import { Card, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Github, Link2 } from 'lucide-react';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <Card >
      <CardHeader className="p-0">
        <div className="relative w-full h-[250px] flex justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden group">

          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={450}
            height={450}
            alt=""
            priority
          />

          <div className="flex gap-x-4 mt-[150px]">
            <Link href={project.link} className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
              <Link2 className="text-white" />
            </Link>
            <Link href={project.github} className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>

      <div className="h-full px-8 py-6">
        <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
          {project.category}
        </Badge>
        <h4 className="text-3xl font-bold mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{`${project.description.slice(0,50)}...`}</p>
      </div>
    </Card>
  );
}

export default ProjectCard;