// -------------- FXNALITY --------------
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
// -------------- COMPONENTS --------------
import SoloCommCard from '../SoloCommCard/SoloCommCard';
// -------------- STYLES --------------
import './JoinedCommunities.scss'

function JoinedCommunities({ communities }) {

    if (!communities) {
        return <>"Loading Communities"</>;
    }

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
