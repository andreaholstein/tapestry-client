import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// -------------- COMPONENTS --------------
import CommunitySidebar from "../../components/CommunitySidebar/CommunitySidebar";
import PostCard from "../../components/PostCard/PostCard";
import PostsForm from "../../components/PostsForm/PostsForm";
// -------------- STYLES --------------
import "./CommunityPage.scss";

const CommunityPage = () => {
  const { id } = useParams();
  const [community, setCommunity] = useState(null);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch community and user data
  useEffect(() => {
    const fetchCommunityData = async () => {
      try {
        const token = localStorage.getItem("authToken");

        const { data: communityData } = await axios.get(
          `http://localhost:8080/communities/${id}`
        );
        setCommunity(communityData);

        if (token) {
          const { data: userData } = await axios.get(
            "http://localhost:8080/users/profile",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setUser(userData);
        }
      } catch (error) {
        console.error("Error fetching community or user:", error);
      }
    };

    fetchCommunityData();
  }, [id]);

  // Function to fetch posts; can be called on mount and after a new post submission
  const fetchPosts = async () => {
    try {
      const { data: postsData } = await axios.get(
        `http://localhost:8080/posts`,
        {
          params: { community_id: id },
        }
      );
      setPosts(postsData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!community) return <p>Community not found.</p>;

  return (
    <div className="community-page">
      <CommunitySidebar user={user} />
      <div className="community-feed">
        <h1>{community.name} Feed</h1>
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p>No posts yet.</p>
        )}
        {/* Pass fetchPosts as a callback prop so PostsForm can refresh posts after submission */}
        <PostsForm refreshPosts={fetchPosts} />
      </div>
    </div>
  );
};

export default CommunityPage;
