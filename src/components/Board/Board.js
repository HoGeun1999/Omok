import './Board.css'

function Board(props){ 
    const boardSquare = []
    const stoneBLocation = props.stoneBLocation[0]
    const stoneWLocation = props.stoneWLocation[0]

    function onClickBoardButton(i){
        if(props.turnCount[0]%2 === 0){
            props.stoneBLocation[1](stoneBLocation => [...stoneBLocation, i])
        }
        else{
            props.stoneWLocation[1](stoneWLocation => [...stoneWLocation,i])
        }
        props.turnCount[1](props.turnCount[0] + 1)

        return 
    }
    
    function makeBoardSquare(){      
        for(let i=0;i<361;i++){ 
            if(stoneBLocation.includes(i)){
                boardSquare.push(
                    <div className='boardSquare' key={i}>
                        <div className='stone black'></div>
                    </div>)
            }
            else if(stoneWLocation.includes(i)){
                boardSquare.push(
                    <div className='boardSquare' key={i}>
                        <div className='stone white'></div>
                    </div>)
            }
            else if(i<=18 || i%19===0){
                boardSquare.push(
                    <div className='boardSquare' key={i}>
                        <button disabled = {true} className='boardButton' onClick={() => onClickBoardButton(i)}></button>
                    </div>)
            }
            else{
                boardSquare.push(
                    <div className='boardSquare' key={i}>
                        <button disabled = {props.buttonState[0]} className='boardButton' onClick={() => onClickBoardButton(i)}></button>
                    </div>)
            }

        }

        return boardSquare
    }


    return (
        <div className='boardWrap'>
            {makeBoardSquare()}
        </div>
    )
}


export default Board