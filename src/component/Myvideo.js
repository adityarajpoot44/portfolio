import React, { useContext } from 'react';
import videoBg from '../assest/video/myVideo.mp4';
import { DataContext } from '../App';


function Myvideo() {
    const {sharedData} =useContext(DataContext);
    return (
        <div className='video_main brightness-[40%] z-0'>
            <video autoPlay muted={sharedData} className='react_player'>
            <source src={videoBg} type="video/mp4" />
            </video>
            
        </div>
    );
}

export default Myvideo;