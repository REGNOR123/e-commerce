import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Profile.css';

export const Profile = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState([]);

    useEffect(() => {
        getProfilePicture();
    }, []);

    const getProfilePicture = async () => {
        try {
            let result = await fetch('http://localhost:5000/getProfilePic');
            result = await result.json();

            console.log(result);
            setProfilePicture(result);
        } catch (error) {
            console.error("Error fetching profile picture:", error);
        }
    }

    console.log(userName);
    console.log(profilePicture[0]);

    return (
        <>
            <div>
                <div className="profile">
                    <h1>Edit Profile</h1>
                    {profilePicture.map((image) => (
          <div key={image._id}>
            <h3>{image.originalname}</h3>
            <img
              src={`http://localhost:3000/${image.path}`} // Assuming your server serves static files from the root
              alt={profilePicture.originalname}
               
            />
          </div>
        ))}
                    <Link to="/edit-profile-picture">Edit profile picture</Link>

                    <input type="text" placeholder="Enter UserName" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type="button">Login</button>
                </div>
            </div>
        </>
    );
}
