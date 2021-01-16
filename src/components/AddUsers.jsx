import React, {Component} from 'react'
import axios from "axios"
class AddUsers extends Component {
    state = { 
        user: "",
        users: []
     }
    componentDidMount(){
        axios.get('http://localhost:5000/users')
            .then(result => this.setState({users: result.data}))
            .catch(err => console.log(err.message))
    }
    changeHandler = (e) => {
        this.setState({user: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        const user = {
            username: this.state.user
        }
        axios.post('http://localhost:5000/users/add', user)
            .then(result => console.log(result))
            .catch(err => console.log(err.message))

        this.setState({user: ""})
    }
    render() { 
        const users = this.state.users.map(user => <li className="list-group-item" key={user._id}>{user.username}</li>)
        return ( 
            <div className="mt-5">
                <form onSubmit={this.submitHandler}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Add new user..." aria-label="Add new user..." aria-describedby="basic-addon2"
                        onChange={this.changeHandler} value={this.state.user}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary" type="submit">Create</button>
                        </div>
                    </div>
                </form>
                <ul className="list-group">
                    {this.state.users.length !== 0 ? users : "Loading..."}
                </ul>
            </div>
         );
    }
}
 
export default AddUsers;