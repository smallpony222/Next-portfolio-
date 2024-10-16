import { TECH_STACK,technologies } from '../../../constants/constants';
import SkillsCard from './SkillsCard';
const Skills = () => {
  console.log(Object.keys(technologies).map(i => technologies[i]));
  return (
    <>
    <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Skills</div>
    <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >

          {/* {TECH_STACK.map((item, index) => (
            <Badge key={index} title={item} />
          ))} */}
          {
            Object.keys(technologies).map(i =>
              < SkillsCard key = {i} title = {i} data = { technologies[i] }/> 
            )
          }
        
        </div>
        </>
  );
};

export default Skills;
