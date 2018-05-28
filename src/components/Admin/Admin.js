import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        console.log('component did mount');
        this.grabData();
    }

    grabData() {
        axios.get('/api/feedback').then((response) => {
            console.log(response.data[0]);
            this.setState({
                results: response.data
            })
        }).catch((error) => {
            alert('something went wrong with axios.get');
        })
    }

    deleteFeedback = (event) => {
        console.log('feedback id:', event.target.value);
        let id = event.target.value;
        axios.delete('/api/feedback/' + id, this.state).then(response => {
            console.log('delete', response)
            return this.grabData();
        }).catch((error) => {
            alert('Something went wrong with axios Delete')
        })
    }


    render() {

        let feedback = this.state.results.map((feedback) => {
            return <tr key={feedback.id}>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td><button value={feedback.id} onClick={this.deleteFeedback}>Delete</button></td>
            </tr>
        })

        return (
            <div>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Feeling</th>
                                <th>Understanding</th>
                                <th>Support</th>
                                <th>Comments</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedback}
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Admin);