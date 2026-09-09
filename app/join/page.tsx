import styles from "./page_join.module.css";
import Button from "@/components/Button";
import Image from "next/image";

export default function JoinPage() {
  return (
    <div className={styles.bodyContent}>
      <div className={styles.topBackground}>
        <Image
          src="/background3.svg"
          alt="selection of icons"
          width="3517"
          height="750"
          loading="eager"
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden="true" preserveAspectRatio="none">
          <path fillOpacity="1" d="M0,262 Q 720,204 1440,262 L1440,320 L0,320 Z"></path>
        </svg>
      </div>

      <div className={styles.titleContent}>
        <h1>Join the Club!</h1>
        <p>Meet, learn, and build with a welcoming community of students who love technology.</p>
      </div>

      <div className={styles.twoWideContainer}>
        <section className={styles.section}>
          <h2>Who can join?</h2>
          <p>
            We welcome all Cal Poly Humboldt students, regardless of major or experience level.
            Whether you're new to Computer Science, already have a career in CS, or just curious there is a place for you here.
          </p>
          <p>
            Not a student at Cal Poly Humboldt? You are still welcome to join meetings and discussions regardless!
          </p>
        </section>

        <section className={styles.section}>
          <h2>When &amp; Where We Meet</h2>
          <p>
            We typically meet every two weeks on Mondays from <b>5-6:30pm</b> in <b>BSS 313</b> (Fall 2026).
          </p>
          <ul>
            <li>September 4th, 2026, 5-6:30pm in BSS 313</li>
            <li>September 21th, 2026, 5-6:30pm in BSS 313</li>
            <li>October 5nd, 2026, 5-6:30pm in BSS 313</li>
            <li>October 19th, 2026, 5-6:30pm in BSS 313</li>
            <li>November 2nd, 2026, 5-6:30pm in BSS 313</li>
            <li>November 16th, 2026, 5-6:30pm in BSS 313</li>
            <li>November 30th, 2026, 5-6:30pm in BSS 313</li>
          </ul>

          <p>
            In the spring semester, we will continue our bi-weekly meetings on campus. 
          </p>
        </section>
      </div>

      <div className={styles.lowerSectionWrap}>
        <section className={styles.lowerFeatureCard}>
          <div className={styles.cardLabel}>Get involved</div>
          <h2>How to Get Involved</h2>
          <ul>
            <li>Attend meetings</li>
            <li>Join our Discord community</li>
            <li>Participate in projects and events</li>
          </ul>
        </section>

        <section className={styles.lowerFeatureCardAccent}>
          <div className={styles.cardLabel}>Community</div>
          <h2>Discord</h2>
          <p>
            Join our Discord to stay updated, ask questions, and connect with other members.
          </p>

          <Button className={styles.discordButton} href="/discord">
            Join Discord
          </Button>
        </section>
      </div>
    </div>
  );
}