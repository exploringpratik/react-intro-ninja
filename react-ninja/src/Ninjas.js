import React from 'react';

const Ninjas = ({ ninjas, deleteNinja }) => {

    const ninjaList = ninjas.filter(ninja => ninja.age > 20).map(ninja => {
        return (<div className="ninja" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Color: {ninja.belt}</div>
            <button onClick={() => { deleteNinja(ninja.id) }}>Delete Ninja</button>
        </div>);
    })
    return (
        <div>
            { ninjaList}

        </div>
    )


}

export default Ninjas;