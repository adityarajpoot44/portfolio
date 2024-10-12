import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedinIn, faTwitter,} from '@fortawesome/free-brands-svg-icons'
// import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';


function Home() {

    // const [icon,seticon]=useState(faVolumeHigh)
    // seticon()
    return (
        <>
        <div className="home_center absolute z-20 ">
            <h1 className=" text-[70px] font-bold mb-[34px] md:w-[560px] tracking-[5px]">Aditya Rajpoot</h1>
            <p className="text-center text-[30px] tracking-wide"> I'm a <span>Developer</span></p>
        </div>

        <div className="absolute z-20 bottom-3 right-2 m-3 flex flex-col-reverse gap-5 ">
                <a href="https://github.com/adityarajpoot44" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="mx-2 text-xl hover_social  hover:text-[#009e66] relative " /></a>
                <a href="https://www.linkedin.com/in/aditya-rajpoot44/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="mx-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                <a href="https://www.instagram.com/aditya_rajpoot_44/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="mx-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                <a href="https://twitter.com/adityar_44" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="mx-2 text-xl hover_social hover:text-[#009e66]" /></a>
                {/* <FontAwesomeIcon icon={icon} className="mx-2 text-xl hover_social hover:text-[#009e66]" /> */}
            </div>
        </>
    );
}
export default Home;