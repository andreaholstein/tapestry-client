import ProfileCard from "../ProfileCard/ProfileCard";
import "./CommunitySidebar.scss";

const CommunitySidebar = () => {
	const placeholderUser = {
		name: "Community Member",
		username: "member",
		profilePic: "https://via.placeholder.com/80",
	};

	return (
		<div className="community-sidebar">
			<ProfileCard user={placeholderUser} />
			<button className="create-post-btn">+ Create a post</button>
			<nav>
				<ul>
					<li>📢 News Feed</li>
					<li>
						💬 Messages{" "}
						<span className="notification-badge">3</span>
					</li>
					<li>👥 Friends</li>
					<li>⚙️ Settings</li>
					<li>🚪 Log Out</li>
				</ul>
			</nav>
		</div>
	);
};

export default CommunitySidebar;
