import React from 'react';
import videoBg from '../assest/video/myVideo.mp4';

function Myvideo() {

    return (
        <div className='video_main brightness-[40%] z-0'>
            <video src={videoBg} autoPlay muted={true} className='react_player' />
            
        </div>
    );
}

export default Myvideo;