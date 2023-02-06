import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Solution1 from "../../components/solutions/Solution1";
import Solution2 from "../../components/solutions/Solution2";
import Solution3 from "../../components/solutions/Solution3";
import Solution4 from "../../components/solutions/Solution4";
import Solution5 from "../../components/solutions/Solution5";
import Solution6 from "../../components/solutions/Solution6";
import "./assignment.css";

const Assignment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const solutionRef = useRef();

  useEffect(() => {
    if (!location.state) {
      window.location.replace("/");
    }
  }, [location.state]);

  let assignment;
  if (location.state !== null) {
    assignment = location.state.assignment;
  }

  const components = [
    Solution1,
    Solution2,
    Solution3,
    Solution4,
    Solution5,
    Solution6,
  ];
  const ComponentToRender =
    components[location.state !== null && location.state.assignment.id - 1];

  return (
    location.state !== null && (
      <div className="assignmentContent">
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
                  <span href="#">{assignment.title}</span>
                </h1>
                <div className="postcard__subtitle small">
                  <span>
                    <i className="fas fa-calendar-alt mr-2"></i>
                    {assignment.date}
                  </span>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <p>Details:</p>
                  <p>-{assignment.description}</p>
                  {assignment.details.map((detail, index) => (
                    <div key={index} className="detail__content">
                      <span>{index + 1}.</span>
                      <p>&nbsp;{detail}</p>
                    </div>
                  ))}
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__item">
                    <i className="fa fa-tasks mr-2"></i>
                    {assignment.difficulty}
                  </li>
                  <li className="tag__item">
                    <i className="fas fa-clock mr-2"></i>
                    {assignment.averageTime}
                  </li>
                  <li
                    className="tag__item play blue"
                    onClick={() =>
                      solutionRef.current.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    <span>
                      <i className="fas fa-play mr-2"></i>Start Coding...
                    </span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>

        <div className="row mt-3" ref={solutionRef}>
          <div className="col mx-5">
            <article className="postcard dark blue">
              <div className="postcard__text">
                <ComponentToRender assignmentId={assignment.id} />
                <div className="postcard__bar"></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    )
  );
};

export default Assignment;
