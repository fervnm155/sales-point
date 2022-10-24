import React, { useState } from "react";
import ConfirmationCard from "../ConfirmationCard/ConfirmationCard";
import Menu from "../Menu/Menu";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  const [order, setOrder] = useState();
  
  const [orderTaken, setOrderTaken] = useState(false);
  const [confirmOrder,setConfirmOrder]=useState(false);

  const orderIsTaken = (validOrder, arr) => {
    setOrderTaken(validOrder);
    setOrder(arr);
  };

  const confirmedOrder=(confirmation)=>{
    if(confirmation=='false'){
      setOrderTaken(false);
      setConfirmOrder(false);
    }
    else{
      setConfirmOrder(true);
    }
  }
  return (
    <React.Fragment>
      {console.log(orderTaken,{order})}
      {!orderTaken && <Menu onOrderIsTaken={orderIsTaken}/>}
      {orderTaken && !confirmOrder && <ConfirmationCard productList={order} onConfirmedOrder={confirmedOrder}/>}
    </React.Fragment>
  );
};

export default Home;
