import React from 'react';
import Link from 'next/link';
import style from './Tag.module.css';

interface TagProps {
    label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
    const linkBase = '/events?search=""&tag=';
    const link = linkBase + label;

    return (
        <Link href={link} className={style.tag}>
            {label}
        </Link>
    );
};

export default Tag;