import React from 'react';

import './styles.less';

const music = [
    {
        artist: 'Malphino',
        href: 'https://open.spotify.com/artist/1hWJbIVGfYRmwRgmM6HFij?si=9t6SynL-TzmZlRy86VAYtw'
    },
    {
        artist: 'Nasir - Nas',
        href: 'https://open.spotify.com/album/66EwBbt2kPgugo8Wz0SKAw?si=8t7kCvoBSiGxpbjMNCTbCg'
    },
    {
        artist: 'Ye - Kanye',
        href: 'https://open.spotify.com/album/5EBGCvO6upi3GNknMVe9x9?si=I9E7vBfNQlCjaS4g3_4Rsw'
    },
    {
        artist: 'Psalms Live - Shane & Shane',
        href: 'https://open.spotify.com/album/3UzKQzSKz9lo1rGBDm7iFv?si=66ltVdhkTQy0ZT3kdvRw0w'
    },
    {
        artist: 'Patrick Watson',
        href: 'https://open.spotify.com/artist/7bPs6jf983f0bjRAt1yxDM?si=pvOVGy0PRSOg2pc7PMu3SA'
    },
    {
        artist: 'Blonde - Frank Ocean',
        href: 'https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf?si=z1arQllMQE2zm67B3Rnsjg'
    },
]

export default function Music() {
    return (
        <div className="shellText">
            <div className="help-header">Music I'm listening to right now</div>
            <div className="help-subheader">Links to artists via Spotify.</div>
            <div className="help-header">Artists / Albums</div>
            <div className="help-subheader">
                {music.map((item, index) => (
                    <div key={`help-${index}`} className="managementCommands">
                        <div className="command">{item.artist}</div>
                        <a className="description" href={item.href} target="_blank">
                            LAUNCH
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}