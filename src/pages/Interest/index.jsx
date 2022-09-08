import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchInterests } from './../../redux/actions/interests'
import "./interestlist.scss";
import InterestButton from "../../components/InterestButton/interestButton";

function InterestList() {
     const dispatch = useDispatch();
     const { interests } = useSelector(state => state.interestReducer);

     console.log(interests, "=============================")
     const [item, setItem] = useState([]);


     useEffect(() => {
          dispatch(fetchInterests())

     }, []);


     return (
          <div className='interest_list'>
               {interests?.map(interest => (
                    <div className="item">
                         <InterestButton name={interest.name} />
                    </div>
               ))}
          </div>
     );
}

export default InterestList;