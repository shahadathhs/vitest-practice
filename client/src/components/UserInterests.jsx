import { useEffect, useState } from "react";

export default function UserInterests() {
  const [userInterests, setUserInterests] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/userInterests`)
      .then((response) => response.json())
      .then((data) => setUserInterests(data));
  }, []);

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    padding: "10px",
  };

  const profileCardStyle = {
    border: "1px solid black",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div>
      <h1>User Interests</h1>

      <section style={gridContainerStyle}>
        {userInterests.length > 0 ? (
          userInterests.map((interest) => (
            <div
              key={interest._id}
              style={profileCardStyle}
              data-testid="interests-card"
            >
              <h3>Name: {interest.name}</h3>
              <p>Favorite Movie: {interest.favorite_movie}</p>
              <p>Favorite Book: {interest.favorite_book}</p>
              <p>Favorite Music Genre: {interest.favorite_music_genre}</p>
              {/* <div data-testid="user-hobbies">
                Hobbies: 
                {interest.hobbies.map((hobby, index) => (
                  <span key={index}> {hobby}{index < interest.hobbies.length - 1 && ', '}</span>
                ))}
              </div> */}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
        {userInterests.length === 0 && <p>No interests available.</p>}
      </section>
    </div>
  );
}
