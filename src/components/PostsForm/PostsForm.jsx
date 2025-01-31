// -------------- STYLES --------------
import "./PostsForm.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PostsForm() {
  const url = import.meta.env.VITE_API_URL;
  const { communityId } = useParams();
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
    }
  }, [userToken, communityId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userToken || !communityId) {
      setError("User or community not found");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("post_text", postText);
    formData.append("community_id", communityId);
    if (postMedia) formData.append("post_media", postMedia);

    try {
      const response = await axios.post(`${url}/posts`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        setPostText("");
        setPostMedia(null);
        setError("");
        alert("Post submitted successfully!");
        navigate(`/community/${communityId}`);
      }
    } catch (error) {
      console.error("Error posting data:", error);
      setError("An error occurred while submitting the post.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="post">
      <div className="post__form">
        <h2 className="post__title">Create Post</h2>
        {error && <p className="post__error">{error}</p>}
        <form onSubmit={handleSubmit} className="post__form-content">
          <div className="post__form-field">
            <label htmlFor="postText" className="post__form-label">
              Post Text
            </label>
            <textarea
              id="postText"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              required
              className="post__form-textarea"
            ></textarea>
          </div>

          <div className="post__form-field">
            <label className="post__form-label">Community</label>
            <p className="post__community-info">
              {communityId
                ? `Posting in Community ID: ${communityId}`
                : "Loading..."}
            </p>
          </div>

          <div className="post__form-field">
            <label htmlFor="postMedia" className="post__form-label">
              Post Media
            </label>
            <input
              type="file"
              id="postMedia"
              accept="image/*,video/*"
              onChange={(e) => setPostMedia(e.target.files[0])}
              className="post__form-file-input"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !communityId}
            className="post__submit-button"
          >
            {isSubmitting ? "Submitting..." : "Submit Post"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PostsForm;
