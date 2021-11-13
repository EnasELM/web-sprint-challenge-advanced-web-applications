import axios from 'axios';

//create an instance of axios with the authentication header
const axiosWithAuth = ()=> {

    const token = localStorage.getItem('token');
    
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:5000/api'
    });
   
}

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth