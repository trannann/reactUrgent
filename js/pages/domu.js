import React from 'react';
import { connect } from 'react-redux';
import { Button, FormControl } from 'react-bootstrap';

import { changePatientsFilter } from '../actions/domu-actions';

@connect((store) => {
    return {
        domu: store.DomuReducer
    }
})
export default class Domu extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.dispatch(changePatientsFilter(e.target.value));
    }
    render() {
        return (
            <div className="row">
                <h2>
                    <div className="col-sm-3">
                        Active pacients
                    </div>
                    <div className="col-sm-3">
                        <FormControl
                            type="text"
                            value={this.props.domu.filterInput}
                            placeholder="Filter patients.."
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-sm-3">
                        <Button bsSize="small">
                            <strong>Register pacient</strong>
                        </Button>
                    </div>
                </h2>
{/*                
                {this.props.domu.domu}
                test1+++*/}
            
                
            </div>
        )
    }
}