// -------------- FXNALITY --------------
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// -------------- COMPONENTS --------------
import CommunitySidebar from "../../components/CommunitySidebar/CommunitySidebar";
import PostCard from "../../components/PostCard/PostCard";
// -------------- STYLES --------------
import "./CommunityPage.scss";
import PostsForm from "../../components/PostsForm/PostsForm";

const CommunityPage = () => {
  const { id } = useParams();
  const [community, setCommunity] = useState(null);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

        const { data: postsData } = await axios.get(
          `http://localhost:8080/posts`,
          {
            params: { community_id: id },
          }
        );
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching community, user, or posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommunityData();
  }, [id]);

  if (loading) return <p>Loading ... </p>
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
        <PostsForm />
      </div>
    </div>
  );
};

export default CommunityPage;
