import React, { useRef, useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import './Intro.css';
import { meal } from '../../constants';
const Intro = () =>{
  const [play,setplay]=useState(false)
  const vidref=useRef()
  const handleVideo=()=>{
    setplay((prevplay)=> !prevplay )
    if(play){
      vidref.current.pause();
    }else{
      vidref.current.play();
    }
  }
  return (
    <div className='app__video'>
    <video src={meal} ref={vidref} type="video/mp4" loop controls={false} muted  />
    <div className="app__video-overlay flex__center">
      <div onClick={handleVideo} className="app__video-overlay_circle flex__center">
        {play ? <BsPauseFill color='#fff' fontSize={30}/>
        :<BsFillPlayFill color='#fff' fontSize={30} />}
      </div>
    </div>
    </div>
  )
};

export default Intro;
