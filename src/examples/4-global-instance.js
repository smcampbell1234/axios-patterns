/**
 *
 * See axio/global.js file
 *
 * See README.md
 * axios.defaults.headers.common['Accept'] = 'application/json';
   axios.defaults.baseURL = 'https://api.example.com';
   axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
   axios.defaults.headers.post['Content-Type'] =
 'application/x-www-form-urlencoded';

 */

import { useEffect } from 'react';
import axios from 'axios'

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

// here we want to all productURL but we want to add ACCEPT header by default to all calls
const GlobalInstance = () => {
  const fetchData = async () => {
    console.log('global axios instance');
    try {
      const response1 = await axios(productsUrl)
      const response2 = await axios(randomUserUrl)
      console.log("response1 : ",response1)
      console.log("response2 : ",response2)

    } catch (error) {

    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
