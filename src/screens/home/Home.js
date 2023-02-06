import React from "react";
import AssignmentCard from "../../components/AssignmentCard";
import { assignments } from "../../services/assignments";

function Home() {


  return (
    <div className="homeContent">
      <div className="row">
        <div className="col text-center mb-5 header_content">
          <h1 className="display-4">Incodeks Interns Journey!</h1>
          <p className="col-lg-6 header_info">
            Welcome to Interns Journey! Our platform is dedicated to providing
            engaging and educational assignments for interns to help them grow
            and develop their skills. Each week, we will post new and
            challenging tasks, ranging from the basics to more advanced topics.
            Join us on this exciting journey and see your skills soar to new
            heights!
          </p>
        </div>
      </div>
      <div className="row mx-5">{<AssignmentCard assignments={assignments} />}</div>
    </div>
  );
}

export default Home;
