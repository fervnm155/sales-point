import React, { useState } from "react";
import Menu from "../Menu/Menu";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  const [orderTaken, setOrderTaken] = useState(false);
  const [order, setOrder] = useState();

  const orderIsTaken = (validOrder, arr) => {
    setOrderTaken(validOrder);
    setOrder(arr);
  };
  return (
    <React.Fragment>
      {console.log(orderTaken,{order})}
      {!orderTaken && <Menu onOrderIsTaken={orderIsTaken} />}
    </React.Fragment>
  );
};

export default Home;
