import { useState, useEffect, useContext } from "react";
import Styles from "@/scss/Table.module.scss";
import { PopupContext } from "@/context/popup";

type Item = {
  codigo: number;
  nome: string;
  quantidade: number;
  value: number;
  createDate: Date; 
};

export default function Table() {
  const [items, setItems] = useState<Item[]>([]);

  const { data, deleteItem } = useContext(PopupContext);

  useEffect(() => {
    const parsedData = data.map((item: any) => ({
      ...item,
      createDate: new Date(item.createDate),
    }));
    setItems(parsedData);
  }, [data]);

  const handleEdit = (index: number) => {
    
  };

  const handleDelete = (index: number) => {
    deleteItem(index);
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
          {items.map((item, index) => (
            <tr key={item.codigo}>
              <td>{item.codigo}</td>
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
              <td>{item.value}</td>
              <td>{item.createDate.toLocaleDateString()}</td>
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