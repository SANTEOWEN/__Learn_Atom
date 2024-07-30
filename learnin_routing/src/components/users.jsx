import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  //State management
  const [gitUsers, setGitUsers] = useState([]);
  const navigate = useNavigate();

  const getGitUsers = async () => {
    try {
      const response = await axios.get("https://api.github.com/users?since=XXXX");
      setGitUsers(response.data);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log("Error fetching users", err);
      throw err;
    }
  };

  useEffect(() => {
    getGitUsers().catch((e) => console.error(e));
  }, []);
  return (
    <div style={{ marginTop: "50px" }}>
      {" "}
      <div className="users-cont">
        {gitUsers.map((user) => (
          <div className="user-card-cont" key={user.id}>
            <img
              src={user.avatar_url}
              alt="userAvatar"
              className="user-avatar"
            />
            <span className="username">{user.login}</span>

            {/* Redirect to UserProfile component with user's login as a parameter */}
            {/* <Link to={`/users/user/${user.login}`} className="view-btn">View User</Link> */}

            
            <button className="view-btn" onClick={() => navigate(`/users/user/${user.login}`)}>View User</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
