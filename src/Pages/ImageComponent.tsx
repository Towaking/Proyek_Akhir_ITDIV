import React from 'react';

interface ImageComponentProps {
  imageBase64: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imageBase64 }) => {
  return (
    <img
      src={`data:image/png;base64,${imageBase64}`}
      alt="description"
      style={{ width: '300px' }}
    />
  );
};

export default ImageComponent;