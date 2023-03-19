import axios from "axios"

//fetch input data and return list
export const getAxiosData = (props: string) => {
   return axios
    .get(`http://www.omdbapi.com/?s=${props}&apikey=92aa837c`)
    .then(({ data }) => console.log(data["Search"]))
    .catch((err) => {
        console.error(err)
    })
} 