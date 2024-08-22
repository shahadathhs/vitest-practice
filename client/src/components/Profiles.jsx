import { useEffect, useState } from "react";

export default function Profiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/profiles`)
      .then(response => response.json())
      .then(data => setProfiles(data));
  }, []);

  // console.log(profiles);

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    padding: '10px',
  };

  const profileCardStyle = {
    border: '1px solid black',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  };

  return (
    <div>
      <h1>Profiles</h1>

      <section style={gridContainerStyle}>
        {profiles.length > 0 ? (
          profiles.map(profile => (
            <div key={profile._id} style={profileCardStyle} data-testid="profile-card">
              <h2>Name: {profile.name}</h2>
              <p>Email: {profile.email}</p>
              <p>Age: {profile.age}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
        {profiles.length === 0 && <p>No interests available.</p>}
      </section>
    </div>
  );
}
