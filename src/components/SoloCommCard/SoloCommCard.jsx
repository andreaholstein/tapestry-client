// -------------- FXNALITY --------------
// -------------- STYLES --------------
import './SoloCommCard.scss'

function SoloCommCard({ community }) {

    if (!community) {
        return <>"Loading Community"</>;
    }
    console.log(community);

    return (
        <div className="community">
            <div className="community__wrap">
                <img className="community__photo" src={community.photo} alt={community.alt_text} />
                <div className="community__text">
                    <h2 className="community__title">{community.title}</h2>
                </div>
            </div>
        </div>
    )
}

export default SoloCommCard
