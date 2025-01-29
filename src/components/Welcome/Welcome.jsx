// -------------- FXNALITY --------------
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// -------------- STYLES --------------
import './Welcome.scss'

function Welcome() {
    const url = import.meta.env.VITE_API_URL;
    // const { id } = useParams();

    // STATE VARIABLES FOR API CALL
    const [users, setUsers] = useState([]);
    const [soloUser, setSoloUser] = useState(null);
    const [userCommunities, setUserCommunities] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // AXIOS GET
        const getUser = async () => {
            try {
                const response = await axios.get(`${url}/users`);
                console.log(response.data);

                setUsers(response.data);
            } catch (error) {
                console.error(error);
                setError(error);
            }

            if (id === users.id) {
                setSoloUser(users.name);
                setUserCommunities(users.communities);
            }
        };
        // LOAD API DATA ONTO SCREEN
        getUsers();
    }, []); // [] = runs once + right away!


    return (
        <section className="welcome">
            <div className="welcome__wrap">
                <div className="welcome__content welcome__graphics welcome__graphics--left">!</div>
                <div className="welcome__text-wrap">
                    {/* <h2 className="welcome__greeting">Welcome back, <span className="welcome__name">{soloUser}</span>!</h2> */}
                    <h2 className="welcome__content welcome__greeting">Welcome back,<span className="welcome__name"> SAM</span>!</h2>
                    {/* <p className="welcome__alert">You have {userCommunities.length} communities waiting for your to check in!</p> */}
                    <p className="welcome__alert">You have 4 communities waiting for your to check in!</p>
                </div>
                <div className="welcome__content welcome__graphics welcome__graphics--right">!</div>
            </div>
        </section >
    )
}

export default Welcome
