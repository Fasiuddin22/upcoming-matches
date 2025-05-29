import { useEffect, useState } from "react";
import React from "react";
const MatchList = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data); // Already an array from backend
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching match data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        ⚽ Upcoming Soccer Matches
      </h1>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading...</p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {matches.map((match) => (
            <li
              key={match.idEvent}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-indigo-100"
            >
              <div className="text-center mb-3">
                <h2 className="text-xl font-bold text-indigo-800">
                  {match.strHomeTeam}{" "}
                  <span className="text-gray-500">vs</span>{" "}
                  {match.strAwayTeam}
                </h2>
              </div>
              <p className="text-center text-sm text-gray-600">
                🕒{" "}
                {new Date(
                  match.dateEvent + " " + match.strTime
                ).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MatchList;
