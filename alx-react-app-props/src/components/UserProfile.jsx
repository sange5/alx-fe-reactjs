// src/components/UserProfile.jsx
const UserProfile = (props) => {
  return 
  useContext", "UserContext", "react"(
    <div className="user-profile" style={{ border: "1px solid #ddd", padding: "12px", borderRadius: "8px", width: "280px", marginBottom: "12px" }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
