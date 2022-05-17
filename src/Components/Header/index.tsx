import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/images/tekizon-logo.svg";
import { ActiveLink } from "../ActiveLink";

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <ActiveLink href="/" activeClassName={styles.active}>
                    <a>
                        <Image
                            quality={100}
                            width={143}
                            height={70} 
                            src={logo} 
                            alt="Logotipo do Sujeito Programador"/>
                    </a>
                </ActiveLink>
               
                <nav>
                    <ActiveLink href="/" activeClassName={styles.active}>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink href="/posts" activeClassName={styles.active}>
                        <a>Posts</a>
                    </ActiveLink>
                    <ActiveLink href="/sobre" activeClassName={styles.active}>
                        <a>Sobre</a>
                    </ActiveLink>
                </nav>
                <a className={styles.readyButton} type="button" href="https://www.google.com">COMEÇAR</a>
            </div>
        </header>
    )
}

