import Axios from "axios";

// export const getAxiosInstanceJsonServer = () => {
//     return  Axios.create({
//         baseURL:"http://localhost:3000/",
//         headers:{
//             // KEY_IP :"cgHC3CHR3CRFtJV7RWvY65RBgbUREht676HV"
//         }
//     })
// }
export const getAxiosInstanceAuth = () => {
    return  Axios.create({
        baseURL:"https://twitterapi.liara.run/api/",
        headers:{
            // KEY_IP :"cgHC3CHR3CRFtJV7RWvY65RBgbUREht676HV"
        }
    })
}
export const getAxiosInstanceApi = () => {
    return  Axios.create({
        baseURL:"https://twitterapi.liara.run/api/",
        headers:{
            'x-auth-token':localStorage.getItem('x-auth-token')
        }
    })
}

