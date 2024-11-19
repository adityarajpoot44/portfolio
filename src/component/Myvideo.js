import React from 'react';
import videoBg from '../assest/video/myVideo.mp4';

function Myvideo() {

    return (
        <div className='video_main brightness-[40%] z-0'>
            <video control autoPlay muted={false} className='react_player'>
            <source src={videoBg} type="video/mp4" />
            </video>
            
        </div>
    );
}

export default Myvideo;