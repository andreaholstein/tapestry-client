// -------------- FXNALITY --------------
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
// -------------- COMPONENTS --------------
import SoloCommCard from '../SoloCommCard/SoloCommCard';
// -------------- STYLES --------------
import './JoinedCommunities.scss'

function JoinedCommunities() {
    // RECYCLED FROM COMMUNITYCARDS

    const url = import.meta.env.VITE_API_URL;

    // STATE VARIABLES FOR API CALL
    const [communities, setCommunities] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // AXIOS GET
        const getCommunities = async () => {
            try {
                const response = await axios.get(`${url}user-communities`);
                console.log(response.data);
                setCommunities(response.data);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };
        // LOAD API DATA ONTO SCREEN
        getCommunities();
    }, []); // [] = runs once + right away!

    console.log(communities);

    return (
        <section className="joined">
            {communities.map((community) => {
                return (
                    <Link
                        to={`path to community`}
                        className="joined__link"
                    >
                        <SoloCommCard community={community} key={community.community_id} />
                    </Link>
                )
            })}
        </section>
    )
}

export default JoinedCommunities
