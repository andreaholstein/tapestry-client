// -------------- FXNALITY --------------
import axios from 'axios';
import { useState, useEffect } from 'react';
// -------------- COMPONENTS --------------
import Welcome from '../../components/Welcome/Welcome'
import CommunityCards from '../../components/CommunityCards/CommunityCards'
// -------------- STYLES --------------
import './HomePage.scss'

function HomePage() {

    const url = import.meta.env.VITE_API_URL;
    const authToken = localStorage.getItem("authToken");
    // console.log(authToken);


    // STATE VARIABLES FOR API CALL
    const [soloUser, setSoloUser] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // AXIOS GET
        const getUser = async () => {
            try {
                const response = await axios.get(`${url}user-communities`, {
                    headers: { Authorization: `Bearer ${authToken}` },
                });
                // setSoloUser(response.data);
                setSoloUser(response.data[0]);

            } catch (error) {
                console.error(error);
                setError(error);
            }

            // if (user_id === users[0].id) {
            //     setSoloUser(users.name);
            //     // setUserCommunities(users.communities);
            // }
        };
        // LOAD API DATA ONTO SCREEN
        getUser();
    }, []); // [] = runs once + right away!


    console.log("Solo: ", soloUser);


    return (
        <section className="homepage">
            <Welcome user={soloUser} />
            <CommunityCards user={soloUser} />
        </section>
    )
}

export default HomePage
