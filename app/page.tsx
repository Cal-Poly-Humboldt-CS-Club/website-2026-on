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

      {/* About section */}
      <div className={styles.aboutSection}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
          </svg>
          <h2>About</h2>
          <p>
            The Computer Science Club at Cal Poly Humboldt is a vibrant community where students come together to explore technology, collaborate on projects, and share knowledge. Our mission is to foster an inclusive environment that encourages learning, creativity, and innovation. Whether you are a seasoned programmer or just starting out, there is a place for you here to grow, connect, and make lasting memories.
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
      <div className={styles.eventsSection}>
          <h2>Upcoming Events</h2>
          <HomeSearch/>
      </div>
    </>
  );
}
