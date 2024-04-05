import axios from "axios";
import { dispatch } from "./store/store";
import { setTotalPages } from "./slice/movieSlice";

const token = process.env.REACT_APP_TOKEN;

/********************************************************************************************************************************** 
  
  fetchData function is used to get the data from the server according to the url given and set the data to the redux according to the type of url called by the axios request

  @param {String} url the url from which data is to be requested
  @param {function} setData used to set the data received from the api call to the redux store

  @returns none
  
 ***********************************************************************************************************************************/
  function fetchData(url,setData){
    const option = {
      method : "GET",
      url : url,
      headers : {
        accept : "application/json",
        Authorization : `Bearer ${token}`
      }
    }

    axios.request(option)
    .then((res)=>{
      // console.log(res.data.results);
      dispatch(setData(res.data.results || res.data))
      dispatch(setTotalPages(res?.data?.total_pages))
      
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  export default fetchData