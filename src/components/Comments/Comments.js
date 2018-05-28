import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom'




const mapReduxStateToProps = (reduxState) => ({ reduxState });


class Comments extends Component {


    submitFeedback = () => {

        console.log('sending data', this.props.reduxState)
        const data = {
            feeling: this.props.reduxState.feeling,
            understanding: this.props.reduxState.understanding,
            support: this.props.reduxState.supported,
            comments: this.props.reduxState.comment,
        }

        axios.post('/api/feedback', data).then((response) => {
            this.props.history.push('/thankYou')
        }).catch((error) => {
            alert('There was a problem with axios PUT')
        })

    }

    //Update comment feedback to redux store
    handleFeedbackChange = (event) => {
        const action = { type: 'SET_COMMENT', payload: event.target.value };
        this.props.dispatch(action);
    }


    render() {
        console.log('comments', this.props.reduxState);
        return (
            <div>
                
                <h2>4 of 4 pages</h2>


                <div>
                    <div className="card-design">
                        <p>Any comments you want to leave?</p>
                        <input type="text" placeholder="Comments" onChange={this.handleFeedbackChange} />
                    </div>
                    <button onClick={this.submitFeedback}>Submit</button>
                    <div>
                    </div>
                </div>

            </div>
        );
    }
}



export default connect(mapReduxStateToProps)(Comments);