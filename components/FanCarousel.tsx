'use client'
import styles from "./FanCarousel.module.css"
import Button from "./Button"
import React, { useEffect } from "react"
import Image from "next/image"

interface FanCarouselProps {
    images: {src: string, alt: string}[]
}

function setActiveImage(offset: number) {
    const imageContainer = document.querySelectorAll(`.${styles.images} > *`);
    imageContainer.forEach((image, index) => {
        console.log(index);
        switch (index) {
            case 0 + offset:
                image.classList.add(styles.onDeckLeft);
                image.classList.remove(styles.first);
                image.classList.remove(styles.hidden);
                break;
            case 1 + offset:
                image.classList.add(styles.first);
                image.classList.remove(styles.second);
                image.classList.remove(styles.onDeckLeft);
                break;
            case 2 + offset:
                image.classList.add(styles.second);
                image.classList.remove(styles.third);
                image.classList.remove(styles.first);
                break;
            case 3 + offset:
                image.classList.add(styles.third);
                image.classList.remove(styles.fourth);
                image.classList.remove(styles.second);
                break;
            case 4 + offset:
                image.classList.add(styles.fourth);
                image.classList.remove(styles.onDeckRight);
                image.classList.remove(styles.third);
                break;
            case 5 + offset:
                image.classList.add(styles.onDeckRight);
                image.classList.remove(styles.hidden);
                image.classList.remove(styles.fourth);
                break;
            default:
                image.classList.add(styles.hidden);
        }
    });
}

export default function FanCarousel({images}: FanCarouselProps) {
    const numImages = images.length;
    const [currentIndex, setCurrentIndex] = React.useState(0);

    function handleLeftClick() {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : numImages - 1));
        setActiveImage(currentIndex > 0 ? currentIndex - 1 : numImages - 1);
    }
    
    function handleRightClick() {
        setCurrentIndex((prevIndex) => (prevIndex < numImages - 1 ? prevIndex + 1 : 0));
        setActiveImage(currentIndex < numImages - 1 ? currentIndex + 1 : 0);
    }

    useEffect(() => {
        setActiveImage(currentIndex);
    }, [currentIndex]);

    return (
        <div className={styles.content}>
            <div className={styles.images}>
                {images.map((imageObj, index) => (
                    <Image 
                        width="400" 
                        height="400" 
                        src={imageObj.src} 
                        alt={imageObj.alt} 
                        key={index} 
                        loading="eager"
                    />
                ))}
            </div>
            <div className={styles.controls}>
                {currentIndex !== 0 ? (
                    <Button variant="secondary" isIcon onClick={handleLeftClick}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO3XywnCQBRG4cOA7qzDFKC96Ebb0Q4iuNASLSBEAhGyiTuZ/HI+uPtz8yIDkiRJ+rVmnDgFuAH9OFfC4p+T+GE6YENofA+8gBWh8R1wICD+MRN/ZuGK8ZV45Wu6z7ywJwLsk+MHu/QF4h+h+C/Qh0sshXci4Xf6SIjy5UCzJkRJPlJOl2gnC1wI1QDb2hGSJEn/5g0F8noLrORaTAAAAABJRU5ErkJggg==" alt="back"></img>
                    </Button>
                ) : (
                    <Button variant="secondary" isIcon disabled onClick={handleLeftClick}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO3XywnCQBRG4cOA7qzDFKC96Ebb0Q4iuNASLSBEAhGyiTuZ/HI+uPtz8yIDkiRJ+rVmnDgFuAH9OFfC4p+T+GE6YENofA+8gBWh8R1wICD+MRN/ZuGK8ZV45Wu6z7ywJwLsk+MHu/QF4h+h+C/Qh0sshXci4Xf6SIjy5UCzJkRJPlJOl2gnC1wI1QDb2hGSJEn/5g0F8noLrORaTAAAAABJRU5ErkJggg==" alt="back"></img>
                    </Button>
                )}
                {currentIndex <= images.length - 7 ? (
                    <Button variant="secondary" isIcon onClick={handleRightClick}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO3YPQrCQBRF4YNKSrehvZuJTfajK7BIY+X6tNWoBBIRMZ2SXDgfvGK6d2dC5gckSZL0K+uuIu2BR1cHYEaQJXB/C9DWMSlEAZw/AsSF2AJNeogSuH4JcQIWhCgNMRGuxFRUA3+nmiBDITaEiA5QJX9CJXAb2NjmTJzNj8WZH0v0cboALqnN91fKJrX53i75Ut9rn1RWr5EkSZL4pydRFnoPrkVGuQAAAABJRU5ErkJggg==" alt="forward"></img>
                    </Button>
                ) : (
                    <Button variant="secondary" isIcon disabled onClick={handleRightClick}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO3YPQrCQBRF4YNKSrehvZuJTfajK7BIY+X6tNWoBBIRMZ2SXDgfvGK6d2dC5gckSZL0K+uuIu2BR1cHYEaQJXB/C9DWMSlEAZw/AsSF2AJNeogSuH4JcQIWhCgNMRGuxFRUA3+nmiBDITaEiA5QJX9CJXAb2NjmTJzNj8WZH0v0cboALqnN91fKJrX53i75Ut9rn1RWr5EkSZL4pydRFnoPrkVGuQAAAABJRU5ErkJggg==" alt="forward"></img>
                    </Button>
                )}
            </div>
        </div>
    );
}