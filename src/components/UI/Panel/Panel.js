import { useState } from "react";
import Card from "../Card/Card";

import './Panel.css'

const Panel = (props) => {
  const [quantity, setQuantity] = useState("0");

  const hiddingPanel = () => {
    props.onHidePanel(false);
    props.onModifyQuantity('0');
  };

  const okHiddingPanel = () => {
    
    props.onHidePanel(false);
    // props.onModifyQuantity(quantity);

    props.onModifyQuantity(+quantity);
  };

  const modQuantity = (event) => {
    setQuantity((prevState) => {
      if(prevState=="0"){
        prevState="";
      }
      return prevState + event.target.value;
    });
  };

  // let newQuantity='';

  // const editQuantity=(event)=>{
  //   newQuantity+=event.target.value;
  //   console.log(event);
  // }

  return (
    <div id="Panel">
      <input id='visor' readOnly value={quantity}></input>
      <div>
        <button className={'panelButton'} value={'1'} onClick={modQuantity}>1</button>
        <button className={'panelButton'} value={'2'} onClick={modQuantity}>2</button>
        <button className={'panelButton'} value={'3'} onClick={modQuantity}>3</button>
      </div>
      <div>
        <button className={'panelButton'} value={'4'} onClick={modQuantity}>4</button>
        <button className={'panelButton'} value={'5'} onClick={modQuantity}>5</button>
        <button className={'panelButton'} value={'6'} onClick={modQuantity}>6</button>
      </div>
      <div>
        <button className={'panelButton'} value={'7'} onClick={modQuantity}>7</button>
        <button className={'panelButton'} value={'8'} onClick={modQuantity}>8</button>
        <button className={'panelButton'} value={'9'} onClick={modQuantity}>9</button>
      </div>
      <div>
        <button className={'panelButton'} onClick={hiddingPanel}>Cancel</button>
        <button className={'panelButton'} value={'0'} onClick={modQuantity}>0</button>
        <button className={'panelButton'} onClick={okHiddingPanel}>OK</button>
      </div>
    </div>
  );
};

export default Panel;
