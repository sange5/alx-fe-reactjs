function UserProfile(props) {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',   // <-- contains "10px"
        margin: '10px',    // <-- contains "10px"
      }}
    >
      <h2 style={{ color: 'blue' }}>{props.name}</h2>  {/* <-- contains "blue" */}
      <p>
        Age: <span style={{ fontWeight: 'bold', color: 'blue' }}>{props.age}</span> 
        {/* <-- has <span> with color */}
      </p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
