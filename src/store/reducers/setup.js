import { 
    GET_CATEGORIES, 
    GET_SOCIAL, 
    UPDATE_CATEGORIES,
    UPDATE_PROFILE, 
    UPDATE_SOCIAL,
} from '../types/index';

const initialState = {
    profile: '',
    categories: '',
    social: '',
}

const setupReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case UPDATE_PROFILE:{
            return {
                ...state,
                profile: payload.user,
                categories: state.categories,
                social: state.social
            }
        }
        case UPDATE_CATEGORIES:{
            return {
                ...state,
                profile: state.profile,
                categories: payload.categories,
                social: state.social
            }
        }
        case UPDATE_SOCIAL:{
            return {
                ...state,
                profile: state.profile,
                categories: state.categories,
                social: payload.social
            }
        }
        case GET_CATEGORIES:{
            return {
                ...state,
                profile: state.profile,
                categories: payload.categories,
                social: state.social
            }
        }
        case GET_SOCIAL:{
            return {
                ...state,
                profile: state.profile,
                categories: state.categories,
                social: payload.social
            }
        }
        default: {
            return state
        }
    }

}

export default setupReducer;