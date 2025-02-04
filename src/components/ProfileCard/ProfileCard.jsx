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
      <img src={displayUser.profile_picture} alt={displayUser.username} />
      <h2>{`${displayUser.first_name} ${displayUser.last_name}`}</h2>
      <p>@{displayUser.username}</p>
    </div>
  );
};

export default ProfileCard;
