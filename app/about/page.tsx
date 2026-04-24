import styles from "./page_about.module.css";
import LeadershipCard from "@/components/LeadershipCard";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function AboutPage() {
  return (
    <div className={styles.bodyContent}>
      <div className={styles.titleContent}>
        <h1>About the Club</h1>
        <p>Making a supportive and welcoming comunity for Humboldt CS students, which complements what we get in classes and connects people to industry!</p>
      </div>

      <div className={styles.bento}>
        <Image
          src="/about/group-on-stairs.jpg"
          alt="Large group of students standing on stairs for photo"
          width={500}
          height={300}
          style={{ width: '100%', height: '100%' }}
        />
        <Image
          src="/about/large-meeting.jpg"
          alt="Students sitting at a large club event"
          width={500}
          height={300}
          style={{ width: '100%', height: '100%' }}
        />
        <Image
          src="/about/messing-with-computer.jpg"
          alt="Students and workshop leader looking inside a computer"
          width={500}
          height={300}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className={styles.twoWideContainer}>
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
      </div>

      <section className={styles.titleContent}>
        <h2>Leadership</h2>
        <p>
          Meet the team that keeps the machine going. 
        </p>
      </section>

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


      <div className={styles.twoWideContainer}>
        <section className={styles.section}>
          <h2>Hackathon</h2>
          <p>
            We put on a large, yearly <strong>Hackathon</strong> that brings together students to build projects, learn new skills, and connect with industry mentors. It's a highlight of our club's activities and a great opportunity for students to grow their real world skills and applied creativity.
          </p>
          <Image
            src="/about/large-meeting.jpg"
            alt="Students sitting at a large club event"
            width={500}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
          <Button href="hackathon">
            Learn More
          </Button>
        </section>

        <section className={styles.section}>
          <h2>ICPC</h2>
          <p>
            {/* More details here i guess */}
            The club hosts a micro-site for the <Link href="https://icpc.global/"><strong>ICPC</strong></Link> (International Collegiate Programming Contest). Its a chance to challenge yourself and compete against other schools across California and further.
          </p>
          <Image
            src="/about/icpc-group-photo.jpg"
            alt="Students sitting at a large club event"
            width={500}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
          <Button href="icpc">
            Learn More
          </Button>
        </section>
      </div>

      <section>
        <h2>Contact</h2>
        <p>Email: example@club.com</p>
      </section>
    </div>
  );
}