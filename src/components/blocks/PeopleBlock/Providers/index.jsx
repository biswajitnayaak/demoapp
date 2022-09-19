import React , {useContext,createContext, useReducer} from 'react';
import { API_ENDPOINTS ,getApiEndpoint} from '../../../../routing/api';
import { axiosClient } from '../../../../httpIntercepter';
import { combineReducers } from '../../../../utils/state';

export const initialState = {
    isLoading: true,
    isApiError: false,
    data: {
        peoples: null
    }
}

export const actionTypes = {
    INITIAL_LOAD: 'INITIAL_LOAD',
    SET_IS_LOADING: 'SET_IS_LOADING',
    SET_API_ERROR:'SET_API_ERROR'
}

const errorReducer = (state,action) => {
    switch(action.type){
        case actionTypes.SET_API_ERROR:
            return action.isApiError;
        default:
            return state;
    }
}

const loadingReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_IS_LOADING:
            return action.isLoading;
        case actionTypes.INITIAL_LOAD:
            return false;
        default:
            return state;
    }
};


const peopleListReducer = (state,action) => {
    switch(action.type){
        case actionTypes.INITIAL_LOAD:
            return action.data;
        default:
            return state;

    }
}

const rootReducer = combineReducers({
    isApiError:errorReducer,
    isLoading : loadingReducer,
    data:peopleListReducer
});


export const usePeoples = () => {
    const [peopleState, dispatch] = useReducer(rootReducer, initialState);

    const getPeoples = () => {
        
        let target = getApiEndpoint(API_ENDPOINTS.GET_PEOPLES);
        let config;

        axiosClient
            .get(target, config)
            .then(({ data }) => {
                console.log('After API called');

                console.log(data.results);

                dispatch({
                    type: actionTypes.INITIAL_LOAD,
                    data: { peoples: data.results } || { peoples: [] }
                });
            })
            .catch((error) => {
                dispatch({
                    type: actionTypes.SET_API_ERROR,
                    isApiError: true
                });
            })
            .finally(() => {
                dispatch({
                    type: actionTypes.SET_IS_LOADING,
                    isLoading: false
                });
            });
    };

    return [peopleState, { getPeoples, dispatch }];
};

export const PeoplesContext = createContext({});

export const PeoplesDataProvider = ({ children, state }) => {
    return (
        <PeoplesContext.Provider value={state}>
            {children}
        </PeoplesContext.Provider>
    );
};

export const usePeoplesContext = () => {
    return useContext(PeoplesContext);
};


