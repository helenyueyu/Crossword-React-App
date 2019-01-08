import React from 'react'

const Child = (props) => ({
  render() {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.author}</p>
      </div>
    )
  }
})

export default Child
