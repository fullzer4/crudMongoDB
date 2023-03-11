import { PopupContext } from "@/context/popup";
import { useContext } from "react"


const Popup = (): JSX.Element => {
    
    const {changePopState, cover} = useContext(PopupContext)

    return (
      <div className={cover}>
        <div className="Popup">
            <button onClick={() => changePopState()}>cancelar</button>
        </div>
      </div>
    );
  };
  
  export default Popup;