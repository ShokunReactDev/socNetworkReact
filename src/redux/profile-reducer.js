import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    userProfile: {},
    postsData: [
        { id: 1, massage: 'Hi, how are you?', countLikes: '12', time: '29 minutes ago' },
        { id: 2, massage: 'It is my first post', countLikes: '99+', time: 'yesterday' },
        { id: 3, massage: 'My name Liubov, I am wife Eugen', countLikes: '32', time: 'week ago' }
    ],
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: Date.now(),
                massage: action.newPostText,
                countLikes: '0',
                time: new Date().toLocaleTimeString()
            }
            return {
                ...state,
                postsData: [newPost, ...state.postsData]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile

            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case DELETE_POST:
            return {
                ...state,
                post: state.postsData.filter(p => p.id != action.postId)
            }
        default:
            return state
    }


}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })

export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const setUserProfile = (profile) =>
    ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) =>
    ({ type: SET_STATUS, status })

export const getUserProfile = (profileId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(profileId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getUserStatus = (profileId) => {
    return (dispatch) => {
        profileAPI.getStatusProfile(profileId).then(status => {
            dispatch(setStatus(status))
        })
    }
}

export const updateUsersStatus = (status, profileId) => {
    return (dispatch) => {
        profileAPI.updateStatusProfile(status, profileId).then(data => {
            dispatch(setStatus(status))
        })
    }
}



export default profileReducer;