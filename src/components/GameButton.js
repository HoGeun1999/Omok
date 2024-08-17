import './GameButton.css';

const ResetButton = (props) => {
    return <button className='gameButton' onClick={()=>onClickResetButton(props)}>다시하기</button>
}

function onClickResetButton(props){
    const stoneWLocation = props.stoneWLocation[0]
    const stoneBLocation = props.stoneBLocation[0]

    props.stoneBLocation[1]([stoneBLocation => []])
    props.stoneWLocation[1](stoneWLocation => [])
    props.turnCount[1](0)
    return
}

const UndoButton = (props) => {
    return <button className='gameButton' onClick={()=>onClickUndoButton(props)}>되돌리기</button>
}

function onClickUndoButton(props){
    const stoneBLocation = props.stoneBLocation[0]
    const stoneWLocation = props.stoneWLocation[0]

    console.log(stoneBLocation)
    if(props.turnCount[0]>0){
        if(props.turnCount[0]%2 === 1){
            console.log(stoneBLocation)
            props.stoneBLocation[1](stoneBLocation.slice(0,stoneBLocation.length-1))
            props.turnCount[1](props.turnCount[0] - 1)
        }
        else{
            props.stoneWLocation[1](stoneWLocation.slice(0,stoneWLocation.length-1))
            props.turnCount[1](props.turnCount[0] - 1)
        }
    }
    return 
}

export {ResetButton, UndoButton} 