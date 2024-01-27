import { useState } from "react"
import {sculptureList} from './data.js'
import './gallery.css'
export default function GalleryTrial(){
    const [index, setIndex] = useState(0)
    const [isShow, setIsShow] = useState(false)
    const hasNext = index < sculptureList.length - 1;
    const hasPrev = index > 0;

    function handleNextClick() {
        if(hasNext){
            setIndex(index + 1)
        }else{
            setIndex(11)
        }
    }
    function handlePrevClick(){
        if(hasPrev){
            setIndex(index - 1)
        }else{
            setIndex(0)
        }
    }
    function handleIsShow() {
        setIsShow(!isShow)
    }
    let sculpture = sculptureList[index]
    return (
        <div className="container">
            <div>
                <h3>{index+1} out of {sculptureList.length}</h3>
                <button onClick={handlePrevClick}>Previous</button>
                <button onClick={handleNextClick}>Next</button>

            </div>
            <h1>{sculpture.name}</h1>
            <img className='imgContainer' src={sculpture.url} alt={sculpture.alt} />
            <div>
                <button onClick={handleIsShow}>{!isShow ? 'Show'  : 'Hide'} Details</button>
                {isShow && <p>Artist: {sculpture.artist}</p>}
                {isShow && <p>Description: {sculpture.description}</p>}
            </div>
        </div>
    )
}