import React, { useState } from "react";
import ConfirmationCard from "../ConfirmationCard/ConfirmationCard";
import Menu from "../Menu/Menu";
import Payment from "../Payment/Payment";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  const [order, setOrder] = useState();

  const [totales, setTotales] = useState([]);
  
  const [orderTaken, setOrderTaken] = useState(false);
  const [confirmOrder,setConfirmOrder]=useState(false);

  const orderIsTaken = (validOrder, arr) => {
    setOrderTaken(validOrder);
    setOrder(arr);
  };

  const confirmedOrder=(confirmation,totales)=>{
    if(confirmation=='false'){
      setOrderTaken(false);
      setConfirmOrder(false);
    }
    else{
      setConfirmOrder(true);
      setTotales(totales);
    }
  }

  const orderFinished=(order)=>{
    if(order=='false'){
      setOrder();
      setTotales([]);
      setOrderTaken(false);
      setConfirmOrder(false);
      alert('Orden cancelada');
    }
    if(order=='true'){
      setOrder();
      setTotales([]);
      setOrderTaken(false);
      setConfirmOrder(false);
      alert('Orden entregada');
    }
  }

  // const magia=()=>{
  //   if(confirmOrder){
  //     return(
  //       <Payment totales={totales}/>
  //     );
  //   }
  //   else{
  //     return null;
  //   }
  // }

  return (
    <React.Fragment>
      {console.log(orderTaken,{order})}
      {!orderTaken && <Menu onOrderIsTaken={orderIsTaken}/>}
      {orderTaken && !confirmOrder && <ConfirmationCard productList={order} onConfirmedOrder={confirmedOrder}/>}
      {orderTaken && confirmOrder && <Payment totales={totales} onOrderFinished={orderFinished}/>}
    </React.Fragment>
  );
};

export default Home;
