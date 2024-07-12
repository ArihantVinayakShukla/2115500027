const axios = require('axios');
const config = require('../config');


const apiClient = axios.create({
    baseURL: config.TEST_SERVER_BASE_URL,
    timeout: config.RESPONSE_TIMEOUT,
    headers:{
        'Auhtorization': `Bearer ${config.AUTH_TOKEN}`,
        'Content-Type': 'application/json'
    }
});

apiClient.interceptors.request.use((config) => {
    config.headers['Authorization'] = config.AUTH_TOKEN;
    return config;
});

exports.fetchNumbers = async (type) => {
    try {
        console.log('Yahan aa gaya');
        const response = await apiClient.get(`/${type}`);
        return response.data.numbers;
    } catch (error) {
        console.error(`Error fetching ${type} numbers:`, error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Error setting up request:', error.message);
        }
        throw error;
    }
};