'use client'
import styles from "./Carousel.module.css"
import Button from "./Button"
import React, { useEffect } from "react"
import Image from "next/image"

interface CarouselProps {
    images: {src: string, alt: string}[],
    classname?: string;
}

function setActiveDot(index: number) {
    const dots = document.querySelectorAll(`.${styles.dot}`);
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add(styles.active);
        } else {
            dot.classList.remove(styles.active);
        }
    });
}

function setActiveImage(index: number) {
    const imageContainer = document.querySelectorAll(`.${styles.images} > *`);
    imageContainer.forEach((image) => {
        image.setAttribute("style", `transform: translateX(-${index * 100}%);`);
    });
}

export default function Carousel({images, classname}: CarouselProps) {
    const numImages = images.length;
    const [currentIndex, setCurrentIndex] = React.useState(0);

    function handleLeftClick() {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : numImages - 1));
        setActiveImage(currentIndex > 0 ? currentIndex - 1 : numImages - 1);
        setActiveDot(currentIndex > 0 ? currentIndex - 1 : numImages - 1);
    }
    
    function handleRightClick() {
        setCurrentIndex((prevIndex) => (prevIndex < numImages - 1 ? prevIndex + 1 : 0));
        setActiveImage(currentIndex < numImages - 1 ? currentIndex + 1 : 0);
        setActiveDot(currentIndex < numImages - 1 ? currentIndex + 1 : 0);
    }

    useEffect(() => {
        setActiveDot(0);
    }, []);

    return (
        <div className={`${styles.content} ${classname}`}>
            <div className={styles.images}>
                {images.map((imageObj, index) => (
                    <Image 
                        width="800" 
                        height="800" 
                        src={imageObj.src} 
                        alt={imageObj.alt} 
                        key={index} 
                        loading="eager"
                    />
                ))}
            </div>
            <div className={styles.controls}>
                <Button variant="secondary" isIcon onClick={handleLeftClick}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO3XywnCQBRG4cOA7qzDFKC96Ebb0Q4iuNASLSBEAhGyiTuZ/HI+uPtz8yIDkiRJ+rVmnDgFuAH9OFfC4p+T+GE6YENofA+8gBWh8R1wICD+MRN/ZuGK8ZV45Wu6z7ywJwLsk+MHu/QF4h+h+C/Qh0sshXci4Xf6SIjy5UCzJkRJPlJOl2gnC1wI1QDb2hGSJEn/5g0F8noLrORaTAAAAABJRU5ErkJggg==" alt="back"></img>
                </Button>
                <Button variant="secondary" isIcon onClick={handleRightClick}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO3YPQrCQBRF4YNKSrehvZuJTfajK7BIY+X6tNWoBBIRMZ2SXDgfvGK6d2dC5gckSZL0K+uuIu2BR1cHYEaQJXB/C9DWMSlEAZw/AsSF2AJNeogSuH4JcQIWhCgNMRGuxFRUA3+nmiBDITaEiA5QJX9CJXAb2NjmTJzNj8WZH0v0cboALqnN91fKJrX53i75Ut9rn1RWr5EkSZL4pydRFnoPrkVGuQAAAABJRU5ErkJggg==" alt="forward"></img>
                </Button>
                <div className={styles.dots}>
                    {Array.from({ length: numImages }).map((_, index) => (
                        <span key={index} className={styles.dot}></span>
                    ))}
                </div>
            </div>
        </div>
    );
}