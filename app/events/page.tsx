'use client';

import SearchSection from '@/components/SearchSection';
import styles from "./page_events.module.css";

const Page = () => {
    return (
        <>
            <div className={styles.title}>
                <h1>Events</h1>
                <p>We do regular events such as skill workshops, talks from industry leaders, hackathons, movie nights, and so much more!</p>
            </div>
            
            <div className={styles.searchSection}>
                <SearchSection showFindMoreButton={false} numberOfResults={8}/>
            </div>
        </>
    );
};

export default Page;