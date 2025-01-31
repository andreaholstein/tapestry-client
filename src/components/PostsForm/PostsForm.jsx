// -------------- STYLES --------------
import "./PostsForm.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function PostsForm() {
  const url = import.meta.env.VITE_API_URL;
  const { communityId } = useParams();
  const history = useHistory();
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
        history.push(`/community/${communityId}`);
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
      <div className="post-form">
        <h2>Create Post</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="postText">Post Text</label>
            <textarea
              id="postText"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="form-field">
            <label>Community</label>
            <p>
              {communityId
                ? `Posting in Community ID: ${communityId}`
                : "Loading..."}
            </p>
          </div>

          <div className="form-field">
            <label htmlFor="postMedia">Post Media</label>
            <input
              type="file"
              id="postMedia"
              accept="image/*,video/*"
              onChange={(e) => setPostMedia(e.target.files[0])}
            />
          </div>

          <button type="submit" disabled={isSubmitting || !communityId}>
            {isSubmitting ? "Submitting..." : "Submit Post"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PostsForm;
