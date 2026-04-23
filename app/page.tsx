import styles from "./page.module.css";
import Image from "next/image";

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
        <div className={styles.landingBackground}>
          <Image
            src="/background2.svg"
            alt="slection of icons"
            width="2273"
            height="819"
            loading="eager"
          />
        </div>
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

      {/* Decorative SVG divider */}
      <svg
        className={styles.aboutSVG}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          d="M0,120 H1200 V0 H0 Z M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className={styles.shapeFill}
        />
      </svg>

      {/* About content */}
      <div className={styles.aboutSection}>
        <h2>About</h2>

        <p>
          The Computer Science Club at Cal Poly Humboldt is a vibrant community
          where students come together to explore technology, collaborate on
          projects, and share knowledge. Our mission is to foster an inclusive
          environment that encourages learning, creativity, and innovation.
          Whether you are a seasoned programmer or just starting out, there is a
          place for you here to grow, connect, and make lasting memories.
        </p>

        <FanCarousel
          images={[
            { src: "/homepage/1.jpg", alt: "club photo 1" },
            { src: "/homepage/2.jpg", alt: "club photo 2" },
            { src: "/homepage/3.jpg", alt: "club photo 3" },
            { src: "/homepage/4.jpg", alt: "club photo 4" },
            { src: "/homepage/5.jpg", alt: "club photo 5" },
            { src: "/homepage/6.jpg", alt: "club photo 6" },
            { src: "/homepage/7.jpg", alt: "club photo 7" },
            { src: "/homepage/8.jpg", alt: "club photo 8" },
            { src: "/homepage/9.jpg", alt: "club photo 9" },
          ]}
        />
      </div>

      {/* Events section */}
      <div className={styles.eventsSection}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden="true" preserveAspectRatio="none">
            <path fillOpacity="1" d="M0,262 Q 720,204 1440,262 L1440,320 L0,320 Z"></path>
          </svg>
          <h2>Upcoming Events</h2>
          <HomeSearch/>
      </div>
    </>
  );
}
