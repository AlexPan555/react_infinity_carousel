import React, {useState, useEffect} from 'react'
import CarouselBody from './CarouselBody'
import image1 from './img/1.png'
import image2 from './img/2.png'
import image3 from './img/3.png'
import image4 from './img/4.png'
import image5 from './img/5.png'
import image6 from './img/6.png'
import image7 from './img/7.png'
import image8 from './img/8.png'

const MyCarousel = () => {
    const [state, setState] = useState({
        count: 0,
        infinity: true,
        images: [
             image1, image2, image3, image4,
            image5, image6, image7, image8
        ],
        arr: [],
        arrIndex: 0,
        itemStyle: [{left: '-100%'}, {left: 0}, {left: '100%'}],
    })

    const handleLeftArrow = () => {
        let newCount = state.count
        const newArr = state.arr
        let newArrIndex = state.arrIndex
        let newitemStyle = []

//change count
        if (state.count < 1) {
            newCount = state.images.length - 1
        } else { newCount-- }

//change state.arr
        const count = state.count === 1 ? state.images.length - 1 : newCount - 1
        if (newArrIndex === 0) {
            newArr[state.arrIndex + 2] = state.images[count]
        } else {
            newArr[state.arrIndex - 1] = state.images[count]
        }
//change state.arrIndex
        if (state.arrIndex === 0) {
            newArrIndex = 2
        } else {
            newArrIndex--
        }
//change style
        if (state.arrIndex === 0) {
            newitemStyle = [{left: 0, opacity: 1}, {left: '100%', opacity: 1}, {left: '-100%', opacity: 0}]
        } else if (state.arrIndex === 1) {
            newitemStyle = [{left: '-100%', opacity: 0}, {left: 0, opacity: 1}, {left: '100%', opacity: 1}]
        } else if (state.arrIndex === 2) {
            newitemStyle = [{left: '100%', opacity: 1}, {left: '-100%', opacity: 0}, {left: 0, opacity: 1}]
        }

        setState({
            ...state, count: newCount, arrIndex: newArrIndex,
            arr: newArr, itemStyle: newitemStyle
        })
    }
    const handleRightArrow = () => {
        let newCount = state.count
        const newArr = state.arr
        let newArrIndex = state.arrIndex
        let newitemStyle = []
//change count
        if (state.count < state.images.length - 1) {
            newCount++
        } else { newCount = 0 }
//change state.arr
        if (state.count < state.images.length - 2) {
            newArr[state.arrIndex] = state.images[state.count + 2]
        } else if (state.count === 7) {
            newArr[state.arrIndex] = state.images[1]
        } else {
            newArr[state.arrIndex] = state.images[0]
        }
//change state.arrIndex
        if (state.arrIndex < 2) {
            newArrIndex++
        } else {
            newArrIndex = 0
        }
//change style
        if (state.arrIndex === 0) {
            newitemStyle = [{left: '100%', opacity: 0}, {left: '-100%', opacity: 1}, {left: 0, opacity: 1}]
        } else if (state.arrIndex === 1) {
            newitemStyle = [{left: 0, opacity: 1}, {left: '100%', opacity: 0}, {left: '-100%', opacity: 1}]
        } else if (state.arrIndex === 2) {
            newitemStyle = [{left: '-100%', opacity: 1}, {left: 0, opacity: 1}, {left: '100%', opacity: 0}]
        }

        setState({
            ...state, count: newCount,
            itemStyle: newitemStyle,
            arrIndex: newArrIndex,
            arr: newArr
        })
    }

    useEffect(() => {
        const newArr = [state.images[state.images.length - 1], state.images[0], state.images[1]]
        setState(state => ({...state, arr: newArr}))
    }, [state.images])
const handleStopInfinity =()=>{
        setState({...state, infinity: false})
}
const handleStartInfinity =()=>[
    setState({...state, infinity: true})
]
    return (
        <div className='carousel_main' onMouseEnter={handleStopInfinity}
            onMouseLeave={handleStartInfinity}>
            <CarouselBody parentState={state} handleLeftArrow={handleLeftArrow}
                          handleRightArrow={handleRightArrow}
            />
        </div>
    )
}

export default MyCarousel;