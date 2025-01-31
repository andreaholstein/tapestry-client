import { useEffect, useState } from "react";
import axios from "axios";
import "./PostCard.scss";

const PostCard = ({ post }) => {
	const [postAuthor, setPostAuthor] = useState(null);

	useEffect(() => {
		const fetchPostAuthor = async () => {
			try {
				const { data: userData } = await axios.get(
					`http://localhost:8080/users/${post.user_id}`
				);
				setPostAuthor(userData);
			} catch (error) {
				console.error("Error fetching post author:", error);
			}
		};

		fetchPostAuthor();
	}, [post.user_id]);

	return (
		<div className="post-card">
			<div className="post-header">
				<img
					src={
						postAuthor?.profile_picture ||
						"https://via.placeholder.com/50"
					}
					alt={postAuthor?.username || "User"}
				/>
				<div className="user-info">
					<h3>
						{postAuthor
							? `${postAuthor.first_name} ${postAuthor.last_name}`
							: "Unknown User"}
					</h3>
					<p>@{postAuthor?.username || "unknown"}</p>
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