import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers'
import { addOne, applyNumber, 
  changeOperation, storeMemory,
  clearMemory } from './actions'

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleOne = () => {
    dispatch(addOne());
  }

  const handleNumber = n => {
    dispatch(applyNumber(n));
  }

  const handleOperation = op => {
    dispatch(changeOperation(op))
  }

  const handleClearMemory = () => {
    dispatch(clearMemory())
  }

  const handleClear = () => {
    dispatch(changeOperation('*'))
    dispatch(applyNumber(0))
    dispatch(changeOperation('+'))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={e => dispatch(storeMemory())}/>
              <CalcButton value={"MR"} onClick={e => handleNumber(state.memory)}/>
              <CalcButton value={"MC"} onClick={handleClearMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleOne}/>
              <CalcButton value={2} onClick={e => handleNumber(2)}/>
              <CalcButton value={3} onClick={e => handleNumber(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={e => handleNumber(4)}/>
              <CalcButton value={5} onClick={e => handleNumber(5)}/>
              <CalcButton value={6} onClick={e => handleNumber(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={e => handleNumber(7)}/>
              <CalcButton value={8} onClick={e => handleNumber(8)}/>
              <CalcButton value={9} onClick={e => handleNumber(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={e => handleOperation("+")}/>
              <CalcButton value={"*"} onClick={e => handleOperation("*")}/>
              <CalcButton value={"-"} onClick={e => handleOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
