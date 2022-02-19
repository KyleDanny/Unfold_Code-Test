import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import StyledLink from "../components/StyledLink";
import styles from '../styles/Home.module.css';

export default function Features() {
  return (
    <motion.div className={styles.container2} layoutId="image" >
      

      <motion.div className={styles.btn} initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} >
        <Link href="/" passHref >
          <StyledLink> <i className="fa-solid fa-xmark"></i> </StyledLink>
        </Link>
      </motion.div>

      <div className={styles.infoBox2}>

        <motion.div className={styles.infoBox2_title}
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.2, type: 'spring' }}
        ><h1>Lost in Tokyo</h1>  
        </motion.div>

        <div className={styles.infoBox2_description}> 
          <motion.div className={styles.infoBox2_author}
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2, type: 'spring' }}
          ><p>By Kyle Danny</p>
          </motion.div>
          <div className={styles.infoBox2_comments}><p>8 <i className="fa-solid fa-message"></i></p></div>
        </div>            
      </div>

    </motion.div>
  );
}
