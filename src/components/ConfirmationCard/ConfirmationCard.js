import "./ConfirmationCard.css";
const ConfirmationCard = (props) => {
  //static product prices
  const tacoPrice = 10;
  const bebidaPrice = 17;
  const postrePrice = 30;

  let subTac = 0,
    subBeb = 0,
    subPos = 0;
  let total = 0;

  const getSubTotal = (product) => {
    switch (product.name) {
      case "Tacos":
        subTac = +product.quantity * tacoPrice;
        return subTac;
      case "Bebidas":
        subBeb = +product.quantity * bebidaPrice;
        return subBeb;
      case "Postres":
        subPos = +product.quantity * postrePrice;
        return subPos;
      default:
        break;
    }
  };

  const getTotal = (productList) => {
    productList.forEach((element) => {
      total = total + +getSubTotal(element);
    });
    return +total;
  };

  const confirmation = (event) => {
    props.onConfirmedOrder(event.target.value, [subTac, subBeb, subPos, total]);
  };

  return (
    <div id="confirmationCard">
      <h1 className="h1">Confirmacion</h1>
      <div className="confirmationList">
        <div className="confirmationHeaders">
          <label className="label pName">Producto</label>
          <label className="label pQuantity">Cantidad</label>
          <label className="label pSubtotal">Subtotal</label>
        </div>
        {props.productList.map((product) => (
          <div key={product.name} className="listItem">
            <label className="label pName">{product.name}</label>
            <label className="label pQuantity">{product.quantity}</label>
            <label className="label pSubtotal">${getSubTotal(product)}</label>
          </div>
        ))}
      </div>
      <div className="total">Total: ${getTotal(props.productList)}</div>
      <div className="confirmationOtions">
        <button onClick={confirmation} value={false} className="cButtonCancel">
          Cancelar
        </button>
        <button onClick={confirmation} value={true} className="cButtonAcept">
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default ConfirmationCard;
