import React, { useState } from "react";
import Panel from "../UI/Panel/Panel";

import "./Product.css";

const Product = (props) => {
  const [showPanel, setShowPanel] = useState(false);

  const panelHandler = () => {
    setShowPanel(true);
  };

  const hidePanel = (hide) => {
    setShowPanel(hide);
  };

  const modifyQuantity = (quantity) => {
    const newProduct = { name: props.product.name, quantity: quantity };
    props.onUpdateProduct(newProduct);
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
        {props.product.quantity}
      </label>
      <div id="ProductOptions">
        {!showPanel && (
          <button className="button" onClick={panelHandler}>
            Edit
          </button>
        )}
        {showPanel && (
          <Panel onHidePanel={hidePanel} onModifyQuantity={modifyQuantity} />
        )}
      </div>
    </div>
  );
};

export default Product;
