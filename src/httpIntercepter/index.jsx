import axios from 'axios';

export const axiosClient =axios.create(
    {
        headers: {
            'Content-Type':'application/json'
        }
    }
);


const HttpIntercepter = () => {

    axiosClient.interceptors.request.use(async (config) => {

        //TODO:Place to inlcude AuthorizationHeader
        return config;
    });

    axiosClient.interceptors.response.use(
        (res) => res,
        (err) => Promise.reject(err)
    );
}

export default HttpIntercepter;
