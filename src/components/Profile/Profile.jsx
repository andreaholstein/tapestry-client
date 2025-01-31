// -------------- FXNALITY --------------
// -------------- STYLES --------------
import './Profile.scss'

function Profile({ user }) {

    return (
        <section className="profile">
            {/* <div className="profile__wrap">
                <img src={soloUser.profile_picture} alt="" className="profile__avatar" /> 
                <h3 className="profile__name">{user.first_name} {user.last_name}</h3>
              <p className="profile__bio">{user.bio}</p> 
            </div> */}
            <div className="profile__wrap">
                <img src="/" alt="Broken Image" className="profile__avatar" />
                <h3 className="profile__name">{user.first_name} {user.last_name}</h3>
                <p className="profile__bio">Lorem, ipsum. Lorem, ipsum.</p>
            </div>
        </section>
    )
}

export default Profile
