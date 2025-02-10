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
                <img className="profile__avatar" src={user.profile_picture} alt={`Image of ${user.username}`} />
                <h3 className="profile__name">{user.first_name} {user.last_name}</h3>
                <p className="profile__bio">Lorem, ipsum. Lorem, ipsum.</p>
            </div>
        </section>
    )
}

export default Profile
