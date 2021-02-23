import axios from 'axios';

const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
const GET_ALL_USERS_ERROR = 'GET_ALL_USERS_ERROR';

export const getAllUsers=()=> async(dispatch)=>{
    try {
      
        const response = await axios.get("https://fakerapi.it/api/v1/users?_quantity=1&_gender=male");
        dispatch(getAllUsersSuccess(response.data.data))

    } catch (error) {
        const err="Failed to get users";
        dispatch(getAllUsersError(err))
    }
}


export function getAllUsersSuccess(data){
    return {
        type:GET_ALL_USERS_SUCCESS,
        payload:data
    }
}

export function getAllUsersError(error){
    return{
        type:GET_ALL_USERS_ERROR,
        payload:error
    }
}