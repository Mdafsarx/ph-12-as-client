import axios from "axios";


const CommonUrl = () => {

    const axiosUrl = axios.create({
        baseURL: 'http://localhost:1000',
        // baseURL: import.meta.env.VITE_URL,

    });
    return axiosUrl
};

export default CommonUrl;