import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Card from "../UI/Card/Card";

import "./Menu.css";

const Menu = (props) => {
  const [taco, setTaco] = useState({ name: "Tacos", quantity: 0 });
  const [bebida, setBebida] = useState({ name: "Bebidas", quantity: 0 });
  const [postre, setPostre] = useState({ name: "Postres", quantity: 0 });

  // const [products,setProducts]=useState([]);

  const logProduct = {
    Tacos: (product) => setTaco(product),
    Bebidas: (product) => setBebida(product),
    Postres: (product) => setPostre(product),
  };

  const UpdateProduct = (product) => {
    logProduct[product.name]?.(product);
    // switch (product.name) {
    //   case "Tacos":
    //     setTaco(product);
    //     break;
    //   case "Bebidas":
    //     setBebida(product);
    //     break;
    //   case "Postres":
    //     setPostre(product);
    //     break;
    //   default:
    //     break;
    // }
  };

  const OrderOK = () => {
    if (taco.quantity != 0 || bebida.quantity != 0 || postre.quantity != 0) {
      props.onOrderIsTaken(true, [taco, bebida, postre]);
    } else {
      alert("invalid order");
    }
    // else if (event.target.value == false) {
    //   setTaco({ name: taco.name, quantity: 0 });
    //   setBebida({ name: bebida.name, quantity: 0 });
    //   setPostre({ name: postre.name, quantity: 0 });
    //   props.onOrderIsTaken(false, [taco, bebida, postre]);
    // }
  };

  const OrderCancel = () => {
    setTaco({ name: taco.name, quantity: 0 });
    setBebida({ name: bebida.name, quantity: 0 });
    setPostre({ name: postre.name, quantity: 0 });
  };

  useEffect(() => {
    const tac = JSON.parse(localStorage.getItem("tacos"));
    const beb = JSON.parse(localStorage.getItem("bebidas"));
    const pos = JSON.parse(localStorage.getItem("postres"));
    if (tac != null && beb != null && pos != null) {
      if (tac.quantity != 0) {
        setTaco({ name: taco.name, quantity: tac.quantity });
      }
      if (beb.quantity != 0) {
        setBebida({ name: bebida.name, quantity: beb.quantity });
      }
      if (pos.quantity != 0) {
        setPostre({ name: postre.name, quantity: pos.quantity });
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tacos", JSON.stringify(taco));
    localStorage.setItem("bebidas", JSON.stringify(bebida));
    localStorage.setItem("postres", JSON.stringify(postre));
  }, [taco, bebida, postre]);

  return (
    <div id="Menu">
      <ul id="MenuProducts">
        <li>
          <Product product={taco} onUpdateProduct={UpdateProduct} />
        </li>
        <li>
          <Product product={bebida} onUpdateProduct={UpdateProduct} />
        </li>
        <li>
          <Product product={postre} onUpdateProduct={UpdateProduct} />
        </li>
      </ul>
      <div id="MenuOptions">
        <button onClick={OrderCancel} className="button">
          Cancel
        </button>
        <button onClick={OrderOK} className="button">
          OK
        </button>
      </div>
    </div>
  );
};

export default Menu;
