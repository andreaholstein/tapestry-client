// -------------- FXNALITY --------------
// -------------- ICONS --------------
import Star from "../../assets/images/Star"
// -------------- STYLES --------------
import './Profile.scss';

function Profile({ user }) {
    const placeholderUser = {
        first_name: "@",
        last_name: "User",
        username: "@user",
        profile_picture: "https://via.placeholder.com/80",
    };

    const displayUser = user || placeholderUser;

    if (!user) {
        return <div className="loading">
            <svg className="loading__wheel" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 16L19 19M18 12H22M8 8L5 5M16 8L19 5M8 16L5 19M2 12H6M12 2V6M12 18V22" stroke="#f38181" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="loading__text">Loading User</h3>
        </div>
    }

    return (
        <section className="profile">
            <div className="profile__wrap">
                <div className="profile__img-wrap">
                    <div className="profile__shrink">
                        <Star />
                    </div>
                    <img className="profile__avatar" src={
                        displayUser.profile_picture
                            ? `http://localhost:8080/${displayUser.profile_picture}`
                            : "https://via.placeholder.com/150"
                    }
                        alt={displayUser.username || "User"}
                    />
                    <div className="profile__shrink">
                        <Star />
                    </div>
                </div>
                <h3 className="profile__name">{displayUser.first_name} {displayUser.last_name}</h3>
                <h4 className="profile__username">@{displayUser.username}</h4>
                <p className="profile__bio">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa iusto facilis ipsam id delectus iste quaerat molestias quod aliquid quibusdam nam debitis suscipit excepturi, dicta illo autem. Pariatur, perferendis iure.
                    Sunt laudantium quo assumenda est rem autem veritatis nisi similique voluptatem vero ullam dolor, architecto magni nobis accusamus deleniti debitis? Iste obcaecati ipsa dolor ea laborum sequi reiciendis modi maiores!</p>
            </div>
        </section>
    );
}

export default Profile;
