import React from 'react';
import ReactDOM from 'react-dom';
import { Linktree, CHANNEL_TYPES } from 'linkees';

import './css/normalize.css';



const items = [
  {
    title: 'Website',
    subtitle: 'Look at my work!',
    type: CHANNEL_TYPES.WEBSITE,
    link: 'https://laurino.info', //your personal website or portfolio  link
  },
  {
    title: 'GitHub',
    subtitle: '@laurino108 | 🏡 to all my open-source projects',
    type: CHANNEL_TYPES.GITHUB,
    link: 'https://github.com/laurino108', //Github Profile link
  },
  {
    title: 'Instagram',
    subtitle: '@laurino108 |  Shots of my life 🙂',
    type: CHANNEL_TYPES.INSTAGRAM,
    link: 'https://instagram.com/laurino108', //instagram profile link
  },
  {
    title: 'LinkedIn',
    subtitle: 'Know more about my profession 👨‍💼',
    type: CHANNEL_TYPES.LINKEDIN,
    link: 'https://www.linkedin.com/in/laurin-stapf/', // linkedin
  },
  {
    title: 'Twitch',
    subtitle: '@laurino108 | Check out my streams 🎮',
    type: CHANNEL_TYPES.OTHER,
    link: 'https://twitch.tv/laurino108', //Telegram Pofile
    image: 'https://dms.laurino.info/s/fx3JPkp8bNsFqDa/preview',
  },
  {
    title: 'Spotify',
    subtitle: '@laurino108 | Check out my playlists 🎧',
    type: CHANNEL_TYPES.OTHER,
    link: 'https://open.spotify.com/playlist/02zVYmDAZVUP7FHW2jZLOv?si=08688556fccd4c08', //Telegram Pofile
    image: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Linktree headerAvatar='https://github.com/laurino108.png' cardItems={items} />
  </React.StrictMode>,
  document.getElementById('root')
);
