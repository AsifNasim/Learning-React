import React from 'react';

const Hello = () => {
    // writing component with the help of JSX
    return (
        <div>
            <h1>Hello Asif with JSX</h1>
        </div>
    )


    // writing component without the help of JSX

    // return (
    //     React.createElement(
    //         'div',
    //         {id:'hello', className:'dummyClass'},
    //         React.createElement(
    //             'h1',null, 'Without JSX'
    //         )
    //     )
    // )
}

export default Hello