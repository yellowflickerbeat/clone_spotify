import React from 'react';
import "./Footer.css";
import PlayIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousIcon from '@mui/icons-material/SkipPreviousRounded';
import ShuffleIcon from '@mui/icons-material/ShuffleRounded';
import RepeatIcon from '@mui/icons-material/RepeatOutlined';
import { Grid, SLider } from '@mui/core';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';


function Footer() {
    return(
        <div className="footer">
            <div className="footer_left">
                <img
                  className="foo"
                src="" alt=""/>
                <div className="footer_songInfo">
                  <h4> American Idiot </h4>
                  <p> Green Day </p>
                </div>
            </div>

            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayIcon fontSize="large" className="footer_green" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
            </div>
            

            <div className="footer_right">
                <Grid conteiner spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;

