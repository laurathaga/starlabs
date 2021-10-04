import React from 'react'

const Card = ({team}) => {
    const {"team-full": team_full, address, phone, email, website, establishment, "constituency-description": cd} = team;
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front"> 
                    <h2>{team_full}</h2>
                    <small>{establishment}</small>    
                    {cd ? <p className="card__desc" >{cd}</p> : <p className="card__error" ><i className="far fa-angry"></i> Description about this team is missing at the moment!!!</p>}
                    {/* these links only show up on mobile version */}
                    <div className="card__links-front">
                        <a href="#" className="link front--link" ><i className="fas fa-phone-alt"></i>: {phone ? phone : 'Ooops! Missing'}</a>
                        <a href="#" className="link front--link" ><i className="fas fa-globe"></i>: {website ? website : 'Ooops! Missing'}</a>
                        <a href="#" className="link front--link" ><i className="fas fa-envelope"></i>: {email ? email : 'Ooops! Missing'}</a>
                    </div>
                </div>
            
                <div className="flip-card-back">
                    <p className="card__address">Can find us at: {address}</p>
                    <div className="card__links-back">
                        <a href="#" className="link" ><i className="fas fa-phone-alt"></i>: {phone ? phone : 'Ooops! Missing'}</a>
                        <a href="#" className="link" ><i className="fas fa-globe"></i>: {website ? website : 'Ooops! Missing'}</a>
                        <a href="#" className="link" ><i className="fas fa-envelope"></i>: {email ? email : 'Ooops! Missing'}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
