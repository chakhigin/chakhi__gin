import TextAnimation from "../common/TextAnimation";
import Heading from "../common/heading";
import SkillsItems from "./SkillsItems";

function Skills() {
    return (
        <>
            <div className="skills" id="skills">
                <div className="relative py-[120px] max-w-[45%] m-auto max-sm:py-0 max-sm:max-w-[80%]">
                    <div className="flex items-center justify-center flex-row gap-20 max-sm:flex-col max-sm:gap-8 max-sm:justify-start max-sm:items-start">
                        <div className="min-w-[20%]">
                            <Heading title="My" />
                            <Heading title="Skills" />
                        </div>
                        <div className="min-w-[80%]">
                            <div className="skills-experience">
                                <Heading title="4 Years Expreince"/>
                            </div>
                            <SkillsItems />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;