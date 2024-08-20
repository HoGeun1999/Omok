import './App.css';
import React, { useRef, useState } from 'react';
import Board from './components/Board/Board';
import { ResetButton, UndoButton } from './components/GameButton';
import CheckGameEnd from './components/EndGame';

function App() {
  const [stoneBLocation, setStoneBLocation] = useState([])
  const [stoneWLocation, setStoneWLocation] = useState([])
  const [turnCount, setTurnCount] = useState(0)
  const [buttondisabled, setButtondisabled] = useState(false)

  return (
    <div className='App'>
      <h1>Omok Game</h1>
      <Board stoneBLocation = {[stoneBLocation, setStoneBLocation]} stoneWLocation = {[stoneWLocation, setStoneWLocation]} turnCount = {[turnCount, setTurnCount]} buttonState= {[buttondisabled, setButtondisabled]}/>
      <div className='buttonWrap'>
        <ResetButton stoneBLocation = {[stoneBLocation, setStoneBLocation]} stoneWLocation = {[stoneWLocation, setStoneWLocation]} turnCount = {[turnCount, setTurnCount]} buttonState= {[buttondisabled, setButtondisabled]}/>
        <UndoButton stoneBLocation = {[stoneBLocation, setStoneBLocation]} stoneWLocation = {[stoneWLocation, setStoneWLocation]} turnCount = {[turnCount, setTurnCount]} buttonState= {[buttondisabled, setButtondisabled]}/>
      </div>
      <div>
        <CheckGameEnd stoneBLocation = {[stoneBLocation, setStoneBLocation]} stoneWLocation = {[stoneWLocation, setStoneWLocation]} turnCount = {[turnCount, setTurnCount]} buttonState= {[buttondisabled, setButtondisabled]}/>
      </div>
    </div>
  );
}

export default App;
