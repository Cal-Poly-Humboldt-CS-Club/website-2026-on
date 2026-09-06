import React from 'react';

type CustomImageProps = React.ComponentPropsWithoutRef<'img'>;

const CustomImage: React.FC<CustomImageProps> = ({ src='', alt='no-image', title }) => {
  const source = title ? title.replace('Source: ', '') : '';

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt}/>
      {source && <span>Source: {source}</span>}
    </>
  );
};

export default CustomImage;