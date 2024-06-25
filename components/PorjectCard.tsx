import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React, { ReactNode } from "react";
interface ProjectCardProps {
    className?: string,
    linkUrl?: string,
    title?: string,
    content?: string,
    handleClick?: ()=> void
    children?: ReactNode
}
const ProjectCard = ({className, linkUrl, title, content, handleClick, children}: ProjectCardProps) => {
  return (
    <Card className={cn('border-none rounded-none ',className)} onClick={handleClick}> <div className="lg:w-5/12"> <CardHeader> {title && <CardTitle className="text-[3rem] -mb-2 leading-10">{title}</CardTitle>}
    {linkUrl && <a className="lg:text-[1.25rem] underline" target="_blank" href={`https://${linkUrl}` as string}>{linkUrl}</a>}
  </CardHeader>
  <CardContent>
    <p className="lg:text-[1.2rem]">{content}</p>
  </CardContent>
  </div>
  {children}
</Card>
);
};

export default ProjectCard;
