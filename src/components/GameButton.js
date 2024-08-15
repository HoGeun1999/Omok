import './GameButton.css';

const ResetButton = () => {

    function makeResetButton(){
        const button =  <button className='gameButton'>1</button>
        return button
    }


    return <div>
        {makeResetButton()}
    </div>
}



const UndoButton = () => {

    return <button className='gameButton'>1</button>
}


export {ResetButton, UndoButton} 