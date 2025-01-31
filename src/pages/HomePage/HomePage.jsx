// -------------- FXNALITY --------------
import axios from 'axios';
import { useState, useEffect } from 'react';
// -------------- COMPONENTS --------------
import Welcome from '../../components/Welcome/Welcome'
import CommunityCards from '../../components/CommunityCards/CommunityCards'
// -------------- STYLES --------------
import './HomePage.scss'

function HomePage({ url, authToken }) {

    // const url = import.meta.env.VITE_API_URL;
    // const authToken = localStorage.getItem("authToken");

    // STATE VARIABLES FOR API CALL
    const [userCommunities, setUserCommunities] = useState([]);
    const [soloUser, setSoloUser] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(`${url}users/profile`, {
                    headers: { Authorization: `Bearer ${authToken}` },
                });
                setSoloUser(response.data);
            } catch (error) {
                console.error(error);
                setError(error);
            }

            // if (user_id === users[0].id) {
            //     setSoloUser(users.name);
            //     // setUserCommunities(users.communities);
            // }
        };
        getUser();
    }, []);

    useEffect(() => {
        const getUserCommunities = async () => {
            try {
                const response = await axios.get(`${url}user-communities`, {
                    headers: { Authorization: `Bearer ${authToken}` },
                });
                setUserCommunities(response.data);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };
        getUserCommunities();
    }, []);

    return (
        <section className="homepage">
            <Welcome user={soloUser} communities={userCommunities} />
            <CommunityCards communities={userCommunities} />
        </section>
    )
}

export default HomePage
