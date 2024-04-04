import axios from "axios";

const token = process.env.REACT_APP_TOKEN;

/********************************************************************************************************************************** 
  
  fetchData function is used to get the data from the server according to the url given and set the data to the redux according to the type of url called by the axios request

  @param {String} url the url from which data is to be requested
  @param {String} dataOF this is used to identify in which state inside redux should we set the data using dispatch
  @param {function} dispatch used to call the reducer in redux 
  @param {function} setData used to set the data received from the api call to the redux store

  @returns none
  
 ***********************************************************************************************************************************/
  function fetchData(url,dataOF,dispatch,setData){
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

      if(dataOF === "trending"){

        dispatch(setData(res.data.results))

      } else if(dataOF === "config"){

        dispatch(setData(res.data))

      } else if (dataOF === "movie"){

        dispatch(setData(res.data))

      } else if (dataOF === "popular"){
        // dispatch(setData(res))
        // console.log(setData(res.data.results))
        dispatch(setData(res.data.results))
      }
      
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  export default fetchData