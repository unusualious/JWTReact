import React, { Component } from 'react'

export default class DataClassComponent extends Component {
    constructor(props){
super(props);
    this.state={
        items:[],
        isloaded:false,
    }
}
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isloaded:true,
            items:json,
        })
    });
}
    render() {
        var {isloaded,items} = this.state;
        if(!isloaded){
            return<div>Loading ...</div>
        }
        else{
        return (
            <div className="api-data">
                <ul>
                {items.map(item =>(
                    <li key={item.id}>
                      - {item.id} {item.name}  |  {item.email}  | {item.address.city}
                    </li>    
                ))}
                </ul>           
            </div>
        )
    }
    }
}
