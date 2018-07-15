import React, { Component } from 'react';

import './styles.less';

const managementCommands = [
    {
        command: 'help',
        description: '- what even is this? list helpful commands'
    },
    {
        command: 'bio',
        description: '- tell me about yourself'
    },
    {
        command: 'linkedin',
        description: '- link to my LinkedIn profile'
    },
    {
        command: 'github',
        description: '- link to my GitHub profile'
    },
    {
        command: 'twitter',
        description: '- link to my Twitter profile'
    },
    {
        command: 'behance',
        description: '- link to my Twitter profile'
    },
    {
        command: 'resume',
        description: '- open my resume in a new window'
    },
];

export default function Help() {
    return (
        <div className="shellText">
            <div className="help-header">Carlos Corral</div>
            <div className="help-subheader">Greetings! Welcome to Carlos' Site.</div>
            <div className="help-subheader">This is a self-sufficient runtime for getting to know me. Enjoy!</div>
            <div className="help-header">Commands</div>
            <div className="help-subheader">
                {managementCommands.map((mgmntCommand, index) => (
                    <div key={`help-${index}`} className="managementCommands">
                        <div className="command">{mgmntCommand.command}</div>
                        <div className="description">{mgmntCommand.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}