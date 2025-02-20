// -------------- FXNALITY --------------
// -------------- STYLES --------------
import './Profile.scss'

function Profile({ user }) {
    const placeholderUser = {
        first_name: "@",
        last_name: "User",
        username: "@user",
        profile_picture: "https://via.placeholder.com/80",
    };

    const displayUser = user || placeholderUser;

    if (!user) {
        return <>"Loading User"</>;
    }
    console.log("Profile: ", user);
    // testing profile_picture render
    return (
        <section className="profile">
            <div className="profile__wrap">
                <img className="profile__avatar" src={
                    displayUser.profile_picture
                        ? `http://localhost:8080/${displayUser.profile_picture}`
                        : "https://via.placeholder.com/150"
                }
                    alt={displayUser.username || "User"}
                />
                <h3 className="profile__name">{displayUser.first_name} {displayUser.last_name}</h3>
                <p className="profile__bio">Lorem, ipsum. Lorem, ipsum.</p>
            </div>
        </section>
    )
}

export default Profile
