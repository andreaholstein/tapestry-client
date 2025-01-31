import "./ProfileCard.scss";

const ProfileCard = ({ user }) => {
	return (
		<div className="profile-card">
			<img
				src={user?.profilePic || "https://via.placeholder.com/80"}
				alt={user?.name}
			/>
			<h2>{user?.name || "Guest User"}</h2>
			<p>@{user?.username || "guest"}</p>
		</div>
	);
};

export default ProfileCard;
