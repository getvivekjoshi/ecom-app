import { LOGIN_USER } from "../constants/userConstants"


export const setUserReduxState = (userCreated) => (dispatch) => {
    dispatch({
        type:LOGIN_USER,
        payload:userCreated
    })
}