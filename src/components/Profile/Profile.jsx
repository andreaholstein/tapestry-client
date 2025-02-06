// -------------- FXNALITY --------------
// -------------- STYLES --------------
import './Profile.scss';

function Profile({ user }) {
    // Ensure `user` exists before trying to access its properties
    if (!user) {
        return <p>Loading profile...</p>;
    }

    return (
        <section className="profile">
            <div className="profile__wrap">
                <img 
                    src={user.profile_picture || "/default-avatar.png"} 
                    alt={`${user.first_name || "User"}'s Profile`} 
                    className="profile__avatar" 
                />
                <h3 className="profile__name">
                    {user.first_name} {user.last_name}
                </h3>
                <p className="profile__bio">{user.bio || "No bio available."}</p>
            </div>
        </section>
    );
}

export default Profile;
