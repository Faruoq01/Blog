import SetupService from '../../service/setupService';
import { 
    UPDATE_PROFILE, 
    UPDATE_CATEGORIES, 
    UPDATE_SOCIAL,
    GET_PROFILE,
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

export const getProfile = () => dispatch => {
    return SetupService.getProfile()
    .then(data => {
        dispatch({ type: GET_PROFILE, payload: data })
    })
    .catch(err => {})
}

export const getCategories = () => dispatch => {
    return SetupService.getCategories()
    .then(data => {
        dispatch({ type: GET_CATEGORIES, payload: data })
    })
    .catch(err => {})
}

export const getSocial = () => dispatch => {
    return SetupService.getSocial()
    .then(data => {
        dispatch({ type: GET_SOCIAL, payload: data })
    })
    .catch(err => {})
}