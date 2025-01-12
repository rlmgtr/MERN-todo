import './App.css'
import { useEffect, useState } from 'react'
import readToDoRequest from './assets/API/readToDoRequest';
import { useQuery } from 'react-query';

function App() {

  const {isLoading, data: toDos} = useQuery('toDos', () => {


  })

  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    readToDoRequest().then(setToDos);
  }, []);

  return (
    <div className="App">
      {toDos.map((todo) => {
        return (
          <div key={todo._id}>
            {todo.text}
            {`${todo.completed}`}
          </div>
        );
      })}
    </div>
  );
}

export default App;


// https://www.youtube.com/watch?v=oJBu2k7OEk8&t=1773s
//1:20 - now adding spinners