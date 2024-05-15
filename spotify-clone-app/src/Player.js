import React from 'react';
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from './Boody';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar />
                <Body />
            </div>
            <h1>Welcome to spotify</h1>

        </div>
    );
}

export default Player;