import { useContext } from "react"
import UserContext from "../context/userContext"

function Profile() {

    const {user} = useContext(UserContext)

    if (!user || !user.username) return <div className="text-center">Please login</div>;

    return (
        <div className="text-center">
          Welcome {user.username}
        </div>
      );
}

export default Profile
