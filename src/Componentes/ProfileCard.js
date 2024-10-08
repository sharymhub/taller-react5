import React from "react";
import '../Styles/ProfileCard.css'
import imageCat from "../Image/Cats style1.jpg"
function ProfileCard() {
  return (
    <div className="profile-card">
      <img src={imageCat} alt="profile" />
      <h2>Kitty</h2>
      <p>Desarrollador Front-end</p>
    </div>
  );
}
export default ProfileCard;
