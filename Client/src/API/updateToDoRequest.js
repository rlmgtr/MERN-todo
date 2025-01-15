import { API_URL, token } from "./config";

export default (todo) => {
    return fetch(`${API_URL}/todos/${todo._id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": 'application/json'
        },
        body: JSON.stringify({
         text: todo.text,
         completed: todo.completed
        })
    })
    .then(response => response.json());
};


// https://www.youtube.com/watch?v=oJBu2k7OEk8&t=1773s
// 1:31 - now working on update