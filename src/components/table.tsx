import { useState } from "react";
import Styles from "@/scss/Table.module.scss";

interface Item {
    codigo: number;
    nome: string;
    quantidade: number;
    value: number;
    createDate: Date;
}
 
export default function Table() {

    const [items, setItems] = useState<Item[]>([
        {
            codigo: 1,
            nome: "Item 1",
            quantidade: 10,
            value: 100,
            createDate: new Date(),
        },
        {
            codigo: 2,
            nome: "Item 2",
            quantidade: 20,
            value: 200,
            createDate: new Date(),
        },
        {
            codigo: 3,
            nome: "Item 3",
            quantidade: 30,
            value: 300,
            createDate: new Date(),
        },
        {
            codigo: 4,
            nome: "Item 4",
            quantidade: 40,
            value: 400,
            createDate: new Date(),
        },
        {
            codigo: 5,
            nome: "Item 5",
            quantidade: 50,
            value: 500,
            createDate: new Date(),
        },
    ]);

    const handleEdit = (index: number) => {

    };

    const handleDelete = (index: number) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
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
                                <button onClick={() => handleEdit(index)}>Editar</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(index)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};