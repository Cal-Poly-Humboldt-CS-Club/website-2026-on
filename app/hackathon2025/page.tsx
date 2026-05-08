import styles from "./page_hackathon2025.module.css";
import Image from "next/image";
import Button from "@/components/Button";

export default function AboutPage() {
  return (
    <div className={styles.hackathonPage}>
      <div className={`w3-row-padding ${styles.hackathonContent}`} id="postbody">
        <div className={`${styles.hackBanner} ${styles.fullWidth}`}>
          <img src="hackathon2025/banner.png" alt="Hackathon For Social Good 2025" />
        </div>

        <div className={`${styles.fullWidth} ${styles.hackSignups}`}>
          <h1>Thank you to all who participated</h1>
          <Button href="https://hackathonforgood2025.devpost.com/">
            See all the projects on Devpost
            <i style={{ marginLeft: 5 }} className="ri-external-link-fill"></i>
          </Button>

          <div className={styles.imageGrid}>
            <img className={styles.mainImage} src="hackathon2025/hack25_1.jpg" alt="Hackathon 2025" />
            <img src="hackathon2025/hack25_2.jpg" alt="Hackathon 2025" />
            <img src="hackathon2025/hack25_3.jpg" alt="Hackathon 2025" />
            <img src="hackathon2025/hack25_4.jpg" alt="Hackathon 2025" />
            <img src="hackathon2025/hack25_5.jpg" alt="Hackathon 2025" />
          </div>
        </div>

        <div className={`${styles.hackCard} ${styles.flex} ${styles.fullWidth}`}>
          <div className={styles.leftCustom}></div>
          <div>
            <h1>About the Hackathon</h1>
            <hr />
            <p>
              This year's competition presents a unique opportunity for students across all academic disciplines to collaborate on real-world tech challenges submitted by <b>local nonprofit organizations</b>. Every project completed will directly support the local <b>Humboldt community</b>, making this a chance to apply your skills for a meaningful cause.
            </p>
          </div>
        </div>


        <div className={`${styles.hackCardGrid} ${styles.fullWidth}`}>
          <div className={`${styles.hackCard} ${styles.hackHalf}`}>
            <h1>Event Details</h1>
            <hr />
            <p>Total design and programming time: 22 hours spread across two days, with a kickoff event before hand...</p>
            <ul>
              <li><p><b>Kickoff Event:</b> Thursday, March 6th from 6:00 PM - 7:30 PM in BSS 166 (required for participants) </p></li>
              <li><p><b>Competition begins:</b> Saturday, March 8th from 8:00 AM - 10:00 PM and continues on Sunday, March 9th from 8:00 AM - 7:00 PM in Harry Griffith Hall. </p></li>
            </ul>
          </div>
          <div className={`${styles.hackCard} ${styles.hackHalf}`}>
            <h1>Team Details</h1>
            <hr />
            <p>Whether you're a programmer, artist, entrepreneur, or someone else eager to contribute your talents, you'll have the ability to apply your skills for a meaningful cause.</p>
            <ul>
              <li><p><b>Team Size:</b> 2 to 5 people, all majors welcome.</p></li>
              <li><p><b>Team Composition:</b> We require at least one student with programming experience on a team.</p></li>
              <li><p><b>No team? No problem:</b> we'll help you find one!</p></li>
            </ul>
          </div>
        </div>

        <div className={`${styles.fullWidth} ${styles.hackSponsors}`}>
          <h1>Thank you to our Sponsors!</h1>
          <ul>
            <li>
              <Image
                src="/hackathon2025/sponsors/coastcenteral.png"
                alt="Coast Central Credit Union"
                width={555}
                height={125}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </li>
            <li>
              <Image
                src="/hackathon2025/sponsors/jackpot.png"
                alt="Cal Poly Humboldt Office of Student Life & Jackpot!"
                width={1200}
                height={300}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </li>
            <li>
              <Image
                src="/hackathon2025/sponsors/library.png"
                alt="Cal Poly Humboldt Library"
                width={975}
                height={338}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </li>
            <li>
              <Image
                src="/hackathon2025/sponsors/coastfinancial.png"
                alt="Coastline Financial Services"
                width={960}
                height={300}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </li>
            <li>
              <Image
                src="/hackathon2025/sponsors/krisp.png"
                alt="Krisp"
                width={394}
                height={197}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </li>
            <li>
              <Image
                src="/hackathon2025/sponsors/green.png"
                alt="Bright and Green Humboldt"
                width={1366}
                height={499}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </li>
            <li>
              <Image
                src="/hackathon2025/sponsors/rotary.png"
                alt="Rotary Club of Arcata Sunrise"
                width={2297}
                height={606}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </li>
            <li>
              <p>Cyril Oberlander</p>
            </li>
            <li>
              <p>Warner Tillman</p>
            </li>
            <li>
              <p>John Wegis</p>
            </li>
            <li>
              <p>Joyce West</p>
            </li>
          </ul>
        </div>

        <div className={`${styles.hackCard} ${styles.flex} ${styles.fullWidth} ${styles.hackPeople}`}>
          <div className={styles.leftCustom}></div>
          <div>
            <h1>Judges</h1>
            <hr />
            <p>Meet the judges who will be evaluating the projects and awarding prizes!</p>

            <ul>
              <li>
                <div className={styles.profile}>
                  <img src="/hackathon2025/mentors/Sharon Tuttle.jpg" alt="Judge 1" />
                </div>
                <div>
                  <h2>Sharon Tuttle</h2>
                  <h3>Cal Poly Humboldt</h3>
                  <p>Sharon is a long-time Computer Science professor at Cal Poly Humboldt, and feels that computer science has a great potential to be a source of social good. She is delighted that the CS Club's Hackathon is focusing on this potential.</p>
                </div>
              </li>
              <li>
                <div className={styles.profile}>
                  <img src="/hackathon2025/mentors/Casey Hefner.jpg" alt="Judge 1" />
                </div>
                <div>
                  <h2>Casey Hefner</h2>
                  <h3>Cal Poly Humboldt - ITS</h3>
                  <p>Casey has worked in technology for over a decade, most recently serving as a Sysadmin on campus. In addition to his tech career, Casey is dedicated to community service, volunteering with Planned Parenthood and distributing harm reduction supplies.</p>
                </div>
              </li>
              <li>
                <div className={styles.profile}>
                  <img src="/hackathon2025/mentors/Robert S.jpg" alt="Judge 1" />
                </div>
                <div>
                  <h2>Bob Schoenfield</h2>
                  <h3>Krisp Technologies, Inc.</h3>
                  <p>Bob is an early-stage technology professional, serving as the founding COO and current EVP at Krisp, a leading Voice AI company. His work focuses on driving innovation and growth in the AI and technology space.</p>
                </div>
              </li>
              <li className={styles.none}>
                <div className={`${styles.profile} ${styles.none}`}></div>
                <div>
                  <h2>David Tuttle</h2>
                  <h3>Cal Poly Humboldt</h3>
                </div>
              </li>
              <li className={styles.none}>
                <div className={`${styles.profile} ${styles.none}`}></div>
                <div>
                  <h2>Ben Kovitz</h2>
                  <h3>Cal Poly Humboldt</h3>
                </div>
              </li>
              <li className={styles.none}>
                <div className={`${styles.profile} ${styles.none}`}></div>
                <div>
                  <h2>Shannon Whitmore</h2>
                  <h3>Illumina</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.hackCard} ${styles.flex} ${styles.fullWidth} ${styles.hackPeople}`}>
          <div className={styles.leftCustom}></div>
          <div>
            <h1>Mentors</h1>
            <hr />
            <p>Meet the mentors who will be available to help contestants with their projects!</p>

            <ul>
              <li>
                <div className={styles.profile}>
                  <img src="/hackathon2025/mentors/Edwin Espinoza.jpg" alt="Edwin Espinoza" />
                </div>
                <div>
                  <h2>Edwin Espinoza</h2>
                  <h3>Cal Poly Humboldt</h3>
                  <p>Edwin has experience in developing cloud software and approaches programming with a positive and open mindset. He is passionate about leveraging technology for social good, recognizing that social good is something that is often neglected in the technology space.</p>
                </div>
              </li>
              <li>
                <div className={styles.profile}>
                  <img src="/hackathon2025/mentors/Siri Varma Vegiraju.jpg" alt="Siri Varma Vegiraju" />
                </div>
                <div>
                  <h2>Siri Varma Vegiraju</h2>
                  <h3>Microsoft</h3>
                  <p>Siri Varma Vegiraju is a seasoned expert in healthcare, cloud computing, and security. Currently, he focuses on securing Azure Cloud workloads, leveraging his extensive experience in distributed systems and real-time streaming solutions. Prior to his current role, Siri contributed significantly to cloud observability platforms and multi-cloud environments. He has demonstrated his expertise through notable achievements in various competitive events and as a judge and technical reviewer for leading publications. Siri frequently speaks at industry conferences on topics related to Cloud and Security and holds a Masters Degree from University of Texas, Arlington with a specialization in Computer Science.</p>
                </div>
              </li>
              <li>
                <div className={styles.profile}>
                  <img src="/hackathon2025/mentors/Tara Strickwerda.jpg" alt="Tara Strickwerda" />
                </div>
                <div>
                  <h2>Tara Strickwerda</h2>
                  <h3>StreamGuys</h3>
                  <p>A customer success leader with over 25 years of experience delivering simple to complex solutions across multiple industries, many of them Humboldt-based. A problem solver by nature and by education, Tara earned a Bachelor's degree in Mathematics at Humboldt State University (now Cal Poly Humboldt); translating her equation solving skills to solve real world problems faced by clients and organizations.</p>
                </div>
              </li>
              <li>
                <div className={styles.profile}>
                  <img src="/hackathon2025/mentors/Anthony Cavuoti.jpg" alt="Anthony Cavuoti" />
                </div>
                <div>
                  <h2>Anthony Cavuoti</h2>
                  <h3>Remnant Entertainment LLC</h3>
                  <p>A recent Cal Poly Humboldt alumnus, Anthony is a creative game and web developer, driven by innovation, problem-solving, and a passion for crafting meaningful digital experiences.</p>
                </div>
              </li>
              <li className={styles.none}>
                <div className={`${styles.profile} ${styles.none}`}></div>
                <div>
                  <h2>John Wegis</h2>
                  <h3>GenomeMedical and Cal Poly Humboldt</h3>
                  <p>John is a Principal Software Engineer at GenomeMedical with over 25 years of experience in full-stack development, backend engineering, and software architecture. His expertise includes Python, Flask, FastAPI, distributed systems, and cloud technologies. In addition to his industry work, John teaches CS 357 - Software Project Management at Cal Poly Humboldt, where he mentors students in software engineering best practices, Agile methodologies, and real-world project execution. He's passionate about innovation and education, and enjoys guiding teams through technical challenges to build scalable, impactful solutions.</p>
                </div>
              </li>
              <li className={styles.none}>
                <div className={`${styles.profile} ${styles.none}`}></div>
                <div>
                  <h2>Todd Chittenden</h2>
                  <h3>Five9</h3>
                  <p>Todd has been in the telecommunications industry for 29 years, starting as a technician and has worked his way to become an architect. His journey reflects both his broad experience and his sense of humor.</p>
                </div>
              </li>
              <li className={styles.none}>
                <div className={`${styles.profile} ${styles.none}`}></div>
                <div>
                  <h2>Clay McGlaughlin</h2>
                  <h3>College of the Redwoods / Humboldt County Office of Education</h3>
                  <p>Clay has been working in the IT field for over 20 years, starting as a user support analyst at a university and working his way up to director of IT for a Humboldt nonprofit. He currently teaches Computer Information Systems classes at College of the Redwoods as well as intro to computer programming for HCOE.</p>
                </div>
              </li>
              <li className={styles.none}>
                <div className={`${styles.profile} ${styles.none}`}></div>
                <div>
                  <h2>Sean Haas</h2>
                  <h3>Libsyn, Inc.</h3>
                </div>
              </li>
              <li className={styles.none}>
                <div className={`${styles.profile} ${styles.none}`}></div>
                <div>
                  <h2>Michael Crispin</h2>
                  <h3>Cal Poly Humboldt</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.spacer}></div>

        <div className={`${styles.fullWidth} ${styles.hackSignups}`}>
          <h1>Stay tuned for next year!</h1>
        </div>

        <div className={styles.spacer}></div>
        <div className={styles.spacer}></div>
      </div>
    </div>
  );
}
