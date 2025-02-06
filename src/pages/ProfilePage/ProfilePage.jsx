// -------------- FXNALITY --------------
import axios from "axios";
import { useState, useEffect } from "react";
// -------------- COMPONENTS --------------
import Profile from "../../components/Profile/Profile";
import JoinedCommunities from "../../components/JoinedCommunities/JoinedCommunities";
// -------------- STYLES --------------
import "./ProfilePage.scss";

function ProfilePage({ authToken }) {
  const [user, setUser] = useState(null);
  const [communities, setCommunities] = useState([]);
  const [error, setError] = useState(null);
  const url = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get(`${url}users/profile`, {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        console.log("User Data:", response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError(error);
      }
    };
    getProfile();
  }, [url, authToken]);

  useEffect(() => {
    const getCommunities = async () => {
      try {
        const response = await axios.get(`${url}user-communities`, {
          headers: { Authorization: `Bearer ${authToken}` },
        });

        if (Array.isArray(response.data)) {
          setCommunities(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
          setCommunities([]);
        }
      } catch (error) {
        console.error("Error fetching user communities:", error);
        setError(error);
        setCommunities([]); 
      }
    };
    getCommunities();
  }, [url, authToken]);

  return (
    <section className="profilepage">
      <Profile user={user} />
      {Array.isArray(communities) && communities.length > 0 ? (
        <JoinedCommunities communities={communities} />
      ) : (
        <p>No communities joined yet.</p>
      )}
    </section>
  );
}

export default ProfilePage;
