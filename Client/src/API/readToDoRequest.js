import { API_URL, token } from "./config";

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
