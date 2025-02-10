// -------------- FXNALITY --------------
import axios from 'axios'
import { useState, useEffect } from 'react';
// -------------- COMPONENTS --------------
import Profile from '../../components/Profile/Profile'
import JoinedCommunities from '../../components/JoinedCommunities/JoinedCommunities';
// -------------- STYLES --------------
import './ProfilePage.scss'

function ProfilePage() {

    const url = import.meta.env.VITE_API_URL;
    const authToken = localStorage.getItem("authToken");

    const [user, setUser] = useState(null);
    const [communities, setCommunities] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await axios.get(`${url}users/profile`, {
                    headers: { Authorization: `Bearer ${authToken}` },
                });
                // console.log("ResU: ", response.data);
                setUser(response.data);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };
        getProfile();
    }, []);

    useEffect(() => {
        const getCommunities = async () => {
            try {
                const response = await axios.get(`${url}user-communities`, {
                    headers: { Authorization: `Bearer ${authToken}` },
                });
                // console.log("ResC: ", response.data);
                setCommunities(response.data);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };
        getCommunities();
    }, []);

    console.log("User: ", user);
    console.log("UserComms: ", communities);

    return (
        <section className="profilepage">
            <Profile user={user} />
            <JoinedCommunities communities={communities} />
        </section>
    )
}

export default ProfilePage
