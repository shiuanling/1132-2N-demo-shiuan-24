import { skills } from '../data';
import SectionTitle_xx from './SectionTitle_xx';
import SkillsCard_xx from "./SkillsCard_xx";

const Skills_xx = () => {
  return (
    <section className='py-20 align-element' id='skills'>
      <SectionTitle_xx text='my skills'/>
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {skills.map((skill) => {
          return <SkillsCard_xx key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills_xx;
