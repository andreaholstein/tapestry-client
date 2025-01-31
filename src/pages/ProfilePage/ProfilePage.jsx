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
    // const { id } = useParams();

    // STATE VARIABLES FOR API CALL
    // const [users, setUsers] = useState([]);
    // const [soloUser, setSoloUser] = useState(null);
    // const [userCommunities, setUserCommunities] = useState([]);
    // const [error, setError] = useState(null);

    useEffect(() => {
        // // AXIOS GET
        const getProfile = async () => {
            try {
                const response = await axios.get(`${url}users/profile`, {
                    headers: { Authorization: `Bearer ${authToken}` },
                });
                console.log(response.data);

                // setUsers(response.data);
            } catch (error) {
                console.error(error);
                setError(error);
            }

            // if (id === users.id) {
            //     setSoloUser(users.name);
            //     setUserCommunities(users.communities);
            // }
        };
        // LOAD API DATA ONTO SCREEN
        // getProfile();
    }, []); // [] = runs once + right away!

    return (
        <section className="profilepage">
            <Profile />
            <JoinedCommunities />
            {/* ^^ axios request currently on JoinedCommunities */}
        </section>
    )
}

export default ProfilePage
