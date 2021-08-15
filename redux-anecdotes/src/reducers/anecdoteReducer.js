import anecdoteService from '../services/anecdotes'

const getId = () => Number((Math.random() * 100000).toFixed(0))

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


const reducer = (state = [], action) => {
  switch (action.type) {
    case 'vote':
      const id = action.id
      const anecdoteToVote = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      const result = state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
      return result
    case 'new':
      return [...state, action.data]
    case 'init':
      return action.data
    default:
      return state
  }
}


export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.voteAnecdote(anecdote)
    dispatch({
      type: 'vote',
      id: votedAnecdote.id
    })
  }
}

export const newAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'new',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'init',
      data: anecdotes
    })
  }
}

export default reducer