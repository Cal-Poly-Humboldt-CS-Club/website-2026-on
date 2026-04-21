import styles from "./page.module.css";
import Image from "next/image";

// Components
import Button from "../components/Button";
import Carousel from "../components/Carousel"
import FanCarousel from "../components/FanCarousel"
import HomeSearch from "@/components/HomeSearch";
import AboutSection from "@/components/AboutSection";

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

      <AboutSection />

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
