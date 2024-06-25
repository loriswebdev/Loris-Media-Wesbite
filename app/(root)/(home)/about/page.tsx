
import ExampleCard from "@/components/ExampleCard";
import ProjectCard from "@/components/PorjectCard";
import { homeData } from "@/constants";





export default function About() {

  return (
    <>
    <div className="md:pt-[100px]">
    <ProjectCard className={`bg-gradient-purple-dark pt-16 pl-16 pb-16  pr-16  lg:pr-8 text-white md:flex-row flex-col flex gap-[20px] items-center justify-center`} content="Hi I'm Robert Melnyk. Founder and creator of Loris Media. I've been working as a freelance developer for 3 years. I started my career in tech because I wanted to make mine and other's dreams a reality. I love new ideas, I love to dream up new concepts and see them take form in the real world. It's not always rosey, but I even love the growing pains and deep learning that comes along with a truley novel project. I hope you enjoy the current work shown here, and I look forward to the opportunity to work with you."  title='About The Creator'>
    <ExampleCard  imgUrl='/images/robYclau.jpg' className="bg-cover min-w-[300px] h-[350px] w-[300] lg:w-[400px] float-right lg:h-[450px] card-shadow bg-white rounded-lg" />
  </ProjectCard>
    </div>
    </>
  );
}