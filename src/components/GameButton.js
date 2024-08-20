import './GameButton.css';

const ResetButton = (props) => {
    return <button className='gameButton' onClick={()=>onClickResetButton(props)}>다시하기</button>
}

function onClickResetButton(props){
    props.buttonState[1](false)
    props.stoneBLocation[1]([])
    props.stoneWLocation[1]([])
    props.turnCount[1](0)
    return
}

const UndoButton = (props) => {
    return <button className='gameButton' onClick={()=>onClickUndoButton(props)}>되돌리기</button>
}

function onClickUndoButton(props){
    const stoneBLocation = props.stoneBLocation[0]
    const stoneWLocation = props.stoneWLocation[0]

    if(props.turnCount[0]>0){
        if(props.turnCount[0]%2 === 1){
            props.stoneBLocation[1](stoneBLocation.slice(0,stoneBLocation.length-1))
            props.turnCount[1](props.turnCount[0] - 1)
        }
        else{
            props.stoneWLocation[1](stoneWLocation.slice(0,stoneWLocation.length-1))
            props.turnCount[1](props.turnCount[0] - 1)
        }
    }

    if(props.buttonState[0]){
        props.buttonState[1](false)
    }

    return 
}

export {ResetButton, UndoButton} 