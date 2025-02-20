// -------------- FXNALITY --------------
// -------------- ICONS --------------
import Star from "../../assets/images/Star"
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

    return (
        <section className="profile">
            <div className="profile__wrap">
                <div className="profile__img-wrap">
                    <Star />
                    <img className="profile__avatar" src={
                        displayUser.profile_picture
                            ? `http://localhost:8080/${displayUser.profile_picture}`
                            : "https://via.placeholder.com/150"
                    }
                        alt={displayUser.username || "User"}
                    />
                    <Star />
                </div>
                <h3 className="profile__name">{displayUser.first_name} {displayUser.last_name}</h3>
                <h4 className="profile__username">@{displayUser.username}</h4>
                <p className="profile__bio">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa iusto facilis ipsam id delectus iste quaerat molestias quod aliquid quibusdam nam debitis suscipit excepturi, dicta illo autem. Pariatur, perferendis iure.
                    Sunt laudantium quo assumenda est rem autem veritatis nisi similique voluptatem vero ullam dolor, architecto magni nobis accusamus deleniti debitis? Iste obcaecati ipsa dolor ea laborum sequi reiciendis modi maiores!</p>
            </div>
        </section>
    )
}

export default Profile
