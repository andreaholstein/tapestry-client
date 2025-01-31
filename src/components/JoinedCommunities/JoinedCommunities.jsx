// -------------- FXNALITY --------------
import axios from 'axios';
import { useState, useEffect } from 'react';
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
                const response = await axios.get(`${url}/users`);
                console.log(response.data);
                // need communities for user

                setCommunities(response.data);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };
        // LOAD API DATA ONTO SCREEN
        getCommunities();
    }, []); // [] = runs once + right away!

    return (
        <section className="joined">
            {communities.map((community) => {
                return (
                    <Link
                        to={`path to community`}
                        key={community.id}
                        className="joined__link"
                    >
                        <SoloCommCard community={community} />
                    </Link>
                )
            })}
        </section>
    )
}

export default JoinedCommunities
