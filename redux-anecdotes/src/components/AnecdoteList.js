import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    let sorted = [];
    const anecdotes = useSelector(state => {
        if (state.filter === 'ALL') {
            return state.anecdotes
        }
        return state.anecdotes.filter(a => a.content.includes(state.filter))
    })
    const dispatch = useDispatch()
    if (anecdotes.length > 1) {
        sorted = anecdotes.sort((a, b) => a.votes - b.votes).reverse()
    }

    const vote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotification(`You voted '${anecdote.content}'`, 5))
    }

    return (
        <div>
            {sorted.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList