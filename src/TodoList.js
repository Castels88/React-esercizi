import React from "react"
export class TodoList extends React.Component{
    state={
        todo: "",
        item: [],
    }
    handleInputChange = (event)=>{
        const value = event.target.value
        const name = event.target.name
        this.setState({[name]:value})
    }
    addNewItems = (event)=>{
        this.setState({
            item: [
                ...this.state.item, this.state.todo
            ]
        });
        event.preventDefault()
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        this.props.items.map(item=> <li key={item.id}>
                            {item.name}
                        </li> )   
                    }
                    {
                        this.state.item.map((subItems, sIndex)=>(<li key={subItems + sIndex}>
                            {subItems}
                        </li>))
                    }
                </ul>
                <form onSubmit={this.addNewItems}>
                    <input name="todo" type="text" value={this.state.todo} onChange={this.handleInputChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

// Lists - 03
// Create a TodoList component that renders a ul tag 
// with a li tag for each item contained in the items state variable. 
// The items state variable should be an array of strings. 
// The TodoList component should also contain an input tag and a button. 
// When the button is clicked, the event handler should add the value of the input tag to the items array.