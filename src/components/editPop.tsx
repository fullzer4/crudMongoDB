import { PopupContext } from "../context/popup"; 
import { useContext, useState } from "react";
import Data from "../models/dataClass";

const Popup = (): JSX.Element => {
  const { edit, changeEditState } = useContext(PopupContext); // importando a função addItem
  const [code, setCode] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new Data()
    
    const id = localStorage.getItem("id");

    const newItem = {
      codigo: parseInt(code),
      nome: product,
      quantidade: parseInt(quantity),
      value: parseInt(price),
      createDate: new Date().toISOString(),
    };
    
    const position = 0

    data.editData(id, position, newItem)

    setCode("");
    setProduct("");
    setQuantity("");
    setPrice("");
  };

  return (
    <div className={edit}>
      <div className="Popup">
        <div>
          <p>Produto</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="code">Codigo:</label>
            <input
              type="number"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="product">Produto:</label>
            <input
              type="text"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantidade:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Preço:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Editar</button>
            <button onClick={() => changeEditState()}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;