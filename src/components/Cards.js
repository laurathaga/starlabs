import React from 'react'
import Card from './Card';

const Cards = ({sorted, searchTeam}) => {
    const filterTeams = sorted.filter(team => {
        const {"team-full": team_full} = team;
        if(team_full === '' || team_full.toLowerCase().includes(searchTeam.toLowerCase())) 
            return team_full;
    })

    return (
        <div className="card-wrapper" >
            {
                filterTeams.map((team, index) => <Card team={team} key={index}/>)
            }
        </div>
    )
}

export default Cards;
