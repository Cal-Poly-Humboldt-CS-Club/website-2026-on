import React from 'react';
import Image from 'next/image';

interface CustomImageProps {
  src?: string | undefined;
  alt?: string;
  title?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src='', alt='no-image', title }) => {
  const source = title ? title.replace('Source: ', '') : '';

  return (
    <>
      <img src={src} alt={alt}/>
      {source && <span>Source: {source}</span>}
    </>
  );
};

export default CustomImage;