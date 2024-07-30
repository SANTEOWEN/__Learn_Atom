import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { useParams, useNavigate } from "react-router-dom";

const UserProfile = () => {
    const { username } = useParams()
    const navigate = useNavigate();
    const [gitUserData, setGitUserData] = useState({});

    useEffect(() => {
        const getGitUser = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}`);
                console.log("USER IS HERE", response.data);
                setGitUserData(response.data);
                return response.data;
            } catch (err) {
                console.log("USER IS HERE", err);
                throw new Error("Error fetching user data");
            }
        };
        getGitUser().catch((e) => console.error(e));
    }, [username]);

    return (
        <div className="user-profile-main-cont">
            <div className="top-cont">
                <img
                    src={gitUserData.avatar_url}
                    className="user-avatar-img"
                    alt="user-img"
                />{" "}
                <div className="name-cont">
                    <span>{gitUserData.login}</span>
                    <h1>{gitUserData.name}</h1>
                    <h3>{gitUserData.location}</h3>
                    <div className="follow-cont">
                        <span className="followers">
                            Followers: {gitUserData.followers}
                        </span>
                        <span>Following: {gitUserData.following}</span>
                    </div>
                    <a
                        className="view-ongit-a"
                        href={gitUserData.html_url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>
            <div className="bottom-cont">
                <h3>{gitUserData.bio}</h3>
            </div>
            <button className="view-btn" onClick={() => navigate(`/`)}>Back to users list</button>
        </div>
    );
};

export default UserProfile;
