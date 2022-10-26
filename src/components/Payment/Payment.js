import { useEffect, useState } from "react";
import Panel from "../UI/Panel/Panel";

import "./Payment.css";

const Payment = (props) => {
  const tac = JSON.parse(localStorage.getItem("tacos"));
  const beb = JSON.parse(localStorage.getItem("bebidas"));
  const pos = JSON.parse(localStorage.getItem("postres"));

  const [showPanel, setShowPanel] = useState(false);
  const [money, setMoney] = useState(0);
  const [payBack, setPayBack] = useState(0);

  const panelHandler = () => {
    setShowPanel(true);
  };

  const hidePanel = (hide) => {
    setShowPanel(hide);
  };

  const modifyQuantity = (quantity) => {
    setMoney(quantity);
    // returnMoney();
  };

  useEffect(() => {
    if (money != 0) {
      setPayBack(money - props.totales[3]);
    } else {
      setPayBack(0);
    }
  }, [money]);

  const cancellation=(event)=>{
    localStorage.removeItem('tacos');
    localStorage.removeItem('bebidas');
    localStorage.removeItem('postres');
    props.onOrderFinished(event.target.value);
  };


  return (
    <div className="payment">
      <div className="paymentData">
        <h1 className="paymentTitle">Pago</h1>
        <div className="paymentList pText">
          <div className="pProducts pSubTitles">
            <h2 className="pProductName">Producto</h2>
            <h2 className="pProductQuantity">Cantidad</h2>
            <h2 className="pProductSubtotal">Subtotal</h2>
          </div>
          <div className="pProducts">
            <label className="pProductName">{tac.name}</label>
            <label className="pProductQuantity">{tac.quantity}</label>
            <label className="pProductSubtotal">${props.totales[0]}</label>
          </div>
          <div className="pProducts">
            <label className="pProductName">{beb.name}</label>
            <label className="pProductQuantity">{beb.quantity}</label>
            <label className="pProductSubtotal">${props.totales[1]}</label>
          </div>
          <div className="pProducts">
            <label className="pProductName">{pos.name}</label>
            <label className="pProductQuantity">{pos.quantity}</label>
            <label className="pProductSubtotal">${props.totales[2]}</label>
          </div>
        </div>
        <div className="pOperations pText">
          <h2 className="">TOTAL: ${props.totales[3]}</h2>
          <div>
            <label>Cantidad ingresada</label>
            <p className="pResults">{money}</p>
            <label>Cambio</label>
            <p className="pResults">{payBack}</p>
          </div>
        </div>
      </div>
      <div className="paymentColumn">
        <div className="paymentMethods">
          <button className="pLeftButton pButtons" onClick={panelHandler}>
            Tarjeta
          </button>
          <button className="pRightButton pButtons" onClick={panelHandler}>
            Efectivo
          </button>
        </div>
        <div className="pPanel">
          {/* {!showPanel && (
          <button className="button" >
            Edit
          </button>
        )} */}
          {showPanel && (
            <Panel onHidePanel={hidePanel} onModifyQuantity={modifyQuantity} />
          )}
        </div>
        <div className="paymentOptions">
          <button onClick={cancellation} value={false} className="pLeftButton pButtonCancel">
            Cancelar
          </button>
          <button onClick={cancellation} value={true} className="pRightButton pButtonAcept">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
