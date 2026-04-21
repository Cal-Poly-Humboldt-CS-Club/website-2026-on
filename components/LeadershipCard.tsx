import Image from "next/image";
import styles from "./LeadershipCard.module.css";

type LeadershipCardProps = {
  name: string;
  role: string;
  image: string;
  email?: string;
};

export default function LeadershipCard({
  name,
  role,
  image,
  email,
}: LeadershipCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={`${name} photo`}
          width={150}
          height={150}
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{role}</p>

        {email && (
          <a href={`mailto:${email}`} className={styles.email}>
            {email}
          </a>
        )}
      </div>
    </div>
  );
}