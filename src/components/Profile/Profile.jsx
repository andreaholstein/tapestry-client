// -------------- FXNALITY --------------
// -------------- STYLES --------------
import './Profile.scss'

function Profile({ user }) {

    if (!user) {
        return <>"Loading User"</>;
    }
    console.log("Profile: ", user);
    // testing profile_picture render
    return (
        <section className="profile">
            <div className="profile__wrap">
                {/* <img src={user.profile_picture} alt="Broken Image" className="profile__avatar" /> */}
                <h3 className="profile__name">{user.first_name} {user.last_name}</h3>
                <p className="profile__bio">Lorem, ipsum. Lorem, ipsum.</p>
            </div>
        </section>
    )
}

export default Profile
