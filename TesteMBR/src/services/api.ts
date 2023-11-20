import axios from 'axios';

const baseUrl = 'http://localhost:4000/';

const api = axios.create ({baseURL:baseUrl, headers:{"Access-Control-Allow-Origin": "*", "Accept": "application/json", "Content-Type": "application/json"}});

export default api;