import styles from "../styles/app.module.scss";
import {Rocket} from '../assets/imgs/index'
const Success = () => {
    return ( 
        <div className={styles["container"]}>
        <div className={styles["image-container"]}>
          <img src={Rocket} alt="3d picture of a boy" className={styles["image"]}/>
        </div>
        <div className={styles["request"]}>Thanks For Joining</div>
        <p className={styles["secondary-text"]}>An email will be sent to you via the email address</p>
        </div>
        );
}
 
export default Success;