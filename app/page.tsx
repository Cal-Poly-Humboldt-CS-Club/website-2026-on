import styles from "./page.module.css";


// Components
import Button from "../components/Button";
import Carousel from "../components/Carousel"
import FanCarousel from "../components/FanCarousel"
import HomeSearch from "@/components/HomeSearch";

export default function Home() {
  return (
    <>
      {/* Landing content */}
      <div className={styles.landingWrapper}>
        <div className={styles.landingSection}>
          <div className={styles.landingBody}>
            <h1>Computer Science Club Humboldt</h1>
            <p>Making a welcoming community of fun and support, while supercharging our education at Cal Poly Humboldt!</p>
            <Button>
              Join the Club
            </Button>
          </div>
          <Carousel
            classname={styles.carousel}
            images={[
              { src: "/Merch.png", alt: "todo" },
              { src: "/logo2.png", alt: "todo" },
              { src: "/logo3.png", alt: "todo" },
            ]}
          />
        </div>
      </div>
      
      {/* About section */}
      <div className={styles.aboutSection}>
          <h2>About</h2>
          <p>
            The Computer Science Club at Cal Poly Humboldt is a vibrant community where students come together to explore technology, collaborate on projects, and share knowledge. Our mission is to foster an inclusive environment that encourages learning, creativity, and innovation. Whether you're a seasoned programmer or just starting out, there's a place for you here to grow, connect, and make lasting memories.
          </p>
          <FanCarousel images={[
            { src: "/logo.png", alt: "todo" },
            { src: "/logo2.png", alt: "todo" },
            { src: "/logo3.png", alt: "todo" },
            { src: "/logo.png", alt: "todo" },
            { src: "/logo2.png", alt: "todo" },
            { src: "/logo3.png", alt: "todo" },
            { src: "/logo.png", alt: "todo" },
            { src: "/logo2.png", alt: "todo" },
            { src: "/logo3.png", alt: "todo" },
          ]}/>
      </div>

      {/* Events section */}
      <div className={styles.eventsWrapper}>
        <div className={styles.eventsSection}>
            <h2>Upcoming Events</h2>
            <HomeSearch/>
        </div>
      </div>
    </>
  );
}
