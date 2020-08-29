import React from "react";
import "./Home.css";
import banner from "./img/banner.png";
import product from "./img/shoes.png";
import mobile from "./img/mobile.png";
import tv from "./img/tv.png";
import speaker from "./img/speaker.png";
import clothe from "./img/clothe.png";
import cabel from "./img/cabel.jpg";
import woman from "./img/woman.png";
import Product from "./Product";

const Home = () =>{
    return(
        <div className="home">
            <img 
               className="home__image"
               src={banner}
               alt="banner"
            />

                <div className="home__row">
                    <Product
                        id="1"
                        title="HowInovation Creates the products thats an amazasing future"
                        price={11.69}
                        rating={5}
                        image={speaker}
                    />
                    <Product
                        id="1"
                        title="HowInovation Creates the products thats an amazasing future"
                        price={11.69}
                        rating={5}
                        image={clothe}
                    />
                </div>

                <div className="home__row">
                <Product
                        id="1"
                        title="HowInovation Creates the products thats an amazasing future"
                        price={11.69}
                        rating={5}
                        image={mobile}
                    />
                    <Product
                        id="1"
                        title="HowInovation Creates the products thats an amazasing future"
                        price={11.69}
                        rating={5}
                        image={woman}
                    />
                    <Product
                        id="1"
                        title="HowInovation Creates the products thats an amazasing future"
                        price={11.69}
                        rating={5}
                        image={cabel}
                    />
                </div>

                <div className="home__row">
                    <Product
                            id="1"
                            title="HowInovation Creates the products thats an amazasing future"
                            price={11.69}
                            rating={5}
                            image={tv}
                        />
                </div>
        </div>
    );
}

export default Home;