import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Solution1 from "../../components/solutions/task01/Solution1";
import Solution2 from "../../components/solutions/task02/Solution2";
import Solution3 from "../../components/solutions/task03/Solution3";
import Solution4 from "../../components/solutions/task04/Solution4";
import Solution5 from "../../components/solutions/task05/Solution5";
import Solution6 from "../../components/solutions/task06/Solution6";
import Solution7 from "../../components/solutions/task07/Solution7";
import Solution8 from "../../components/solutions/task08/Solution8";
import Solution9 from "../../components/solutions/task09/Solution9";
import Solution10 from "../../components/solutions/task10/Solution10";
import Solution11 from "../../components/solutions/task11/Solution11";
import Solution12 from "../../components/solutions/task12/Solution12";
import Solution13 from "../../components/solutions/task13/Solution13";
import Solution14 from "../../components/solutions/task14/Solution14";
import Solution15 from "../../components/solutions/task15/Solution15";
import "./assignment.css";
import "../../components/solutions/style/solutions.css"

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
    Solution7,
    Solution8,
    Solution9,
    Solution10,
    Solution11,
    Solution12,
    Solution13,
    Solution14,
    Solution15
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
                  <p className="mb-4">-{assignment.description}</p>
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
                  <li className="tag__item text-warning" onClick={() => navigate("/instructions")}>
                    <i className="fa fa-info-circle mr-2"></i>
                    Instructions
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
