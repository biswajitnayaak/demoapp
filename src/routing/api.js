

const _api_base= "https://swapi.dev/api";
const _api_route = process.env.REACT_APP_API_ROUTE;



export const  API_ENDPOINTS = {
    GET_PEOPLES: '/people'
};

export const getApiEndpoint = (endpoint) => {

    return _api_base+endpoint

};