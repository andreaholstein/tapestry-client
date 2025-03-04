// -------------- FXNALITY --------------
// -------------- STYLES --------------
import './SoloCommCard.scss'

function SoloCommCard({ community }) {

    if (!community) {
        return <div className="profile__loading">
            <svg className="profile__loading-wheel" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 16L19 19M18 12H22M8 8L5 5M16 8L19 5M8 16L5 19M2 12H6M12 2V6M12 18V22" stroke="#f38181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h3 className="profile__loading-text">Loading Community</h3>
        </div>
    }

    return (
        <div className="community">
            <div className="community__wrap">
                <img className="community__photo" src={`http://localhost:8080/${community.photo}`} alt={community.alt_text} />
                <div className="community__text">
                    <h2 className="community__title">{community.title}</h2>
                </div>
            </div>
        </div>
    )
}

export default SoloCommCard
