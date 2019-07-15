import axios from 'axios'

const addUserRequest=(user)=>{
    axios.post(`https://secure-refuge-14993.herokuapp.com/add_user?username=${user.username}&password=${user.password}&role=${user.role}`)
    .then(function (response) {
    if (response.data.error===0){
        alert('User Added Sucessfully!')
    }
    else alert(response.data.message)
    })
    .catch(function (error) {
        alert(error);
    });
}

export function* addUser(id){
    yield addUserRequest(id.payload)
}