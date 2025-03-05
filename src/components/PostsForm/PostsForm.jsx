import "./PostsForm.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PostsForm({ refreshPosts }) {
  // receive the callback prop
  const url = import.meta.env.VITE_API_URL;
  const { id: communityId } = useParams();
  const navigate = useNavigate();
  const [postText, setPostText] = useState("");
  const [postMedia, setPostMedia] = useState(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!userToken) {
      setError("User is not logged in");
      return;
    }
    if (!communityId) {
      setError("No community selected");
      return;
    }
  }, [userToken, communityId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userToken || !communityId) {
      setError("User or community not found");
      return;
    }

    const formData = new FormData();
    formData.append("post_text", postText);
    formData.append("community_id", communityId);
    if (postMedia) formData.append("post_media", postMedia);

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${url}posts`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.status === 201) {
        setPostText("");
        setPostMedia(null);
        setError("");
        alert("Post submitted successfully!");

        if (refreshPosts) {
          refreshPosts();
        }

        navigate(`/community/${communityId}`);
      }
    } catch (error) {
      console.error("Complete Error Object:", error);
      setError(
        error.response?.data?.details ||
          error.response?.data?.error ||
          "An error occurred while submitting the post."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="post">
      <div className="post__form">
        <form onSubmit={handleSubmit} className="post__form-content">
          <div className="post__form-textbar">
            <textarea
              id="postText"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="Post something..."
              required
              className="post__form-textarea"
            ></textarea>

            {/* Upload Media Button */}
            <div className="post__form-file-container">
              <input
                type="file"
                id="postMedia"
                accept="image/*,video/*"
                onChange={(e) => setPostMedia(e.target.files[0])}
                className="post__form-file-input"
              />
            </div>

            {/* GIF Button */}
            <button type="button" className="post__gif-button">
              GIF
            </button>

            {/* Submit Post Button */}
            <button
              type="submit"
              disabled={isSubmitting || !postText}
              className="post__submit-button"
            >
              {isSubmitting ? "Submitting..." : "Post"}
            </button>
          </div>
        </form>
        {error && <p className="post__error">{error}</p>}
      </div>
    </section>
  );
}

export default PostsForm;
