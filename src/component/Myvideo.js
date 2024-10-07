import React from 'react'
import ReactPlayer from 'react-player';
import videoBg from '../assest/video/myVideo.mp4';

function Myvideo() {
    return (
        <div className='video_main brightness-[40%] z-0'>
            <ReactPlayer
                url={videoBg}
                playing={true}
                muted={false}
                controls={false}
                loop={true}
                className="react_player"
                width="100%"
                height="100vh"
            />
            </div>
    );
}

export default Myvideo;