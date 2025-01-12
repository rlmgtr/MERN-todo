import './App.css';
import readToDoRequest from './API/readToDoRequest';
import { useQuery } from 'react-query';
import { ClipLoader } from 'react-spinners';
import TodoItem from './Components/TodoItem';

function App() {
  const { isLoading, data: toDos } = useQuery('toDos', readToDoRequest);

  return (
    <div className="App">
      {isLoading ? (
        <ClipLoader size={100} />
      ) : (
        toDos.map((todo) => (
          <TodoItem todo={todo} key={todo._id} />
        ))
      )} 
    </div>
  );
}

export default App;
