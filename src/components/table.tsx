import { useState, useEffect, useContext } from "react";
import Styles from "../scss/Table.module.scss";
import { PopupContext } from "../context/popup";
import Data from "../models/dataClass";

type Item = {
  codigo: number;
  nome: string;
  quantidade: number;
  value: number;
  createDate: string;
};

const data = new Data();

export default function Table() {
  const [items, setItems] = useState<Item[]>([]);

  const { changeEditState, setIndex } = useContext(PopupContext);

  useEffect(() => {
    const id = localStorage.getItem("id");
    data.getData(id).then(() => {
      console.log(data.data);
      setItems(data.data);
    });
  }, []);

  const handleDelete = async (index: number) => {
    const id = localStorage.getItem("id");
    console.log(index);
    await data.deleteData(id, index);
    await data.getData(id).then(() => {
      console.log(data.data);
      setItems(data.data);
    });
  };

  const handleEdit = async (position: number) => {
    setIndex(position)
    changeEditState();
    const id = localStorage.getItem("id");
    setItems(data.data);
  };

  return (
    <div className={Styles.cover}>
      <table className={Styles.estlytable}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Value</th>
            <th>Create Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className={Styles.lines}>
          {items.length > 0 && items.map((item, index) => (
            <tr key={item.codigo}>
              <td>{item.codigo}</td>
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
              <td>{item.value}</td>
              <td>{item.createDate.split('T')[0]}</td>
              <td>
                <button
                  className={Styles.bt}
                  onClick={() => handleEdit(index)}
                >
                  Editar
                </button>
              </td>
              <td>
                <button
                  className={Styles.bt}
                  onClick={() => handleDelete(index)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};