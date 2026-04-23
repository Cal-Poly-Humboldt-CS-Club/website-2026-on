import styles from "./page_about.module.css";
import LeadershipCard from "@/components/LeadershipCard";

export default function AboutPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>About the Club</h1>

      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          We aim to build a welcoming community where students explore
          technology, collaborate on projects, and grow together.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Club History</h2>
        <p>
          {/* More details here i guess */}
          Founded at Cal Poly Humboldt, our club has grown into...
        </p>
      </section>

      <section className={styles.section}>
        <h2>Leadership</h2>
        <p>
          Meet the team that keeps the machine going. 
        </p>

        <div className={styles.leadershipGrid}>

            <LeadershipCard
              name="John Doe"
              role="President"
              image="/headshots/john.jpg"
              email="jon@humboldt.edu"
            />

            <LeadershipCard
              name="Jake Statefarm"
              role="Vice President"
              image="/headshots/jake.jpg"
              email="jak@humboldt.edu"
            />

            <LeadershipCard
              name="Adam Madam"
              role="Vice President"
              image="/headshots/adam.jpg"
              email="dam@humboldt.edu"
            />

            <LeadershipCard
              name="Jorge"
              role="Secretary"
              image="/headshots/jorge.jpg"
              email="jog@humboldt.edu"
            />

        </div>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: example@club.com</p>
      </section>
    </div>
  );
}