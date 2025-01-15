import React from 'react'
import { useQueryClient, useMutation, QueryClient } from 'react-query'
import updateToDoRequest from '../API/updateToDoRequest';

const TodoItem = ({ todo }) => {
const queryClient = useQueryClient();
  const {mutate: toggleCompletion} = useMutation(
    (updateToDo) => {
return updateToDoRequest(updateToDo);
  }, {
    onSettled: () => {
      queryClient.invalidateQueries('todos');
    },
  }
);

const updateText = (e) => {

}

//////
  return (
    <div>
      <input  
      checked={todo.completed} 
      type='checkbox' 
      onChange={() => updateToDo({
        ...todo,
        completed: !todo.completed, 
      })}
      />

    


      <input  
      checked={todo.text} 
      type='text' 
      value={todo.text}
      onChange={(e) => updateToDo({
        ...todo,
        text:e.target.value,
      })

      }
      />


    </div>
  );
};

export default TodoItem


// https://www.youtube.com/watch?v=oJBu2k7OEk8&t=1773s