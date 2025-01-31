// -------------- FXNALITY --------------
import axios from 'axios';
import { useState, useEffect } from 'react';
// -------------- COMPONENTS --------------
import SoloCommCard from '../SoloCommCard/SoloCommCard'
// -------------- STYLES --------------
import './CommunityCards.scss'

function CommunityCards(communities) {

    console.log("Comms: ", communities);


    return (
        <section className="community-cards">
            {communities.map((community) => {
                return (
                    <Link
                        to={`path to community`}
                        key={community.id}
                        className="community-card__link"
                    >
                        <SoloCommCard community={community} />
                    </Link>
                )
            })}
        </section >
    )
}

export default CommunityCards
