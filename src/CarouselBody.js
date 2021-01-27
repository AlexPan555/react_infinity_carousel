import React, {useEffect} from 'react'
import arrowLeft from "./img/arrow-left-solid.svg";
import arrowRight from "./img/arrow-right-solid.svg";

function CarouselBody({handleLeftArrow, handleRightArrow,
                          parentState  }) {
useEffect(()=>{
    let interval
    if(parentState.infinity){
         interval = setInterval(()=>{
            handleRightArrow()
   }, 3000)}
    return ()=> clearInterval(interval)
}, [handleRightArrow, parentState.infinity])

    return(
        <div className='carousel_window'>
            <div className='arrow_left'
                 onClick={handleLeftArrow} >
                <img src={arrowLeft} alt='icon'/>
            </div>

            <div className='carousel_wrap' >
                {parentState.arr.map((item, index)=>{
                    return(
                        <div key={index} className='item' style={parentState.itemStyle[index]}>
                            <img src={item} alt='img' />
                        </div>
                    )
                })}
            </div>

            <div className='arrow_right'
                 onClick={handleRightArrow} >
                <img src={arrowRight} alt='icon'/>
            </div>
        </div>
    )
}
export default CarouselBody