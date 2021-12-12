import React, { useState} from 'react'
import { useEffect } from 'react/cjs/react.development'
import './LoopSample.css'
function LoopSample(props) {
    let stack=props.stack
    //let img=props.image
    let setStack=props.setStack
    let playSong=props.playSong
    let setPlaySong=props.setPlaySong
    let number=props.number
    // let classNames=props.classNames
    // let setClassNames=props.setClassNames
    let pads=props.pads
    const [click,setClick]=useState(true)
    const [color,setColor]=useState('rgb(23, 15, 29)')
    const [classNames,setClassNames]=useState('square')

    const onClick=()=>{
        setClick(!click)
        PlayOrPause()
        setColorSquare()
    }
    const setColorSquare=()=>{
        if(click===false){
            setColor('rgb(23, 15, 29)')
        }else{
            setColor('rgb(219, 168, 180)')
        }
    }
    let name=pads[number].sound.current.attributes['1'].value.slice(14,-4).replace(/[^a-zA-Z0-9]/g," ")
    const PlayOrPause=()=>{
        if(click===true){
            let state=playSong
            state[number]=true
            setPlaySong(state)
            setStack([...stack,number])
        }else{
            // setClassNames('square')
            let state=playSong
            state[number]=false
            setPlaySong(state)
            pads[number].sound.current.pause()
        }
    }
    useEffect(()=>{
        if(playSong[number]===true){
            setClassNames('a-pulse square')
        }else{
            setClassNames('square')
        }
    },Object.values(playSong))
    return (
        <div className={classNames} onClick={onClick} style={{backgroundColor:color}} data-animation='alternate'>
            <div className="pad front-card">
                <h5>{name}</h5>
            </div>
        </div>
        
    )
}

export default LoopSample
