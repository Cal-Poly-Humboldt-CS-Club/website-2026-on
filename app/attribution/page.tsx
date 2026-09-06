import styles from "./attribution.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AttributionPage() {
  return (
    <div className={styles.bodyContent}>
      <div className={styles.topBackground}>
        <Image
          src="/background4.svg"
          alt="selection of icons"
          width="3517"
          height="573"
          loading="eager"
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden="true" preserveAspectRatio="none">
          <path fillOpacity="1" d="M0,262 Q 720,204 1440,262 L1440,320 L0,320 Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden="true" preserveAspectRatio="none">
          <path fillOpacity="1" d="M0,262 Q 720,204 1440,262 L1440,320 L0,320 Z"></path>
        </svg>
      </div>

      <div className={styles.titleContent}>
        <Image
          src="/logo.png"
          alt="CS Club Humboldt Icon"
          width="300"
          height="300"
        />
      </div>

      <div className={styles.subTitleContent}>
        <p className={styles.pill}>Attributions</p>
        <h1>Important Attributions</h1>
        <p>
          This website is built for Computer Science Club Humboldt. It is maintained by the club and updated as leadership changes each year.
        </p>
      </div>

      <div className={styles.contentSection}>
        <section className={styles.section}>
          <h2>Icons</h2>
          <p>
            Icons used on this website are provided by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icon8</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Organization Statement</h2>
          <p>
            Computer Science Club Humboldt (CS Club Humboldt) is a Registered Student Organization at Cal Poly Humboldt. The Cal Poly Humboldt name is used only to identify the organization's location. It does not imply sponsorship by Cal Poly Humboldt or that the organization is an official agent of the university.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Website Maintenance</h2>
          <p>
            This website is maintained by Andrew and other officers.
          </p>
          <p>
            For direct website questions, email <a href="mailto:andrew@gexample.com">aeg108@humboldt.edu</a>.
          </p>
          <p>
            For general club questions, email <a href="mailto:compsci@humboldt.edu">compsci@humboldt.edu</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Ownership</h2>
          <p>
            Ownership of this website transfers with the club's leadership for the current year.
          </p>
          <p>
            Check the <Link href="/about">About Us</Link> page for current leadership information.
          </p>
        </section>
      </div>
    </div>
  );
}
