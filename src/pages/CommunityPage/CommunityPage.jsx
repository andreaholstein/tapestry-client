// -------------- FXNALITY --------------
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// -------------- COMPONENTS --------------
import Header from "../../components/Header/Header";
import CommunitySidebar from "../../components/CommunitySidebar/CommunitySidebar";
import PostCard from "../../components/PostCard/PostCard";
// -------------- STYLES --------------
import "./CommunityPage.scss";

const CommunityPage = () => {
	const { id } = useParams();
	const [community, setCommunity] = useState(null);
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCommunityData = async () => {
			try {
				// Fetch community details
				const { data: communityData } = await axios.get(`http://localhost:8081/communities/${id}`);
				setCommunity(communityData);

				// Fetch posts for this community
				const { data: postsData } = await axios.get(`http://localhost:8081/posts`, {
					params: { community_id: id }
				});
				setPosts(postsData);
			} catch (error) {
				console.error("Error fetching community or posts:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchCommunityData();
	}, [id]);

	if (loading) return <p>Loading...</p>;
	if (!community) return <p>Community not found.</p>;

	return (
		<div className="community-page">
			<Header />
			<CommunitySidebar />
			<div className="community-feed">
				<h1>{community.name} Feed</h1>
				{posts.length > 0 ? (
					posts.map((post) => <PostCard key={post.id} post={post} />)
				) : (
					<p>No posts yet.</p>
				)}
			</div>
		</div>
	);
};

export default CommunityPage;
