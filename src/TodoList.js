import React from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
        this.setState({todo:""})
        event.preventDefault()
    }
    render(){
        return(
            <Card border="primary">
                <h3>Todo List</h3>
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
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        )
    }
}

// Lists - 04
// Modify the TodoList component so that the input clears every time a Todo is added to the items array.