import "./PostCard.scss";

const PostCard = ({ post }) => {
	return (
		<div className="post-card">
			<div className="post-header">
				<img
					src={post.profile_picture || "https://via.placeholder.com/50"}
					alt={post.username || "User"}
				/>
				<div className="user-info">
					<h3>{post.first_name ? `${post.first_name} ${post.last_name}` : "Unknown User"}</h3>
					<p>@{post.username || "unknown"}</p>
				</div>
			</div>
			<p className="post-content">{post.post_text}</p>
			{post.post_media && (
				<div className="post-media">
					<img src={post.post_media} alt="Post media" />
				</div>
			)}
			<div className="post-actions">
				<button>❤️ Like</button>
				<button>💬 Comment</button>
			</div>
		</div>
	);
};

export default PostCard;
