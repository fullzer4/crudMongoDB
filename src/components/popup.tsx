import Styles from "@/scss/Popup.module.scss"

const popup = ():JSX.Element => {

    const adicionar = () => {

    }

    return(
        <div className={Styles.cover}>
            <button onClick={() => adicionar()}> add </button>
        </div>
    )
}

export default popup;