import React from "react";

export const VideoArtistas = () => {
  return (
    <div className="container mt-5">
      <div class="ratio ratio-21x9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jvAcyAJXqrs?start=71"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};