import React from "react";

export default function BannerHome() {
  return (
    <header>
      <div className="banner">
        <img
          src="./banner-home.png"
          alt="banner principal, gauna hnos."
          className="banner-img banner-light"
        />
        <img
          src="./banner-home-dark.png"
          alt="banner principal modo oscuro, gauna hnos."
          className="banner-img banner-dark"
        />
      </div>
    </header>
  );
}
