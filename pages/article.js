import Link from "next/link";
import { motion } from "framer-motion";
import styles from '../styles/Article.module.css';

export default function Article() {
  return (
    <motion.div className={styles.container} layoutId="image" >

      <motion.div className={styles.btn_close} initial={{ y: -25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} >
        <Link href="/" passHref >
          <div> <i className="fa-solid fa-xmark"></i> </div>
        </Link>
      </motion.div>

      <div className={styles.container__section}>
        <motion.div className={styles.section__title}
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.2, type: 'spring' }}
        ><h1>Lost in Tokyo</h1>  
        </motion.div>

        <div className={styles.section__description}> 
          <motion.div className={styles.section__author}
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2, type: 'spring' }}
          ><p>By Kyle Danny</p>
          </motion.div>
          <div className={styles.section__comments}><p>8 <i className="fa-solid fa-message"></i></p></div>
        </div>            
      </div>
      
    </motion.div>
  );
}
