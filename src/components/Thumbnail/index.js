import React from "react";

import { Image } from "./Thumbnail.styles";

const Thumbnail = ({ image, movieId, clickable }) => (
  <div>
    <Image src={image} alt="movie-thumb" />
  </div>
);
export default Thumbnail;
