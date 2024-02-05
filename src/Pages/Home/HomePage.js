import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <div class="home-main-container">
        <div class="empty"></div>
        <div class="HomeContent">
          <h2>
            Curious about your Body Mass Index? <br />
            Check If You're in the
            <span> Normal, Overweight, or Underweight </span> range! <br />
            Click to find out now.
          </h2>
          <button className="homepage-calc-btn">
            <Link to="/Calculate">Calculate</Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
