// src/helpers/api.js

import { POKEMON_API_PATH } from "../assets/constants/API";

const api = {
    getWithEndpoint: (endpoint) => {
        const uri = `${POKEMON_API_PATH}/${endpoint}`.trim();
        return fetch(uri)
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

    get: (uri) => {
        return fetch(`${uri}`)
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
