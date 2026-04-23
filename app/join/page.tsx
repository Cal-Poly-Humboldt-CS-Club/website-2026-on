import styles from "./page_join.module.css";
import Button from "@/components/Button";

export default function JoinPage() {
  return (
    <div className={styles.page}>
      <h1>Join the Club!</h1>

      <section className={styles.section}>
        <h2>Who can join?</h2>
        <p>
          We welcome all Cal Poly Humboldt students, regardless of major or experience level.
          Whether you're new to Computer Science, already have a career in CS, or just curious there is a place for you here.
        </p>
        <br />
        <p>
          Not a student at Cal Poly Humboldt? You are still welcome to join meetings and discussions regardless!
        </p>
      </section>

      <section className={styles.section}>
        <h2>When & Where We Meet</h2>
        <p>
          We typically meet every two weeks on campus in FILL-FILL-FILL. 
        </p>
      </section>

      <section className={styles.section}>
        <h2>How to Get Involved</h2>
        <ul>
          <li>Attend meetings</li>
          <li>Join our Discord community</li>
          <li>Participate in projects and events</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Discord</h2>
        <p>
          Join our Discord to stay updated, ask questions, and connect with other members.
        </p>

        <Button className={styles.discordButton} href="https://discord.gg/9PCcUwe6">
          Join Discord
        </Button>
      </section>
    </div>
  );
}