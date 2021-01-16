import React from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

class Exercises extends React.Component {
    state = {
        exercises: [],
        changed: false
    };
    componentDidMount(){
        axios.get("http://localhost:5000/exercises")
            .then(result => this.setState({exercises: result.data}))
            .catch(err => console.log(err.message))
    }

    handleDelete = (id) => {
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then(() => this.setState({exercises: this.state.exercises.filter(exercise => exercise._id !== id)}))
            .catch(err => console.log(err.message))
    }

    render(){
        return (
            <div className="mt-5">
                <ul className="list-group">
                    {this.state.exercises.map(exercise => <li key={exercise._id} className="list-group-item d-flex justify-content-between align-items-center p-1"><p className="mx-3 mb-0">{exercise.description}</p>
                        <div className="m-0">
                            <button onClick={() => this.handleDelete(exercise._id)} className="btn btn-danger">Delete</button>
                            <Link to={`/${exercise._id}`}><button className="btn btn-warning mx-3">Edit</button></Link>
                        </div>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default Exercises