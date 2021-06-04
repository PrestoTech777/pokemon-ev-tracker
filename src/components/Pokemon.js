import React from 'react';
import Counter from './Counter';

const Pokemon = (props) => {
    return(
        <div>
            <h2>{props.name}/{props.species}</h2>
            <Counter goal={4} name="hp"/>
            <Counter goal={255} name="att"/>
            <Counter goal={0} name="def"/>
            <Counter goal={0} name="spa"/>
            <Counter goal={0} name="spd"/>
            <Counter goal={255} name="spe"/>
        </div>
    )
}

export default Pokemon;