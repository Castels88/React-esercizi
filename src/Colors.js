import React from "react"
export class Colors extends React.Component{
    render(){
        return (
            <div className="border-solid border-2 border-black, my-5">
                <ul>
                    {this.props.items.map((items) => <li className="text-green-600" key={items.id}>
                        <h4>{items.name}</h4>
                    </li> )}
                </ul>
            </div>
        )
    }
}
// Lists - 02
// Modify the Colors component so that items is expected 
// to be an array of objects each containing an id and a name property. 
// Render the name property of each object within a li tag, and use the id as a key.



