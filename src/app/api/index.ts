import axios from "axios"

//fetch input data and return list
export const getAxiosData= (props: string) => {
   return axios
    .get(`http://www.omdbapi.com/?s=${props}&apikey=92aa837c`)
    .then(({ data }) => data)
    .catch((err) => {
        console.error(err)
    })
} 