
import React from "react";
import ProjectCard from "../page_component/Project_card";
import react from "../../img/tech/react.png"
import html from "../../img/tech/html.png"
import css from "../../img/tech/css.png"
import tailwind from "../../img/tech/tailwind.png"
import javascript from "../../img/tech/javascript.png"
import firebase from "../../img/tech/firebase.png"
import node from "../../img/tech/node.png"
// import MongoDB from "../../img/tech/mongo.png"
// import express from "../../img/tech/express.png"
import redux from "../../img/tech/redux.png"
import bootstrap from "../../img/tech/bootstrap.png"

import blog from '../../img/project/Blog.png'
import edu from '../../img/project/Edu.png'
// import gym from '../../img/project/Gym.png'
import imgi from '../../img/project/Img.png'
// import job from '../../img/project/Job.png'
import todo from '../../img/project/Todo.png'
// import travel from '../../img/project/Travel.png'



function Project() {
    const text1="I've created an intuitive user interface for managing post information, allowing users to easily view, add, remove, and update content. I've developed responsive web interfaces using React to ensure optimal user experiences on all devices. Additionally, I've implemented a robust data storage solution using Firebase to efficiently manage user and article information."
    const text2="The todo app features intuitive task management capabilities, allowing users to create, edit, and delete tasks effortlessly. Prioritize and categorize tasks for effective organization, and track their completion status to stay on top of your workload. The app seamlessly integrates with local browser storage, ensuring your tasks are accessible even offline, providing uninterrupted productivity."
    const text3="I've successfully created an image slider component in React, utilizing the useState hook to manage the current slide index and implementing navigation controls to navigate between slides. The slider features smooth transitions and customizable styling, making it a versatile component for showcasing images or content in various projects."
    return (
        <div className="absolute z-20 bg-black w-screen h-screen">
            <div className="w-[95%] m-auto mt-[50px] pt-[100px] h-screen ">
                <div className="text-center mb-[70px]">
                    <h1 className="text-[46px] mb-[37px] font-bold">Project</h1>

                    <ProjectCard para={text1} logo1={react} logo2={redux} logo3={node} logo4={tailwind} logo5={firebase} img={blog} heading={"Blog Website"} website={"https://reactblogapp44.netlify.app"} github={"https://github.com/adityarajpoot44/blogSite_react"} rev={"flex-row-reverse"}/>
                    <ProjectCard  img={todo}  heading={"Todo App"} para={text2} logo1={html} logo2={javascript} logo3={react} logo4={redux} logo5={tailwind} website={"https://localreactstoragetodo.netlify.app"} github={"https://github.com/adityarajpoot44/todoReact"} rev={"flex-row"}/>
                    <ProjectCard  img={imgi} heading={"Image Slider"} para={text3} logo1={html} logo2={css} logo3={javascript} logo4={react} logo5={tailwind} website={"https://imageslider44.netlify.app"} github={"https://github.com/adityarajpoot44/ImageSlider"} rev={"flex-row-reverse"}/>
                    <ProjectCard  img={edu} heading={"Education website"} para={text3} logo1={html} logo2={css} logo3={javascript} logo4={bootstrap} logo5={tailwind} website={"https://eduford44.netlify.app"} github={"https://github.com/adityarajpoot44/Eduford_website"} rev={"flex-row"}/>
                </div>

            </div>
        </div>
    );
};

export default Project;