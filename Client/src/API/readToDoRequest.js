const API_URL = `https://mern-todo-9ieq.onrender.com/`; 
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTczNjgzMjA0OX0.AZkp5oz90yhwKxLwZTGrBrlDl0cTJrEZEiAm5d331DI';

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
