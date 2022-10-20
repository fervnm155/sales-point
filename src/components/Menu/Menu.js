import React from "react";
import Product from "../Product/Product";
import Card from "../UI/Card/Card";

import "./Menu.css";

const Menu = (props) => {
  const Taco = { name: "Taco", quantity: 0 };
  const Bebida = { name: "Bebida", quantity: 0 };
  const Postre = { name: "Postre", quantity: 0 };

  return (
    <div id="Menu">
      <ul id="MenuProducts">
        <li>
          <Product product={Taco} />
        </li>
        <li>
          <Product product={Bebida} />
        </li>
        <li>
          <Product product={Postre} />
        </li>
      </ul>
      <div id="MenuOptions">
        <button className="button">Cancel</button>
        <button className="button">OK</button>
      </div>
    </div>
  );
};

export default Menu;
