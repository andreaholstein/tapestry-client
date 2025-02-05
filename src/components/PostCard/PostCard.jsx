import { useEffect, useState } from "react";
import axios from "axios";
import "./PostCard.scss";

const PostCard = ({ post }) => {
  const [postAuthor, setPostAuthor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPostAuthor = async () => {
      if (!post.user_email) {
        setError("No user email provided");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const { data: userData } = await axios.get(
          `http://localhost:8080/users?email=${encodeURIComponent(
            post.user_email
          )}`
        );

        setPostAuthor(userData);
        setIsLoading(false);
      } catch (err) {
        console.error("Error details:", {
          message: err.message,
          response: err.response?.data,
          status: err.response?.status,
        });
        setError(`Failed to load user information: ${err.message}`);
        setIsLoading(false);
      }
    };

    fetchPostAuthor();
  }, [post.user_email]);

  return (
    <div className="post-card">
      <div className="post-header">
        <img
          src={
            postAuthor?.profile_picture
              ? `http://localhost:8080/${postAuthor.profile_picture}`
              : "https://via.placeholder.com/50"
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
          <img
            src={`http://localhost:8080/${post.post_media}`}
            alt="Post media"
          />
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
