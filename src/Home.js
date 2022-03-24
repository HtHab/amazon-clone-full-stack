import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="2344234325"
            title="Life Force: How New Breakthroughs in Precision Medicine Can Transform the Quality of Your Life & Those You Love"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41yzMkY-+vL._SX331_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="324280423"
            title="Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/Macbook/Tablet - Black"
            image="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL320_.jpg"
            price={99.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="5698763895739"
            title="Roku Streaming Stick 4K 2021 | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV Controls"
            image="https://m.media-amazon.com/images/I/71wrIZujPIL._AC_SX466_.jpg"
            price={45.99}
            rating={3}
          />
          <Product
            id="23948378462"
            title="Logitech Brio 4K Webcam, Ultra 4K HD Video Calling, Noise-Canceling mic, HD Auto Light Correction, Wide Field of View, Works with Microsoft Teams, Zoom, Google Voice, PC/Mac/Laptop/Macbook/Tablet"
            image="https://m.media-amazon.com/images/I/61OQP2+yqML._AC_SX679_.jpg"
            price={210}
            rating={5}
          />
          <Product
            id="7623745278"
            title={`Acer Aspire 5 A515-46-R3UB | 15.6" Full HD IPS Display | AMD Ryzen 3 3350U Quad-Core Mobile Processor | 4GB DDR4 | 128GB NVMe SSD | WiFi 6 | Backlit KB | FPR | Amazon Alexa | Windows 11 Home in S mode`}
            image="https://m.media-amazon.com/images/I/7189iXimfWL._AC_SX679_.jpg"
            price={424}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="888764237"
            title="VIZIO 65-Inch V-Series 4K UHD LED HDR Smart TV with Apple AirPlay and Chromecast Built-in, Dolby Vision, HDR10+, HDMI 2.1, Auto Game Mode and Low Latency Gaming, V655-J09, 2021 Model"
            image="https://m.media-amazon.com/images/I/81ii3VScCbL._AC_SX466_.jpg"
            price={699.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
