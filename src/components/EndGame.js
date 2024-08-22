import './EndGame.css'

function CheckGameEnd(props){
    const stoneBLocation = props.stoneBLocation[0]
    const stoneWLocation = props.stoneWLocation[0]
    const numArr = [1,18,19,20]

    for(let j=0;j<stoneBLocation.length;j++){
        for(let i=0;i<numArr.length;i++){
            if(checkSimulater(stoneBLocation, stoneBLocation[j], numArr[i])){
                return (
                    <div className='endGame'>흑돌 승</div>
                )
            }
        }
        for(let i=0;i<numArr.length;i++){
            if(checkSimulater(stoneWLocation, stoneWLocation[j], numArr[i])){
                return (
                    <div className='endGame'>흰돌 승</div>
                )
            }
        }
    }

    function checkSimulater(stoneLocation, startNum,d){
        let count = 1   
        for(let i=1;i<5;i++){
            if(stoneLocation.includes(startNum+d*i))
                count = count + 1   
        }   
        if(count === 5){
            props.buttonState[1](true)
            return true
        }
        else{
            return false
        }
    }
}

export default CheckGameEnd