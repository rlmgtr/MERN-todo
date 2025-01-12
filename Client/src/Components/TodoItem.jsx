import React from 'react'

const TodoItem = ({ todo }) => {
  return (
    <div>
      {todo.text}
      {`${todo.completed}`}
    </div>
  )
}

export default TodoItem


// https://www.youtube.com/watch?v=oJBu2k7OEk8&t=1773s
// 1:26:50 - adding checkbox now