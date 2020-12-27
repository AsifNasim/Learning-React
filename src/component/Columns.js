import React from 'react'

function Columns() {
    const items = [];
    return (
        // React.fragment can also accept key attribute when rendering list items
        <React.Fragment>
            {/* {
                items.map( item => (
                    <React.Fragment key = {item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    <React.Fragment/>
                ))
            } */}
            <td>Name</td>
            <td>Qualilfication</td>
        </React.Fragment>
    )
}

export default Columns
