import { connect } from "react-redux";
import { newAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {

  const createAnecdote = async (e) => {
    e.preventDefault()
    const anecdote = e.target.anecdote.value
    e.target.anecdote.value = ''
    props.newAnecdote(anecdote)
    props.setNotification(`You created '${anecdote}'`)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdote} >
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const connectedForm = connect(null, { newAnecdote, setNotification })(AnecdoteForm)

export default connectedForm