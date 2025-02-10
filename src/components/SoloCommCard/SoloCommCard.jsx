// -------------- FXNALITY --------------
// -------------- STYLES --------------
import './SoloCommCard.scss'

function SoloCommCard({ community }) {

    if (!community) {
        return <>"Loading Community"</>;
    }

    // need to seed community to have a photo

    return (
        <div className="community">
            <div className="community__wrap">
                <img src={community.image} alt={community.alt_text} className="community__image" />
                <div className="community__text">
                    <h2 className="community__title">{community.title}</h2>
                </div>
            </div>
        </div>
    )
}

export default SoloCommCard
