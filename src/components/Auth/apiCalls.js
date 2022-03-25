import axios from 'axios'
export const sendMail = async (email, password, cpassword) =>{
    return axios.put('https://flashback-server.herokuapp.com/user/forgot',{email:email,password:password, confirmationPassword:cpassword}).then(res => res.data)
}
export const verifyMail = async (email, token) =>{
    return axios.put('https://flashback-server.herokuapp.com/user/verify',{email:email,token:token}).then(res => res.data)
}
