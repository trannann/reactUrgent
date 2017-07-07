import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        tagy: store.Tagy
    }
})
export default class Tagy extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>tagy</div>
        )
    }
}