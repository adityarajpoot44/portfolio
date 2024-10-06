import React from "react";


function Resume() {
    return (
        <div className="absolute z-20 bg-black w-screen h-screen">
            <div className="w-[80%] m-auto mt-[50px] pt-[100px]">
                <div className="text-center">
                    <h1 className="text-[46px] mb-[37px] font-bold">Resume</h1>
                </div>
                <div className="flex gap-14">
                    <div className="w-full">
                        <div className="space-y-3">
                            <div>
                                <div className="inline-block mb-2 ms-[calc(25%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg">25%</div>
                                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "100%" }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="inline-block mb-2 ms-[calc(50%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg">50%</div>
                                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "100%" }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="inline-block mb-2 ms-[calc(75%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg">75%</div>
                                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "100%" }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="inline-block mb-2 ms-[calc(100%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg">100%</div>
                                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "100%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="space-y-3">
                            <div>
                                <div className="inline-block mb-2 ms-[calc(25%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg">25%</div>
                                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "100%" }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="inline-block mb-2 ms-[calc(50%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg">50%</div>
                                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "100%" }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="inline-block mb-2 ms-[calc(75%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg">75%</div>
                                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "100%" }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="inline-block mb-2 ms-[calc(100%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg">100%</div>
                                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: "100%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;