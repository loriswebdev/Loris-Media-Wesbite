import ExampleCard from "@/components/ExampleCard";
import ProjectCard from "@/components/PorjectCard";
import { examples } from "@/constants";







export default function Portfolio() {
let cards: any[] =examples.map((item, index)=>(
  <ProjectCard key={item.title} className={`${item.background} pt-16 pl-16 pb-16  pr-16  lg:pr-8 text-white flex flex-col lg:flex-row justify-center lg:justify-between`}content={item.content} linkUrl={item.linkUrl} title={item.title}>
    <ExampleCard key={item.imgUrl} imgUrl={item.imgUrl} className="bg-cover min-w-[300px] w-full h-[50vw] lg:w-[55%] card-shadow lg:h-[30vw] bg-white rounded-lg" />
  </ProjectCard>
));

cards.push(cards[0])
cards.shift()
  return (
    <> 
   <div className="md:pt-[100px]">
{cards}
   </div>
    </>
  );
}