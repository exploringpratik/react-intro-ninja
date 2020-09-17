import React from 'react';

// WrappedComponent will be the parameter that we receive from another component like About Component
const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 5)]

    const className = randomColour + '-text';

    return (props) => {


        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow;