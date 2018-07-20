import React from 'react';

import './styles.less';

const food = [
    {
        name: 'Republique - Hancock Park',
        href: 'https://www.yelp.com/biz/r%C3%A9publique-los-angeles-2'
    },
    {
        name: 'Taco Maria - Costa Mesa',
        href: 'https://www.yelp.com/biz/taco-maria-costa-mesa'
    },
    {
        name: 'Tacos Tamix - Palms/Culver City',
        href: 'https://www.yelp.com/biz/tacos-tamix-los-angeles-8'
    },
    {
        name: 'Lodge Bread',
        href: 'https://www.yelp.com/biz/lodge-bread-los-angeles'
    },
    {
        name: 'Chego / Alibi Room - Culver City',
        href: 'https://www.yelp.com/biz/alibi-room-los-angeles-2'
    },
]

export default function Music() {
    return (
        <div className="shellText">
            <div className="help-header">Restaurants I'd Recommend</div>
            <div className="help-subheader">Links to restaurants via Yelp</div>
            <div className="help-header">List</div>
            <div className="help-subheader">
                {food.map((item, index) => (
                    <div key={`help-${index}`} className="managementCommands">
                        <div className="command">{item.name}</div>
                        <a className="description" href={item.href} target="_blank">
                            LAUNCH
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}