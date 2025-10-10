import SkillSet from "./SkillSet";
import Card from "./Card";
import type { SkillItem } from "../details/types";

interface SkillsProps {
    skills: SkillItem[]
}

const Skills = ({ skills }: SkillsProps) => {

    return <>
        {skills.length > 0 &&
            <Card title='👨‍💻 Skills'>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-3">
                    {skills.map((skill, index) => <SkillSet key={index} title={skill.title} skills={skill.skills} />)}
                </div>
            </Card>
        }
    </>
}

export default Skills