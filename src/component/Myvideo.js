import React from 'react';
import videoBg from '../assest/video/myVideo.mp4';
import {useState} from 'react'

function Myvideo() {
    const [vol,setvol]=useState(true)
    return (
        <div className='video_main brightness-[40%] z-0'>
            <video autoPlay muted={vol} className='react_player'>
            <source src={videoBg} type="video/mp4" />
            </video>
            
        </div>
    );
}

export default Myvideo;