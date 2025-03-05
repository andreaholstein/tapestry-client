import ProfileCard from "../ProfileCard/ProfileCard";
import "./CommunitySidebar.scss";

const CommunitySidebar = ({ user }) => {
	return (
		<div className="community-sidebar">
			<ProfileCard user={user} /> {/* Uses real user data if available */}
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
