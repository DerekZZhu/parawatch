"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

import bigfootImg from '@/assets/bigfoot.jpg';
import datacenterImg from '@/assets/datacenter.jpg';
import screamerImg from '@/assets/screamer.webp';
import theatreImg from '@/assets/theatre.webp';
import classes from './slideshow.module.css';

const images = [
  { image: bigfootImg, alt: 'A delicious, juicy burger' },
  { image: datacenterImg, alt: 'A delicious, spicy curry' },
  { image: screamerImg, alt: 'Steamed dumplings' },
  { image: theatreImg, alt: 'Mac and cheese' }
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}