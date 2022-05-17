import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.scss";

export function WhatsappButton(props){

    return(
        <div className={styles.container}>
            <a href={`https://api.whatsapp.com/send?phone=55${props.link}`}>
                <button type="button">
                    <FaWhatsapp  size={30} color="#fff" />
                </button>
            </a>
        </div>
    )
}