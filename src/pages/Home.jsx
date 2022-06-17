import React from "react";
import styles from "../styles/app.module.scss";
import {Aboy} from '../assets/imgs/index'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const[title,setTitle] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsPending(true);
      navigate('/Success')
      }
  
    return ( 
        <div className={styles["container"]}>
        <div className={styles["heading"]}>Bukarida</div>
        <div className={styles["image-container"]}>
          <img src={Aboy} alt="3d picture of a boy" className={styles["image"]}/>
        </div>
        <div className={styles["request"]}>join our waitlist</div>
        <p className={styles["secondary-text"]}>connect with amazing people, make money while doing that!</p>
        {!isOpen && 
        <div className={styles["button-container"]}>
          <button onClick={handleClick} className={styles["button"]}>Continue</button>
        </div>
  }
        {isOpen && 
          <div className={styles["button-container"]}>
              <input
               type="email"
               required 
               value={title}
               placeholder="Enter your email address"
               className={styles["email"]}
               onChange= {(e) => setTitle(e.target.value)}
               />
              <button type="submit" className={styles["button-summit"]} onClick={handleSubmit}>summit</button>
              { isPending && <div>loading...</div>}
  
        </div>
        }
      </div>
     );
}
 
export default Home;