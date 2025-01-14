const API_URL = `https://mern-todo-9ieq.onrender.com/todo`; 
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTczNjgzMzU5Nn0.9jRf-CUnB3R8yYiAzaaBushbJ9lU7Q0fbxrgePY5aEs';

export default () => {
    return fetch(`${API_URL}/todo`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": 'application/json'
        }
    })
    .then(response => response.json());
};
