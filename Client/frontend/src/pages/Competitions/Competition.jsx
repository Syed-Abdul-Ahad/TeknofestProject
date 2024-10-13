import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Competition = () => {
  const [competitions, setCompetitions] = React.useState([]);

  useEffect(() => {
    async function getAllCompetitions() {
      const response = await axios.get(
        "http://localhost:3000/api/v1/competitions/getAllCompetitions"
      );
      setCompetitions(response.data.Data.competition);
      console.log(response.data.Data.competition);
    }
    getAllCompetitions();
  }, []);

  return (
    <div>
      {competitions.map((competition) => (
        <div key={competition._id}>
          <h1>
            <Link to={`/competitions/${competition._id}`}>
              {competition.name}
            </Link>
          </h1>
          <p>{competition.description}</p>
          <p>{competition.category}</p>
          <p>{competition.participationPrice}</p>
          <p>{competition.totalParticipants}</p>
        </div>
      ))}
    </div>
  );
};

export default Competition;
