import React from 'react';
import "./Player.css";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar />
            </div>
            <h1>Welcome to spotify</h1>

        </div>
    );
}

export default Player;