import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/Home.module.css';
import { motion } from "framer-motion";
import StyledLink from "../components/StyledLink";

export default function Home() {
  return (
    <div className={styles.container}>
      <div><strong>Shared</strong> <span className={styles.infoBox1_description}>by you</span></div>

      <div>
        <motion.figure layoutId="image" className={styles.image1_box}>
          <Image className={styles.image1} src="/assets/sophie-keen.jpg" width={300} height={300} alt="meaningfulText" />
        </motion.figure>
      </div>
      
      <div className={styles.infoBox1}>
        <div className={styles.infoBox1_title}><h1>Lost in Tokyo</h1></div>
        <div className={styles.infoBox1_description}><p>Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p></div>
      </div>

      <motion.div className={styles.buttonEnlarge} initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} >
        <Link href="/features" passHref>
          <StyledLink> <i className="fa-solid fa-expand"></i> </StyledLink>
        </Link>
      </motion.div>
      
      
    </div>
  )
}
