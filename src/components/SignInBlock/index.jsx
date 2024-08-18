import { ReactComponent as AppleLogo } from "../assets/logos/appleLogo.svg";
import { ReactComponent as GmailLogo } from "../assets/logos/gmailLogo.svg";
import { ReactComponent as TwitterLogo } from "../assets/logos/twitterLogo.svg";
import styles from "./SignInBlock.module.css";

export default function SignInBlock() {
  return (
    <>
      <div className={styles.signInWith}>
        <h3>Sign in</h3>
        <h3>with</h3>
      </div>
      <div className={styles.signInBlockWrapper}>
        <AppleLogo className={styles.logo} />
        <GmailLogo className={styles.logo} />
        <TwitterLogo className={styles.logo} />
      </div>
    </>
  );
}
