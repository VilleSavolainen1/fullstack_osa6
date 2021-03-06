import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {

    const handleChange = (e) => {
        const filterValue = e.target.value
        props.filterChange(filterValue)
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

const connectedFilter = connect(null, { filterChange })(Filter)

export default connectedFilter