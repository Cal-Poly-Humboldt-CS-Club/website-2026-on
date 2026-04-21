// FOOTER.TSX
// ENRIQUE LOPEZ
// LAST MOD: 4/20/26
import React from "react";
import styles from "./Footer.module.css";
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h3>Cal Poly Humboldt Computer Science Club</h3>

        <div className={styles.links}>
            <Link href="/join">Join</Link>
            <Link href="/events">Events</Link>
            <Link href="/about">About Us</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;