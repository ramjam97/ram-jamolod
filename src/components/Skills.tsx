import { useContext } from "react";
import { AppContext } from "@/App";
import SkillSet from "@/components/SkillSet";
import Card from "@/components/Card";

const Skills = () => {

    const { data } = useContext(AppContext);
    const skills = data.technical_skills || [];

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