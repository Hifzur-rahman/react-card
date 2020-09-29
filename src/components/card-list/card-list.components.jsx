import React from 'react';

import { Card } from '../card/card.components';

import './card-list.styles.scss';

export const CardList  = props =>(
    <div className='card-list'>
        {props.program.map(programs => (
            <Card key={programs.id} programs={programs}/> 
        ))}
    </div>
)



