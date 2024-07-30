import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

const RepoList = () => {
  //State management
  const [repos, setRepos] = useState(null);
  const gitRepos = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/search/repositories?q=XXX"
      );
      console.log(response.data.items);
      setRepos(response.data.items);
      return response.data;
    } catch (err) {
      console.error(err);
      throw new Error
    }
  };


  useEffect(() => {
    gitRepos().catch((e) => console.error(e));
  }, []);

  const navigateToUser = useNavigate();

  return (
    <div className="users-cont">
      {repos ? (
        repos.map((repo) => (
          <div className="user-card-cont" key={repo.id}>
            <img
              src={repo.owner.avatar_url}
              alt="userAvatar"
              className="user-avatar"
            />
            <span className="username">{repo.name}</span>

            <span className="repo-lang-span">Language: {repo.language}</span>
            <div>
              By: <button className="repo-owner">{repo.owner.login}</button>
            </div>

            <button>
              <button onClick={() => navigateToUser(`/users/user/${repo.owner.login}`)}>View Repo</button>
            </button>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
      <Link to="/users">Go To Users Page</Link>
    </div>
  );
};

export default RepoList;
