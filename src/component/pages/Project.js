
import React from "react";

import blog from '../../img/project/Blog.png'
import edu from '../../img/project/Edu.png'
import gym from '../../img/project/Gym.png'
import imgi from '../../img/project/Img.png'
import job from '../../img/project/Job.png'
import todo from '../../img/project/Todo.png'
import travel from '../../img/project/Travel.png'



function Project() {

    return (
        <div className="absolute z-20 bg-black w-screen h-screen">
            <div className="w-[95%] m-auto mt-[50px] pt-[100px] h-screen ">
            <div className="text-center mb-[70px]">
                    <h1 className="text-[46px] mb-[37px] font-bold">Project</h1>
                </div>
                <div data-hs-carousel='{ 
                "loadingclassNamees": "opacity-0", 
                "isInfiniteLoop": "true",
                 "slidesQty": "1"
                 }' className="relative pre_height pb-10">
                    <div className="hs-carousel relative overflow-hidden w-full min-h-[90vh] bg-white rounded-lg">
                        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                            <div className="hs-carousel-slide">
                                <div className="h-max rounded">
                                  <img src={blog} alt=""/>
                                </div>
                            </div>
                           
                            <div className="hs-carousel-slide">
                                <div className="h-max rounded">
                                  <img src={todo} alt=""/>
                                </div>
                            </div>
                            <div className="hs-carousel-slide">
                                <div className="h-max rounded">
                                  <img src={imgi} alt=""/>
                                </div>
                            </div>
                            <div className="hs-carousel-slide">
                                <div className="h-max rounded">
                                  <img src={edu} alt=""/>
                                </div>
                            </div>
                            <div className="hs-carousel-slide">
                                <div className="h-max rounded">
                                  <img src={gym} alt=""/>
                                </div>
                            </div>
                            <div className="hs-carousel-slide">
                                <div className="h-max rounded">
                                  <img src={travel} alt=""/>
                                </div>
                            </div>
                            <div className="hs-carousel-slide">
                                <div className="h-max rounded">
                                  <img src={job} alt=""/>
                                </div>
                            </div>

                        </div>

                        <div className="hs-carousel-pagination absolute bottom-3 start-0 w-full overflow-x-auto">
                            <div className="flex flex-row items-center gap-x-2 px-2">
                                <div className="hs-carousel-pagination-item shrink-0 border rounded-md overflow-hidden cursor-pointer w-[150px] h-max hs-carousel-active:border-blue-400">
                                    <div className="h-max">
                                        <img src={blog} alt=""/>
                                    </div>
                                </div>
                                <div className="hs-carousel-pagination-item shrink-0 border rounded-md overflow-hidden cursor-pointer w-[150px] h-max hs-carousel-active:border-blue-400">
                                    <div className="h-max">
                                        <img src={todo} alt=""/>
                                    </div>
                                </div>
                                <div className="hs-carousel-pagination-item shrink-0 border rounded-md overflow-hidden cursor-pointer w-[150px] h-max hs-carousel-active:border-blue-400">
                                    <div className="h-max">
                                        <img src={imgi} alt=""/>
                                    </div>
                                </div>
                                <div className="hs-carousel-pagination-item shrink-0 border rounded-md overflow-hidden cursor-pointer w-[150px] h-max hs-carousel-active:border-blue-400">
                                    <div className="h-max">
                                        <img src={edu} alt=""/>
                                    </div>
                                </div>
                                <div className="hs-carousel-pagination-item shrink-0 border rounded-md overflow-hidden cursor-pointer w-[150px] h-max hs-carousel-active:border-blue-400">
                                    <div className="h-max">
                                        <img src={gym} alt=""/>
                                    </div>
                                </div>
                                <div className="hs-carousel-pagination-item shrink-0 border rounded-md overflow-hidden cursor-pointer w-[150px] h-max hs-carousel-active:border-blue-400">
                                    <div className="h-max">
                                        <img src={travel} alt=""/>
                                    </div>
                                </div>
                                <div className="hs-carousel-pagination-item shrink-0 border rounded-md overflow-hidden cursor-pointer w-[150px] h-max hs-carousel-active:border-blue-400">
                                    <div className="h-max">
                                        <img src={job} alt=""/>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-100 hover:bg-gray-100/40 focus:outline-none focus:bg-gray-100/40 rounded-s-lg">
                            <span className="text-2xl" aria-hidden="true">
                                <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m15 18-6-6 6-6"></path>
                                </svg>
                            </span>
                            <span className="sr-only">Previous</span>
                        </button>
                        <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-100 hover:bg-gray-100/40 focus:outline-none focus:bg-gray-100/40 rounded-e-lg">
                            <span className="sr-only">Next</span>
                            <span className="text-2xl" aria-hidden="true">
                                <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;