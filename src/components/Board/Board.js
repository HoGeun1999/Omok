import './Board.css'
import { useState, useRef } from 'react'

function Board(){ 
    const [dollBLocation, setDollBLocation] = useState([])
    const [dollWLocation, setDollWLocation] = useState([])
    const turnCount = useRef(0)
    const boardSquare = []

    function onClickBoardButton(i){
        if(turnCount.current%2 == 0){
            setDollBLocation(dollBLocation => [...dollBLocation, i])
        }
        else{
            setDollWLocation(dollWLocation => [...dollWLocation, i])
        }
        turnCount.current = turnCount.current + 1
        return 
    }
 
    function makeBoardSquare(){       
        for(let i=0;i<100;i++){ 
            if(dollBLocation.includes(i)){
                boardSquare.push(
                    <div className='boardSquare'>
                        <div style= {{position : 'relative' , left : -17, top:-17,height:30,width:30,borderRadius:30/2,backgroundColor:'black'}}className='Omok'></div>
                    </div>)
            }
            else if(dollWLocation.includes(i)){
                boardSquare.push(
                    <div className='boardSquare'>
                        <div style= {{position : 'relative' , left : -17, top:-17,height:30,width:30,borderRadius:30/2,backgroundColor:'white', objectFit: 'cover', border: '1px solid black'}}className='Omok'></div>
                    </div>)
            }
            else{
                boardSquare.push(
                    <div className='boardSquare'>
                        <button style= {{position : 'relative' , left : -25, top:-12.5}} className='boardButton' onClick={() => onClickBoardButton(i)}></button>
                    </div>)
            }
        }

        return boardSquare
    }

    function onClickResetButton(){
        setDollBLocation(dollBLocation => [])
        setDollWLocation(dollWLocation => [])
        turnCount.current = 0
        return
    }

    function makeResetButton(){
        const resetButton = <button className='gameButton' onClick={()=>onClickResetButton()}>다시하기</button>

        return resetButton
    }

    function onCLickUndoButton(){
        if(turnCount.current>0){
            if(turnCount.current%2 == 1){
                setDollBLocation(dollBLocation.slice(0,dollBLocation.length-1))
                turnCount.current = turnCount.current - 1
            }
            else{
                setDollWLocation(dollWLocation.slice(0,dollWLocation.length-1))
                turnCount.current = turnCount.current - 1
            }
        }
        return 
    }

    function makeUndoButton(){
        const undoButton = <button className='gameButton' onClick={()=>onCLickUndoButton()}>되돌리기</button>

        return undoButton
    }

    return (
    <div className='wrap'>
        <div className='boardWrap'>
            {makeBoardSquare()}
        </div>
        <div className='buttonWrap'>
            {makeUndoButton()}
            {makeResetButton()}
        </div>
    </div>
    )
}


export {Board}