import "./LandingPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <div className="svg-container">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="bg">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(230, 230, 250, 0.06)" }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "rgba(216, 191, 216, 0.6)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(221, 160, 221, 0.2)" }}
              />
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
            s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity="0.3">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="10s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity="0.6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity="0.9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>

      <div className="container">
        {showIntro ? (
          <div className={`intro ${!showIntro ? "fade-out" : ""}`}>
            <h1>Career Guru</h1>
            <p>
              Welcome to Career Guru – your one-stop platform for discovering
              exciting career opportunities. Whether you're a seasoned
              professional or just starting out, we provide job listings across
              various industries.
            </p>
            <button
              className="Button"
              onClick={() => setShowIntro(false)}
            >
              Let's Start
            </button>
          </div>
        ) : (
          <div className="info-form fade-in">
            <h2>Enter Your Information</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent page reload
                
                navigate("/OpeningPage");
              }}
            >
              <div>
                <label>
                  First Name:
                  <input type="text" name="firstName" required />
                </label>
              </div>
              <div>
                <label>
                  Last Name:
                  <input type="text" name="lastName" required />
                </label>
              </div>
              <div>
                <label>
                  Email:
                  <input type="email" name="email" required />
                </label>
              </div>
              <button type="submit" className="Button">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
