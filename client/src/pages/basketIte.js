import React, { useState, useEffect, useContext } from 'react';
import {fetchBasket} from "../http/basketAPI";
import './css/basket.css';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchOneDevice} from "../http/deviceAPI";



const BasketIte = observer((props) => {
    const [basketIte, setBasketIte] = useState(props.data);
 
    const {user, basket} = useContext(Context)



    return (
        <div className="basketIte">
            <h1>{props.id}</h1>   
               
               
        </div>
        
        
    );
});

export default BasketIte;