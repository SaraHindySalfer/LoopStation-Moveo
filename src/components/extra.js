import React, { useState,useRef} from 'react'
import './LoopSample.css'

function LoopSample(props) {
    let playSong=props.playSong
    let setPlaySong=props.setPlaySong
    let sound=props.sound
    let number=props.number
    let audio=useRef(new Audio(sound))
    audio.current.loop=true
    const [click,setClick]=useState(true)
    const [color,setColor]=useState('black')
    const onClick=()=>{
        setClick(!click)
        PlayOrPause()
        setColorSquare()
    }
    const setColorSquare=()=>{
        if(click===false){
            setColor('black')
        }else{
            setColor('red')
        }
    }
    const PlayOrPause=()=>{
        console.log(click,audio);
        if(click!==false){
            console.log(playSong);
            let state=playSong
            state[number]=true
            console.log(state);
            setPlaySong({state})
            audio.current.pause()
        }else{audio.current.play()}
    }
    return (
        <div className='square'onClick={onClick} style={{backgroundColor:color}}>
            <div className="pad front-card">
                {number}
            </div>
        </div>
        
    )
}

export default LoopSample
