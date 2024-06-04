import axios from "axios";


const CommonUrl = () => {

    const axiosUrl = axios.create({
        baseURL: 'http://localhost:1000',
    });
    return axiosUrl
};

export default CommonUrl;