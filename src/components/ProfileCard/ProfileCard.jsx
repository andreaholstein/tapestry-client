import "./ProfileCard.scss";

const ProfileCard = ({ user }) => {
  const placeholderUser = {
    first_name: "Community",
    last_name: "Member",
    username: "member",
    profile_picture: "https://via.placeholder.com/80",
  };

  const displayUser = user || placeholderUser;

  return (
    <div className="profile-card">
      <img
        src={
          displayUser.profile_picture
            ? `http://localhost:8080/${displayUser.profile_picture}`
            : "https://via.placeholder.com/150"
        }
        alt={displayUser.username || "User"}
      />
      <h2>{`${displayUser.first_name} ${displayUser.last_name}`}</h2>
      <p>@{displayUser.username}</p>
    </div>
  );
};

export default ProfileCard;
