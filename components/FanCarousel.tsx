'use client'
import styles from "./FanCarousel.module.css"
import Button from "./Button"
import React, { useEffect } from "react"
import Image from "next/image"

interface FanCarouselProps {
    images: {src: string, alt: string}[]
}

function setActiveImage(offset: number) {
    const imageParent = document.querySelectorAll(`.${styles.images}`);
    const imagesList = document.querySelectorAll(`.${styles.images} > *`);
    const positionClasses = [styles.onDeckLeft, styles.first, styles.second, styles.third, styles.fourth, styles.onDeckRight, styles.hidden];
    // Always reset first so switching between screen-size branches can't leave stale classes behind
    imagesList.forEach((image) => image.classList.remove(...positionClasses));
    if(imageParent[0].getBoundingClientRect().width < 830) {
        // Do computation for 3 images
        // Two phantom placeholders precede the real images in the DOM, so plain offset already aligns "second" with the real image at currentIndex
        imagesList.forEach((image, index) => {
            switch (index) {
                case 0 + offset:
                    image.classList.add(styles.onDeckLeft);
                    break;
                case 1 + offset:
                    image.classList.add(styles.first);
                    break;
                case 2 + offset:
                    image.classList.add(styles.second);
                    break;
                case 3 + offset:
                    image.classList.add(styles.third);
                    break;
                case 4 + offset:
                    image.classList.add(styles.onDeckRight);
                    break;
                case 5 + offset:
                    image.classList.add(styles.hidden);
                    break;
                default:
                    image.classList.add(styles.hidden);
            }
        });
    }else {
        // Do computation for 4 images
        // 2 phantom placeholders always precede the real images, so shift by +2 to keep referencing the same real image as before
        const domOffset = offset + 2;
        imagesList.forEach((image, index) => {
            switch (index) {
                case 0 + domOffset:
                    image.classList.add(styles.onDeckLeft);
                    break;
                case 1 + domOffset:
                    image.classList.add(styles.first);
                    break;
                case 2 + domOffset:
                    image.classList.add(styles.second);
                    break;
                case 3 + domOffset:
                    image.classList.add(styles.third);
                    break;
                case 4 + domOffset:
                    image.classList.add(styles.fourth);
                    break;
                case 5 + domOffset:
                    image.classList.add(styles.onDeckRight);
                    break;
                default:
                    image.classList.add(styles.hidden);
            }
        });
    }
}

export default function FanCarousel({images}: FanCarouselProps) {
    const numImages = images.length;
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isSmallScreen, setIsSmallScreen] = React.useState(false);
    // Desktop only ever shows "first".."fourth" (onDeckLeft/onDeckRight are invisible buffers), so its range must
    // extend 1 past each end for the true first/last real image to ever reach a visible slot
    const desktopMinIndex = -1;
    const desktopMaxIndex = numImages - 5;

    function handleLeftClick() {
        const minIndex = isSmallScreen ? 0 : desktopMinIndex;
        setCurrentIndex((prevIndex) => (prevIndex > minIndex ? prevIndex - 1 : numImages - 1));
        setActiveImage(currentIndex > minIndex ? currentIndex - 1 : numImages - 1);
    }
    
    function handleRightClick() {
        const maxIndex = isSmallScreen ? numImages - 1 : desktopMaxIndex;
        setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
        setActiveImage(currentIndex < maxIndex ? currentIndex + 1 : 0);
    }

    useEffect(() => {
        setActiveImage(currentIndex);
    }, [currentIndex]);

    // currentIndex means something different in each mode (small mode: the exact centered image; desktop mode: the left edge of the 6-image window, 2 images ahead of center)
    // so convert it when the mode actually changes, to keep the focused image continuous across the resize instead of jumping by 2
    const wasSmallScreenRef = React.useRef<boolean | null>(null);
    useEffect(() => {
        const smallScreenQuery = window.matchMedia("(max-width: 830px)");
        function handleResize() {
            const nowSmall = smallScreenQuery.matches;
            if (wasSmallScreenRef.current !== null && wasSmallScreenRef.current !== nowSmall) {
                setCurrentIndex((prevIndex) => {
                    const converted = nowSmall ? prevIndex + 2 : prevIndex - 2;
                    const minIndex = nowSmall ? 0 : desktopMinIndex;
                    const maxIndex = nowSmall ? numImages - 1 : desktopMaxIndex;
                    return Math.max(minIndex, Math.min(maxIndex, converted));
                });
            }
            wasSmallScreenRef.current = nowSmall;
            setIsSmallScreen(nowSmall);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [currentIndex]);

    return (
        <div className={styles.content}>
            <div className={styles.images}>
                <div className={styles.phantom} aria-hidden="true" />
                <div className={styles.phantom} aria-hidden="true" />
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
                <div className={styles.phantom} aria-hidden="true" />
                <div className={styles.phantom} aria-hidden="true" />
            </div>
            <div className={styles.controls}>
                <Button variant="secondary" isIcon disabled={isSmallScreen ? currentIndex === 0 : currentIndex <= desktopMinIndex} onClick={handleLeftClick}>
                    <Image width={48} height={48} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nO3XywnCQBRG4cOA7qzDFKC96Ebb0Q4iuNASLSBEAhGyiTuZ/HI+uPtz8yIDkiRJ+rVmnDgFuAH9OFfC4p+T+GE6YENofA+8gBWh8R1wICD+MRN/ZuGK8ZV45Wu6z7ywJwLsk+MHu/QF4h+h+C/Qh0sshXci4Xf6SIjy5UCzJkRJPlJOl2gnC1wI1QDb2hGSJEn/5g0F8noLrORaTAAAAABJRU5ErkJggg==" alt="back" />
                </Button>
                <Button variant="secondary" isIcon disabled={isSmallScreen ? currentIndex >= images.length - 1 : currentIndex >= desktopMaxIndex} onClick={handleRightClick}>
                    <Image width={48} height={48} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO3YPQrCQBRF4YNKSrehvZuJTfajK7BIY+X6tNWoBBIRMZ2SXDgfvGK6d2dC5gckSZL0K+uuIu2BR1cHYEaQJXB/C9DWMSlEAZw/AsSF2AJNeogSuH4JcQIWhCgNMRGuxFRUA3+nmiBDITaEiA5QJX9CJXAb2NjmTJzNj8WZH0v0cboALqnN91fKJrX53i75Ut9rn1RWr5EkSZL4pydRFnoPrkVGuQAAAABJRU5ErkJggg==" alt="forward" />
                </Button>
            </div>
        </div>
    );
}