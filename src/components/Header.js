import React from 'react'

const Header = ({ setSearchTeam, searchTeam, setSortTeams, sortTeams}) => (
    <div className="header">
        <button className="btn" onClick={() => setSortTeams(!sortTeams)} >{sortTeams ? "Z-A" : "A-Z"} <i className="fas fa-align-left"></i></button>
        <form>
            <label className="label" htmlFor="search" ><i className="fas fa-search"></i></label>
            <input className="searchBar" value={searchTeam} id="search" type="text" name="search"  onChange={(e) => setSearchTeam(e.target.value)}/>
        </form>
    </div>
)


export default Header;
