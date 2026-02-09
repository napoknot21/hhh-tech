import userIcon from "../../assets/images/common/user.png";

const LOGIN_URL = "https://investors.heroics-capital.com/";

export default function UserMenu() {

    const onClick = () => {
        window.open(LOGIN_URL, "_blank", "noopener,noreferrer");
    };

    return (
        <button className="user-menu-btn" type="button" onClick={onClick} aria-label="Login">
            <img className="user-menu-icon" src={userIcon} alt="" />
        </button>
    );

}
