import React from "react";
import { useNavigate } from "react-router-dom";

const AssignmentCard = ({ assignments }) => {
    const navigate = useNavigate();
  const keywords = [
    "coding",
    "software-development",
    "programming",
    "tech",
    "development",
  ];
  const sizes = ["400x600", "500x700", "600x900"];

  return (
    <>
      {assignments.map((assignment, index) => {
        const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        const randomPictureURL = `https://source.unsplash.com/${randomSize}/?${randomKeyword}`;

        return (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index} onClick={() => {
            navigate(`/assignment/${assignment.id}`, { state: { assignment } });
          }}>
            <div
              className="card text-white card-has-bg click-col"
              style={{
                backgroundImage: `url(${randomPictureURL})`,
              }}
            >
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">{assignment.category}</small>
                  <h4 className="card-title mt-0 ">
                    <span className="text-white">
                      {assignment.title}
                    </span>
                  </h4>
                  <small>
                    <i className="far fa-clock"></i>
                    {assignment.date}
                  </small>
                </div>
                <div className="card-footer">
                  <div className="media">
                    <img
                      className="mr-3 rounded-circle"
                      src="https://incodeks.com/assets/team_images/petriti.jpeg"
                      alt="Generic placeholder"
                      style={{ maxWidth: 50 }}
                    />
                    <div className="media-body">
                      <h6 className="my-0 text-white d-block">
                        {assignment.author}
                      </h6>
                      <small>{assignment.jobPosition}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AssignmentCard;
