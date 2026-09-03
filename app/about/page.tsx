import styles from "./page_about.module.css";
import LeadershipCard from "@/components/LeadershipCard";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function AboutPage() {
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
            We aim to build a welcoming and collaborative community where students can explore technology, learn new skills, and grow together. Through workshops, projects, competitions, social events, and connections with professionals, we create opportunities for students to learn beyond the classroom and discover where their interests can take them.
          </p>
          <p>
            The club is open to students of all backgrounds and majors. Whether you're an experienced programmer or just curious about technology, our goal is to provide a place to meet others, build things together, and use technology to make a positive impact on campus and in the wider Humboldt community.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Club History</h2>
          <p>
            Founded at Cal Poly Humboldt, the Computer Science Club has grown into a community of students brought together by a shared interest in technology, creativity, and problem-solving.
          </p>
          <p>
            Over the years, the club has expanded beyond regular meetings to host technical workshops, programming competitions, career and industry events, collaborative projects, and social activities. The club also helps organize the Hackathon for Social Good, where students from different disciplines work together to build technology for local nonprofit organizations.
          </p>
          <p>
            As the club continues to grow, its focus remains the same: creating opportunities for students to connect, learn from one another, take on new challenges, and turn their ideas into something meaningful.
          </p>
        </section>
      </div>

      <section className={styles.centeredTitle}>
        <h2>Leadership</h2>
        <p>
          Meet the team that keeps the machine going!
        </p>
      </section>

      <div className={styles.leadershipGrid}>
          <LeadershipCard
            name="Enrique Lopez"
            role="President"
            image="/headshots/example1.jpg"
            email="el259@humboldt.edu"
          />
          <LeadershipCard
            name="Nate Weinstein"
            role="Treasurer"
            image="/headshots/example1.jpg"
            email="nw120@humboldt.edu"
          />
          <LeadershipCard
            name="Skyler Hunsinger"
            role="Vice President"
            image="/headshots/example2.jpg"
            email="sh2824@humboldt.edu"
          />
          <LeadershipCard
            name="Tyler James"
            role="Vice President"
            image="/headshots/example3.jpg"
            email="tmj32@humboldt.edu"
          />
          <LeadershipCard
            name="Andrew Gallimore"
            role="Website Manager"
            image="/headshots/example4.jpg"
            email="aeg108@humboldt.edu"
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