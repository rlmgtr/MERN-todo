const API_URL = `http://localhost:8000`;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTczNjY4NzMzM30.bz2UKi-VpToCPZEGJ85-7KaF9fMF1OA9q5OBA2nPTeY'

export default () => {
return fetch(`${API_URL}/todo`, {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": 'application/json'
     }
} )
.then(response => response.json())
}