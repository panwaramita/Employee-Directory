//import the axios to call the API
import axios from 'axios';
//create and export the getEmployeeList to get the employee list
export default {
    getEmployeeList:function(){
   return(axios.get("https://randomuser.me/api/?results=15"));
          
}
  
}
