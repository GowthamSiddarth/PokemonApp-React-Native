// src/helpers/api.js

import { POKEMON_API_PATH } from "../assets/constants/API";

const api = {
    get: (endpoint) => {
        return fetch(`${POKEMON_API_PATH}/${endpoint}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data from ${endpoint}`);
                }
                return response.json();
            })
            .catch((error) => {
                console.error(`Error in api.get(${endpoint}):`, error.message);
                throw error;
            });
    },

    // Add more methods (post, put, delete, etc.) as needed
};

export default api;
