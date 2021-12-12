// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import React,{useState,useRef, useEffect} from 'react'
import './LoopButtons.css'


function LoopButtons(props) {
    let playSong=props.playSong
    let stack=props.stack
    let setStack=props.setStack
    let pads=props.pads
    let newObj={}
    const [onClickPlay,setOnClickPay]=useState(false)
    const [second,setSecond]=useState(0)
    for(let i=1; i<10;i++){
        pads[i].sound.current.loop=true
    }

    const useInterval=(callback, delay)=> {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
        savedCallback.current = callback;
        }, [callback]);
        // Set up the interval.
        useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        }, [delay]);
    }
    useInterval(()=>{
        setSecond(second+1)
        addLoop(second)
    },1000)

    const onClickStart=()=>{
        setOnClickPay(true)
        // eslint-disable-next-line
        Object.keys(playSong).map((i)=>{
            if(playSong[i]===true){
                playSound(pads[i].sound)
            }

        })
    }
    const addLoop=(sec)=>{
        if(sec%8===0 && onClickPlay){
            stack.forEach((index)=>{
                playSound(pads[index].sound)
                })
            setStack([])
        }
    }
    const onClickStop=()=>{
        setOnClickPay(false)
        Object.keys(playSong).map((i)=>{
            if(playSong[i]===true){
                pads[i].sound.current.pause()
            }
        });
    }


    const playSound=(sound)=>{
        sound.current.play()
    }
    return (
        <div className='loop-buttons'>
            <button className='buttons start' onClick={onClickStart}>
                <div className='content'>
                    <FontAwesomeIcon icon={faPlay}/>
                </div>
            </button>
            <button className='buttons stop' onClick={onClickStop}>
            <FontAwesomeIcon icon={faPause}/>
            </button>
        </div>
    )
}

export default LoopButtons
