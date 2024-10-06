import React from "react";
import ProgressBar from "../page_component/Progress_bar.js";
import ResumeSec from "../page_component/Resume_sec.js";


function Resume() {
    return (
        <div className="absolute z-20 bg-black w-screen h-screen">
            <div className="w-[90%] m-auto mt-[50px] py-[100px] ">
                <div className="text-center">
                    <h1 className="text-[46px] mb-[37px] font-bold">Resume</h1>
                </div>
                <div className=" flex flex-col gap-0 md:gap-[50px] md:flex-row">
                    <div className="w-full">
                        <h2 className="text-3xl pb-4">Education</h2>
                        <div className="pb-10">
                            <ResumeSec heading="Bachelor Degree" year={"2020 - 2024"} college={"Lovely Professional University"} para={"Computer Science and Engineering"}/>
                            <ResumeSec heading="Intermediate" year={"2019 - 2020"} college={"Hem Vidya Niketan School"} para={"Physic, Chemistry, Mathametics"}/>
                            <ResumeSec heading=" Matriculation" year={"2017 - 2018"} college={"Krishna International School"} para={"-"}/>
                        </div>
                    </div>
                    <div className="w-full">
                    <h2 className="text-3xl pb-4">Expeience</h2>
                        <div className="pb-10">
                            <ResumeSec heading="Frontend Developer" year={"Sep'24 - Present"} college={"Maisha Infotech Pvt Ltd"} para={"Crafted responsive websites using HTML5, CSS3, JavaScript, and React frameworks"}/>
                           </div>
                    </div>
                </div>

                <h1 className="text-4xl font-bold mb-[50px]">My Skills</h1>
                <div className="flex flex-col gap-3 md:flex-row md:gap-14">
                    <div className="w-full">
                        <div className="space-y-3">
                            <ProgressBar name="HTML/CSS" range="90%" />
                            <ProgressBar name="Web Design" range="90%" />
                            <ProgressBar name="MongoDB" range="50%" />
                            <ProgressBar name="Node.js" range="70%" />
                            <ProgressBar name="Git/Github" range="75%" />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="space-y-3">
                            <ProgressBar name="React" range="80%" />
                            <ProgressBar name="JavaScript" range="85%" />
                            <ProgressBar name="Express.js" range="50%" />
                            <ProgressBar name="C++" range="80%" />
                            <ProgressBar name="Tailwind Css" range="95%" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;