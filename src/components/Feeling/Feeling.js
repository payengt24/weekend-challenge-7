import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  { Redirect } from 'react-router-dom'




const mapReduxStateToProps = (reduxState) => ({ reduxState });

class Feeling extends Component {


    //Update feeling feedback to redux store
    handleFeedbackChange = (event) => {
        const action = { type: 'SET_FEELING', payload: event.target.value };
        this.props.dispatch(action);
    }


    render() {
        console.log('feelings', this.props.reduxState);
        return (
            <div>
                <h2>1 of 4 pages</h2>
                <div>
                    <div className="card-design">
                        <p>How are you feeling today?</p>
                        <input type="number" placeholder="Rating" onChange={this.handleFeedbackChange}/>
                    </div>   
                        <Link to='/understanding'>Next</Link>
                    <div>
                    </div>
                </div>    

            </div>
        );
    }
}



export default connect(mapReduxStateToProps)(Feeling);