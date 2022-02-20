import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/Home.module.css';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <div><strong>Shared</strong> <span className={styles.infoBox1_description}>by you</span></div>

      <motion.figure layoutId="image" className={styles.container__image}>
        <Image className={styles.container__image_small} src="/assets/sophie-keen.jpg" width={300} height={300} alt="tokyo" />
      </motion.figure>
      
      <div className={styles.container__section}>
        <h1 className={styles.section__title}>Lost in Tokyo</h1>
        <p className={styles.section__description}>Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      </div>

      <motion.div className={styles.btn_open} initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} >
        <Link href="/article" passHref>
          <div><i className="fa-solid fa-expand"></i></div>
        </Link>
      </motion.div>      
    </div>
  )
}
