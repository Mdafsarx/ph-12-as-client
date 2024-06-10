import axios from "axios";


const CommonUrl = () => {

    const axiosUrl = axios.create({
        // baseURL: 'http://localhost:1000',
        baseURL: 'https://ph-12-as-server.vercel.app',

    });
    return axiosUrl
};

export default CommonUrl;