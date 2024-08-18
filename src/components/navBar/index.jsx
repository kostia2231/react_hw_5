import { ReactComponent as MainLogo } from "../assets/mainLogo/spotifyLogo.svg";
import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <>
      <MainLogo className={styles.navBar} />
    </>
  );
}
