import React, { useState } from "react";
import { profileData } from "./ProfileData";
import { FaTrashAlt } from "react-icons/fa";
import "./Profile.css";
function Profile() {
  const [userProfile, setProfile] = useState(profileData);
  const [search, setSearch] = useState("");
  const removeProfile = (id) => {
    let newList = userProfile.filter((profile) => profile.id !== id);
    setProfile(newList);
  };
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section className="profile-sec">
      <div className="container">
        <h1>Profile App</h1>
        <input
          type="text"
          placeholder="Enter search term..."
          className="input-tag"
          onChange={handleInputChange}
          value={search}
        />
        {userProfile
          .filter((value) => {
            if (search === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(search.toLowerCase()) //filter out the name mating here
            ) {
              return value;
            }
          })
          .map((profile) => {
            return (
              <div className="pro-container" key={profile.id}>
                <img src={profile.img}></img>
                <div className="pro-data">
                  <h4>{profile.name}</h4>
                  <p>{profile.job}</p>
                </div>
                <FaTrashAlt
                  style={{ color: "red" }}
                  onClick={() => {
                    removeProfile(profile.id);
                  }}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Profile;
