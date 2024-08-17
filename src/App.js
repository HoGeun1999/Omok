import './App.css';
import React, { useState } from 'react';
import Board from './components/Board/Board';
import { ResetButton, UndoButton } from './components/GameButton';

function App() {
  const [stoneBLocation, setStoneBLocation] = useState([])
  const [stoneWLocation, setStoneWLocation] = useState([])
  const [turnCount, setTurnCount] = useState(0)

  return (
    <div className='App'>
      <h1>Omok Game</h1>
      <Board stoneBLocation = {[stoneBLocation, setStoneBLocation]} stoneWLocation = {[stoneWLocation, setStoneWLocation]} turnCount = {[turnCount, setTurnCount]}/>
      <div className='buttonWrap'>
        <ResetButton stoneBLocation = {[stoneBLocation, setStoneBLocation]} stoneWLocation = {[stoneWLocation, setStoneWLocation]} turnCount = {[turnCount, setTurnCount]}/>
        <UndoButton stoneBLocation = {[stoneBLocation, setStoneBLocation]} stoneWLocation = {[stoneWLocation, setStoneWLocation]} turnCount = {[turnCount, setTurnCount]}/>
      </div>
    </div>
  );
}

export default App;
