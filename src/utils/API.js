import axios from 'axios';

export default {
    getEmployeeList:function(){
   // let empData=[]
   return(axios.get("https://randomuser.me/api/?results=15"));
          
}
  
}
