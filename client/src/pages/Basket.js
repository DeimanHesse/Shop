import React, { useState, useEffect, useContext } from 'react';
import {fetchBasket, deletehIte} from "../http/basketAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchOneDevice} from "../http/deviceAPI";
import BasketIte from './basketIte';

import {Container} from "react-bootstrap";



const Basket = observer(() => {

    const {user,basket} = useContext(Context)
    //  const basketId = user.userId
     let basketId = localStorage.getItem("userId");
     basketId = JSON.parse(basketId)
     console.log("айди корзины",basketId)
     const [basketSt, setBasket] = useState({
        todoData: []
    });

     function plus (index) {
        setBasket(({todoData}) => {
            const newArr = todoData;
            newArr[index].counter++
            
           
            return {
                todoData: newArr
            }

        })
     }
     function minus (index) {
        setBasket(({todoData}) => {
            const newArr = todoData;
            if (newArr[index].counter >1) {
                newArr[index].counter--
            }
            
            
           
            return {
                todoData: newArr
            }

        })
     }
     

     let arr2=[]
   
    useEffect(() => {
            fetchBasket()
            .then(data => hope(data))
           
            

    }, [])

    

    function addElem (data) {
        let oldaArr = data;
        //индекс дл доавлени в newArr
        let i = 0;
        console.log('gggggggg', oldaArr)
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            
            if (element.basketId === basketId) {
                
                
                
                fetchOneDevice(element.deviceId)
               
                .then(data=> setBasket(({todoData}) => {
                    
                    console.log(data)
                    let newArr = [
                        ...todoData,
                        data
                    ];
                    console.log('id', oldaArr[index].id)
                    // newArr.map((element) => {
                    //     element.counter =1
                    //     // element.idInBasket = 
                    // })
                    console.log('newArr',newArr[index])
                    console.log('newArr',newArr)
                    console.log('index',i)
                    newArr[i].idInBasket = oldaArr[index].id
                    newArr[i].counter = 1
                    console.log('ele',element)
                    i++;
                   
                    return {
                        todoData: newArr
                    }
                }))
                
                
            }
        }


       
        // return arr2
    }
    
    let sumf = 0
    function sum () {
        basketSt.todoData.map (element => {
            let elPrice = element.price* element.counter
            sumf= sumf + elPrice
})






    }
    sum()
    


    async function hope (data) {
        console.log(data)
        await addElem(data, arr2)
        return arr2
    }



    function send () {
        let sendObj = basketSt;
        
        sendObj.su = sumf;
        sendObj.userId = user.userId;

        console.log(sendObj);
    }

    function del (id) {
        console.log(id)
        deletehIte(id)
        setBasket(({todoData}) => {
           const idx = todoData.findIndex((el) => el.idInBasket ===id)
           todoData.splice(idx,1);

           const before = todoData.slice(0, idx);
           const after = todoData.slice(idx+1);

           const newArray = [...before, ...after];
            return {
                todoData: newArray
            }
        })
    }
   
 console.log('локальный стейт',basketSt)

     
        
    return (
        <Container>
            <div className="basket">
             
               
            <div>
               {basketSt.todoData.map((element, index) => (
                   <div key={index} className="basketite">
                       <div className="itemBlock">
                    <div className="basketRow">
                        <div className="good__label">{element.name}</div>
                        <button className="good__delete" onClick={()=>{
                                del(element.idInBasket)
                            }}>удалить</button>
                    </div>
                    <div className="basketRow1">
                        <div className="good__count">
                            <button className="countButton" onClick={() => {minus(index)}}>-</button>


                            <div className="good__counter">{element.counter}</div>
                            <button className="countButton" onClick={() => {plus(index)}}>+</button>
                        </div>
                        <div className="delete__price">{element.price*element.counter} руб</div>
                    </div>
                </div>

                      
                       
                   </div>
                   
                
            ))}    
            </div>
            <div className="sumBlock">
                <div className="sum__title">
                сумма заказа   
                </div>
                <div className="sum__count">
                {sumf} руб
                </div>
            </div>
            
            <button className="send" onClick={() => {
                send()
            }}>Oформить заказ</button>

               
        </div>
        </Container>
        
    );
});

export default Basket;
