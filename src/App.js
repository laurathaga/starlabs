import './styles/styles.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';

//Try without "https://cors-anywhere.herokuapp.com/" see if it works!
//Link modified because of cross origin resource sharing 
const url = 'https://cors-anywhere.herokuapp.com/https://api.first.org/data/v1/teams';

const App = () => {
    const [teams, setTeams] = useState([]);
    const [searchTeam, setSearchTeam] = useState('');
    const [sortTeams, setSortTeams] = useState(true);

    //Send the sorted teams to render
    const sorted = teams.sort((a, b) => {
        const {"team-full": t_f1} = a;
        const {"team-full": t_f2} = b;
        const isReversted = (sortTeams === false) ? 1 : -1;
        return isReversted * t_f1.localeCompare(t_f2);
    });

    useEffect(() => {

        (async function() {
            try{
                const response = await axios.get(url); 
                const data = await response.data.data;
                setTeams(data);
            }
            catch(e){
                console.log(e);   
            }
        }());
        
    },[]);
    
    return (
        <div className="container" >
            <Header 
                setSearchTeam={setSearchTeam} 
                searchTeam={searchTeam}
                sortTeams={sortTeams}
                setSortTeams={setSortTeams}
            />
            <Cards sorted={sorted} searchTeam={searchTeam}/>
        </div>
    )
}

export default App;
