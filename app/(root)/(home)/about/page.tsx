
import ExampleCard from "@/components/ExampleCard";
import ProjectCard from "@/components/PorjectCard";





export default function About() {

  return (
    <>
    <div className="md:pt-[100px]">
    <ProjectCard className={`bg-gradient-purple-dark pt-16 pl-16 pb-16  pr-16  lg:pr-8 text-white md:flex-row flex-col flex gap-[20px] items-center justify-center`} content="Hi, I'm Robert Melnyk, the founder and creator of Loris Media. I have been working as a freelance developer for 3 years. I started my career in tech because I wanted to make my dreams and others' dreams a reality. I love new ideas, dreaming up new concepts, and seeing them take form in the real world. It's not always rosy, but I even love the growing pains and deep learning that come along with a truly novel project. I hope you enjoy the current work shown here, and I look forward to the opportunity to work with you."  title='About The Creator'>
    <ExampleCard  imgUrl='/images/robYclau.jpg' className="bg-cover min-w-[300px] h-[350px] w-[300] lg:w-[400px] float-right lg:h-[450px] card-shadow bg-white rounded-lg" />
  </ProjectCard>
    </div>
    </>
  );
}