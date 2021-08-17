import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actions';

class Counter extends Component {
    render() {
        return (
          <div>
            <h1>Your Score: {this.props.ctr}</h1>
            <button onClick={this.props.onIncrement}>Add one</button>
            <button onClick={this.props.onDecrement}>Remove one</button>
            <button onClick={this.props.onReset}>Reset</button>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ctr:state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onIncrement: () => dispatch({ type: actionTypes.INCREMENT }),
      onDecrement: () => dispatch({ type: actionTypes.DECREMENT }),
      onReset: () => dispatch({ type: actionTypes.RESET }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)