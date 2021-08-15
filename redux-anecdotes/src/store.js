import { createStore, combineReducers, applyMiddleware } from "redux";
import anecdoteService from './services/anecdotes'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from "./reducers/filterReducer";

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer
})

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk)))

anecdoteService.getAll().then(anecdotes => anecdotes.forEach(anecdote => {
    store.dispatch({ type: 'init', data: anecdote })
}))

export default store