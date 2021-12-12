import React,{useState,useRef} from 'react'
import LoopSample from '../loopSample/LoopSample'
import './LoopPad.css'

import LoopButtons from '../loopButtons/LoopButtons'


function LoopPad() {

    function importAll(r) {
        let files = {};
        r.keys().map((item, index) => { files[item.replace('./', '')] = r(item); });
        return files;
      }
      
    const images = importAll(require.context('../../assets/images', false, /\.(jpg)$/));
    const sounds = importAll(require.context('../../assets/audio' , false, /\.(mp3)$/))

    const [stack,setStack]=useState([])

    const [playSong, setPlaySong]=useState({
        1:false, 2:false, 3:false,
        4:false, 5:false, 6:false,
        7:false, 8:false, 9:false,
    })
    let pads={
        1:{sound:useRef(new Audio(sounds['SilentStar_120_Em_OrganSynth.mp3'].default))},
        2:{sound:useRef(new Audio(sounds['PAS3GROOVE1.03B.mp3'].default))},
        3:{sound:useRef(new Audio(sounds['MazePolitics_120_Perc.mp3'].default))},
        4:{sound:useRef(new Audio(sounds['GrooveB_120bpm_Tanggu.mp3'].default))},
        5:{sound:useRef(new Audio(sounds['FUD_120_StompySlosh.mp3'].default))},
        6:{sound:useRef(new Audio(sounds['electric guitar coutry slide 120bpm - B.mp3'].default))},
        7:{sound:useRef(new Audio(sounds['Bass Warwick heavy funk groove on E 120 BPM.mp3'].default))},
        8:{sound:useRef(new Audio(sounds['120_stutter_breakbeats_16.mp3'].default))},
        9:{sound:useRef(new Audio(sounds['future_funk_beats.mp3'].default))}
    }
    return (
        <div className='container'>
            <h1>Loop Station</h1>
            <LoopButtons playSong={playSong} setPlaySong={setPlaySong} stack={stack} setStack={setStack} pads={pads}/>
            <div className='allPads'> 
                {Object.keys(playSong).map((index)=>{
                    return <LoopSample key={index} number={index} playSong={playSong} stack={stack} setStack={setStack} setPlaySong={setPlaySong} pads={pads} />
                })} 
            </div>
        </div>
    )
}

export default LoopPad
