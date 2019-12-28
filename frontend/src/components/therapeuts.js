import React from 'react'

const Therapeuts = ({therapeuts}) => {
    return (
        <div>
            <center><h1>Therapeuts List</h1></center>
            {therapeuts.map((therapeut) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{therapeut.first_name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{therapeut.surname}</h6>
                        <p class="card-text">{therapeut.specialty}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Therapeuts
