import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCards from "react-tinder-card";
import axios from './axios';

function TinderCard() {
 const [people, setPeople] = useState([]);
 
 useEffect(() => {
     async function fetchData(){
         const req = await axios.get('/tinder/card');
         setPeople(req.data);
     }
     fetchData();
 }, []);

 const swiped = (direction, nameToDelete) =>{
     console.log("Removing: " +nameToDelete);
 };
 const outOfFrame = (name) =>{
     console.log(name + "Left the screen!");
 };
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person)=> (
                    <TinderCards
                        className="swipe"
                        key={person.name}
                        preventSwipe = {["up", "down"]}
                        onSwipe = {(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={()=> outOfFrame(person.name)}
                    >
                        <div style={{backgroundImage:`url(${person.imgUrl})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCards>
                ))}
            </div>
        </div>
    )
}

export default TinderCard
