import Styles from "@/scss/Table.module.scss"

const table = ():JSX.Element => {

    return(
        <div className={Styles.cover}>
            <div className={Styles.popup}>
                <table className={Styles.estlytable}> 
                    <tr> 
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Value</th>
                        <th>Create Date</th>
                    </tr>
                </table>  
            </div>
        </div>
    )
}

export default table;