import React from "react";
import { useNavigate } from "react-router-dom";
import "./instructions.css";

function Instructions() {
  const navigate = useNavigate();
  return (
    <div className="instructionsContent">
      <div className="row mt-3">
        <div className="col mx-5">
          <button
            type="button"
            className="btn btn-dark mb-3"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back!
          </button>
          <article className="postcard dark blue">
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <span className="text-warning cursor-pointer">
                  Instructions
                </span>
              </h1>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                <p className="text-warning">
                  1. After following the instructions provided on GitHub you can
                  find the file of task at: <br />
                  src/
                  <br />
                  &nbsp; |-- components/
                  <br />
                  &nbsp; | |-- solutions/
                  <br />
                  &nbsp; | | |-- task<span className="text-info">ID</span>/
                  <br />
                  &nbsp; | | | |-- Solution<span className="text-info">ID</span>
                  .js
                  <br />
                </p>

                <p className="text-warning">
                  2. Try to use only libraries that React provide and that are
                  currently installed.
                </p>
                <p className="text-warning">
                  3. When debugging the code use console.log or alert as much as
                  you can.
                </p>
                <p className="text-warning">
                  4. For each solution css use solutions.css file located at:
                  <br />
                  src/
                  <br />
                  &nbsp; |-- components/
                  <br />
                  &nbsp; | |-- solutions/
                  <br />
                  &nbsp; | | |-- style/
                  <br />
                  &nbsp; | | | |-- solutions.css
                  <br />
                </p>
                <p className="text-warning">
                  5. Use Bootstrap for styling and nested class selector as much
                  as you can while writing CSS.
                </p>
              </div>
              <ul className="postcard__tagbox">
                <a
                  href="https://github.com/petrit-incodeks/interns-journey"
                  rel="noreferrer"
                  target="_blank"
                >
                  <li className="tag__item play blue">
                    <span>
                      <i className="fab fa-github mr-2"></i>GitHub Repo
                    </span>
                  </li>
                </a>

                <a
                  href="https://www.google.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <li className="tag__item play blue">
                    <span>
                      <i className="fab fa-google mr-2"></i>Google it!
                    </span>
                  </li>
                </a>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
