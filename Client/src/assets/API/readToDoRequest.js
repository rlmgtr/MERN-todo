const API_URL = `http://localhost:8000`;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTczNjY1MzE3N30.gyLejppz-D8juP9LIfyYX86cIxzHyXgeIq7x9vd8AMo'

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