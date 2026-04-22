import SkillItem from "../components/SkillItem";
import skills from "../data/skills";

export default function Skills() {
  return (
    <div className="skills w-full min-h-screen px-[3vw] mt-10 py-12 text-[#2D3142]" id="skills-page">
      <h1 className="md:text-[3.7vw] text-4xl font-bold tracking-tight leading-none">Skills</h1>
      <div className="skill-box mt-12">
        {skills.map((skill) => (
          <SkillItem key={skill.title} {...skill} />
        ))}
      </div>
    </div>
  );
}
