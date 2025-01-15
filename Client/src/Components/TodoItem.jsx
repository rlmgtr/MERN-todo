import React from 'react';
import { useQueryClient, useMutation } from 'react-query';
import updateToDoRequest from '../API/updateToDoRequest';

const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();

  const { mutate: toggleCompletion } = useMutation(
    async (updatedToDo) => {
      console.log('Updating TODO:', updatedToDo);
      return await updateToDoRequest(updatedToDo);
    },
    {
      onError: (error) => {
        console.error('Error updating TODO:', error.message);
      },
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  const handleTextChange = (newText) => {
    toggleCompletion({
      ...todo,
      text: newText,
    });
  };

  return (
    <div>
      <input
        checked={todo.completed}
        type="checkbox"
        onChange={() =>
          toggleCompletion({
            ...todo,
            completed: !todo.completed,
          })
        }
      />
      <input
        type="text"
        value={todo.text}
        onChange={(e) => handleTextChange(e.target.value)}
      />
    </div>
  );
};

export default TodoItem;
