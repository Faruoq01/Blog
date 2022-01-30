import SetupService from '../../service/setupService';
import { 
    UPDATE_PROFILE, 
    UPDATE_CATEGORIES, 
    UPDATE_SOCIAL,
    GET_CATEGORIES,
    GET_SOCIAL, 
} from '../types/index';

export const updateProfile = (params) => dispatch => {
    return SetupService.updateProfile(params)
    .then(data => {
        dispatch({ type: UPDATE_PROFILE, payload: data })
    })
    .catch(err => {})
}

export const updateCategories = (params) => dispatch => {
    return SetupService.updateCategories(params)
    .then(data => {
        dispatch({ type: UPDATE_CATEGORIES, payload: data })
    })
    .catch(err => {})
}

export const updateSocial = (params) => dispatch => {
    return SetupService.updateSocial(params)
    .then(data => {
        dispatch({ type: UPDATE_SOCIAL, payload: data })
    })
    .catch(err => {})
}

export const getCategories = (params) => dispatch => {
    return SetupService.getCategories(params)
    .then(data => {
        dispatch({ type: GET_CATEGORIES, payload: data })
    })
    .catch(err => {})
}

export const getSocial = (params) => dispatch => {
    return SetupService.getSocial(params)
    .then(data => {
        dispatch({ type: GET_SOCIAL, payload: data })
    })
    .catch(err => {})
}