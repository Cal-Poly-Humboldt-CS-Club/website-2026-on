import React from 'react';
import Link from 'next/link';
import style from './Tag.module.css';

interface TagProps {
    label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
    var linkBase = '/events?search=""&tag=';
    var link = linkBase + label;

    return (
        <Link href={link} className={style.tag}>
            {label}
        </Link>
    );
};

export default Tag;