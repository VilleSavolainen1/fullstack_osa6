import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const value = (type) => {
    store.dispatch({
      type: type
    })
  }

  const reset = () => {
    store.dispatch({
      type: 'ZERO',
      state: {
        good: 0,
        ok: 0,
        bad: 0
      }
    })
  }

  return (
    <div>
      <button onClick={() => value('GOOD')}>good</button>
      <button onClick={() => value('OK')} >neutral</button>
      <button onClick={() => value('BAD')} >bad</button>
      <button onClick={reset} >reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad} </div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)