import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Chart from "../../Assets/BMI CHART.png";
import BMI from "../../Assets/BMI.jpg";

function About() {
  return (
    <div>
      <Header />
      <div class="about-main-container">
        <div class="about-Content">
          <div class="text">
            <h2>What is BMI?</h2>
            <p>
              BMI (body mass index) is a measure for adults to check what
              category their height and weight puts them in - underweight,
              healthy, or overweight. The calculator will give you an idea of
              how your weight compares to common values. Body Mass Index (BMI)
              is calculated as your weight divided by the square of your height
              or BMI = weight/height2.
            </p>
            <div class="about">
              <div className="bmi-img">
                <img src={BMI} />
              </div>
              <div class="right2">
                <h3>BMI weight ranges</h3>
                <p>
                  Less than 18.5 = Underweight
                  <br />
                  Between 18.5 - 24.9 = Healthy Weight
                  <br />
                  Between 25 - 29.9 = Overweight <br />
                  Over 30 = Obese
                </p>
              </div>
            </div>
            <h2>What your BMI score means</h2>
            <h3>Underweight</h3>
            <p>
              Being underweight might mean you're not getting all the nutrients,
              vitamins, and minerals that your body needs to be healthy. It may
              affect your skin, hair, and teeth or you may feel more tired than
              you should. Women may have irregular periods and have a greater
              chance of osteoporosis. You should speak to your doctor to find
              out why you have a low BMI and about how to gain weight healthily.
            </p>
            <h3>Healthy weight</h3>
            <p>
              Having a BMI score within the healthy weight range is a good sign
              that you are the right weight for your height. But always remember
              that the BMI does not tell you anything about the make-up of your
              body - such as how much muscle or fat you have, how much physical
              activity you do, or your body type. So, keep an eye on your
              general health, diet, and exercise and track any changes in your
              weight.
            </p>
            <h3>Overweight</h3>
            <p>
              If your BMI is in the overweight range you may be more at risk of
              developing health conditions such as type 2 diabetes, heart
              disease, gallstones and cancer. For help losing weight, read our
              weight loss information leaflet.
            </p>
            <h3>Obses</h3>
            <p>
              If your BMI score is between 30 to 35 then there is a high chance
              you have class 1 obesity, with a range between 35 and 40 being
              class 2. Your chances of developing health issues associated with
              being overweight can increase if you are obese.
            </p>
          </div>
          <button id="calc-btn">
            <Link to="/Calculate" style={{ fontSize: 12 }}>
              Calculate Your BMI
            </Link>
          </button>
          <h2 id="chart-h2">BMI CHART</h2>
          <div class="img-div">
            <img src={Chart} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
