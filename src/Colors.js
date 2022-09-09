import react from "react"
export class Colors extends react.Component{
    render(){
        return (
            <div>
                <ul>
                    {this.props.items.map((items)=><li>{items}</li> )}
                </ul>
            </div>
        )
    }
}



// Lists - 01
// Create a Colors component that renders a ul tag with a li tag for 
// each color passed in the items prop. The items prop should be an array of strings.

