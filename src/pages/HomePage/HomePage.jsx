// -------------- FXNALITY --------------
// -------------- COMPONENTS --------------
import Header from '../../components/Header/Header'
import Welcome from '../../components/Welcome/Welcome'
import CommunityCards from '../../components/CommunityCards/CommunityCards'
// -------------- STYLES --------------
import './HomePage.scss'

function HomePage() {

    return (
        <>
            <Header />
            <CommunityCards />
            <CommunityCards />
        </>
    )
}

export default HomePage
