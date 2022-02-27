const axios = require('axios')

const url ='https://whatsapp-masterclone.herokuapp.com'

export const addUser = async (data) => {
    try{
      return await  axios.post(`${url}/add`,data)
    }catch(err){
        console.log(err)
    }
}


export const getUsers = async () => {
  try{
    let res =  await  axios.get(`${url}/users`)
     console.log(res)
    return res.data
  }catch(err){
      console.log(err)
  }
}


export const setConversation = async (data) => {
  try{
    let res =  await  axios.post(`${url}/conversation/add`,data)
   
    return res
  }catch(err){
      console.log(err)
  }
}


export const GetConversation = async (data) => {
  try{
    let res =  await  axios.post(`${url}/conversation/get`,data)
   
    return res.data
  }catch(err){
      console.log(err)
  }
}


export const newMessage = async (data) => {
  try {
      return await axios.post(`${url}/message/add`, data);
  } catch (error) {
      console.log('Error while calling newConversations API ', error);
  }
}

export const getMessages = async (id) => {
  try {
    const res =   await axios.get(`${url}/message/get/${id}`);
    return res.data
  } catch (error) {
      console.log('Error while calling newConversations API ', error);
  }
}