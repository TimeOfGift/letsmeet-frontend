import React, {useState, useEffect}from "react";
import "./interestlist.scss";
import InterestButton from "../../components/InterestButton/interestButton";
import axios from "axios";

function  InterestList() {

     const [item, setItem] = useState([]);


     useEffect(() => {
          axios.get("https://event-meet.herokuapp.com/api/v1/user/interest")
          .then(result =>{
               console.log(result, 'lllllllll');
          })
         .catch(error =>{

          console.log(error);
         })

     });


     return (
          <div className='interest_list'>
          <div className="item">
                
             <InterestButton />





               </div>
           </div>
     );
}

export default InterestList;