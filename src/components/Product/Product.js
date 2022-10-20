import React, { useState } from "react";
import Panel from "../UI/Panel/Panel";

import "./Product.css";

const Product = (props) => {
  const [enteredQuantity, setEnteredQuantity] = useState("0");
  const [showPanel, setShowPanel] = useState(false);

  const panelHandler = () => {
    // setTimeout(setShowPanel(true),20000);
    setShowPanel(true);
  };

  const hidePanel = (hide) => {
    setShowPanel(hide);
  };

  const modifyQuantity = (quantity) => {
    setEnteredQuantity(quantity);
  };

  return (
    <div id="ProductDisplay">
      <label id="ProductName" className={"label"}>
        {props.product.name}
      </label>
      <label id="ProductQuantityLabel" className={"label"}>
        Cantidad
      </label>
      <label id="ProductQuantity" className={"label"}>
        {enteredQuantity}
      </label>
      <div id="ProductOptions">
        {!showPanel && (
          <button className="button" onClick={panelHandler}>
            Edit
          </button>
        )}
        {/* <button onClick={panelHandler}>Edit</button> */}
        {showPanel && (
          <Panel onHidePanel={hidePanel} onModifyQuantity={modifyQuantity} />
        )}
      </div>
    </div>
  );
};

export default Product;
