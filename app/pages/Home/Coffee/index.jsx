import React from 'react';

import './styles.less';

const coffee = [
    {
        name: 'Blue Bottle - Oat Milk Capp',
        location: 'Culver City / Playa Vista'
    },
    {
        name: 'Alanas Coffee',
        location: 'Mar Vista'
    },
    {
        name: 'Go Get Em Tiger / G&B',
        location: 'Larchmont / Downtown'
    },
    {
        name: 'and so many more...',
        location: ''
    },
]

export default function Coffee() {
    return (
        <div className="shellText">
            <div className="help-header">Coffee shops who take our money</div>
            <div className="help-subheader">These are solid and mostly in our neighborhood.</div>
            <div className="help-subheader">
                {coffee.map((item, index) => (
                    <div key={`help-${index}`} className="managementCommands">
                        <div className="command">{item.name}</div>
                        <div className="description">{item.location}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}