import React from "react";

const ImageList = props => {
  return props.images.map(({ id, description, urls }) => {
    return (
      <div key={id}>
        <img
          key={id}
          src={urls.regular}
          alt={description}
          title={description}
        />
      </div>
    );
  });
};

export default ImageList;
