import React from 'react';

import './styles.less';

const drink = [
    {
        name: 'Mezcal - Any',
        href: 'https://drinks.seriouseats.com/2012/05/all-about-mezcal-what-is-mezcal-worm-tequila-history-production-sombra-illegal-del-maguey-best-mezcal.html'
    },
    {
        name: 'Roasted Orange Negroni',
        href: 'http://imbibemagazine.com/roasted-orange-negroni-sbagliato-recipe/'
    },
    {
        name: 'Taco Truck - Corner Door, LA',
        href: 'http://imbibemagazine.com/taco-truck-recipe/'
    },
    {
        name: 'Gold Rush',
        href: 'https://www.seriouseats.com/recipes/2015/03/gold-rush-bourbon-honey-cocktail-drink-recipe.html'
    },
]

export default function Drink() {
    return (
        <div className="shellText">
            <div className="help-header">Spirits and Cocktails</div>
            <div className="help-subheader">Booz and their history or recipes</div>
            <div className="help-subheader">
                {drink.map((item, index) => (
                    <div key={`help-${index}`} className="managementCommands">
                        <a className="command" href={item.href} target="_blank">
                        {item.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}