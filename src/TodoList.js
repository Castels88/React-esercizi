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
    resetState= ()=>{
        this.setState({
            todo: "",
            item:[],
        })
    }
    removeItems = (e) => {
        this.setState(state => {
            const newItem = [...state.item];
            newItem.splice(e.target.value, 1);
            return { item: newItem };
        })
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
                    <Button type="reset" onClick={this.resetState}>Reset</Button>
                    <Button onClick={this.removeItems}>Remove</Button>
                </form>
            </Card>
        )
    }
}

// Lists - 06
// Modify the TodoList by adding a "remove" button to each li tag. When clicked, 
// the event handler should remove corresponding item from the items array.