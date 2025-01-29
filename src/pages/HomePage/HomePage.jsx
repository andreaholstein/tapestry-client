// -------------- FXNALITY --------------
// -------------- COMPONENTS --------------
import Welcome from '../../components/Welcome/Welcome'
import CommunityCards from '../../components/CommunityCards/CommunityCards'
// -------------- STYLES --------------
import './HomePage.scss'

function HomePage() {

    return (
        <section className="homepage">
            <Welcome />
            <CommunityCards />
        </section>
    )
}

export default HomePage
