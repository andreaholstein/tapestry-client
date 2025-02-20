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
            <div className="profilepage__section profilepage__section--left">
                <Profile user={user} />
            </div>
            <div className="profilepage__section profilepage__section--right">
                <JoinedCommunities communities={communities} />
            </div>
        </section>
    )
}

export default ProfilePage
