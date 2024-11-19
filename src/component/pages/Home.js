import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedinIn, faXTwitter} from '@fortawesome/free-brands-svg-icons'
import { Typewriter } from 'react-simple-typewriter'
import { faVolumeHigh,faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function Home() {

    const [icon,seticon]=useState(faVolumeHigh)
    
    function mutebtn(){
        if(icon===faVolumeHigh){
            seticon(faVolumeXmark);
        }else{
            seticon(faVolumeHigh);
        }
    }

    return (
        <>
            <div className="home_center absolute z-20 ">
                <h1 className=" text-[70px] font-bold mb-[34px] md:w-[560px] tracking-[5px]">Aditya Rajpoot</h1>
                <p className="text-center text-[25px] md:text-[30px] tracking-wide"> I'm a <span className=' text-[#099e66]'> <Typewriter
                    words={['Developer', 'Freelancer', 'Designer', 'Engineer']}
                    loop={false}
                    cursor
                    cursorStyle='|'
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={1000}
                /></span></p>
                <p className="text-center pt-10 text-[25px] md:text-[30px]  text-[#099e66] tracking-wide"> <Typewriter
                    words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                    loop={false}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={1000}
                /></p>
            </div>

            <div className="absolute z-20 bottom-3 right-0 m-3 flex flex-col gap-5 ">
                <FontAwesomeIcon onClick={mutebtn} icon={icon} className="mx-2 text-xl hover_social hover:text-[#009e66] relative " />
                <a href="https://github.com/adityarajpoot44" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="mx-2 text-xl hover_social  hover:text-[#009e66] relative " /></a>
                <a href="https://www.linkedin.com/in/aditya-rajpoot44/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="mx-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                <a href="https://www.instagram.com/aditya_rajpoot_44/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="mx-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                <a href="https://twitter.com/adityar_44" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} className="mx-2 text-xl hover_social hover:text-[#009e66]" /></a>
            </div>
        </>
    );
}
export default Home;