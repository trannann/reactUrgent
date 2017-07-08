import React from 'react';
import { connect } from 'react-redux';
import { Button, FormControl, Table, Modal } from 'react-bootstrap';

import { changePatientsFilter } from '../actions/domu-actions';

@connect((store) => {
    return {
        pacienti: store.PacientiReducer
    }
})
export default class Pacienti extends React.Component {
    constructor() {
        super();

        this.state = {
            showModal: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.setState({showModal: true});
    }

    close() {
        this.setState({showModal: false});
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
                            value={this.props.pacienti.filterInput}
                            placeholder="Filter patients.."
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-sm-3">
                        <Button bsSize="small" onClick={this.open}>Register pacient</Button>
                         <div>
                            <Modal className="modal-container" 
                            show={this.state.showModal} 
                            onHide={this.close}
                            animation={true} 
                            bsSize="small">

                            <Modal.Header closeButton>
                                <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                One of fine body.........
                            </Modal.Body>

                            <Modal.Footer>
                                <Button onClick={this.close}>Close</Button>
                                <Button bsStyle="primary">Save changes</Button>
                            </Modal.Footer>         
                            </Modal> 
                        </div>
                    </div>
                </h2>
                <br></br>
                <br></br>
                <br></br>
                
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Jméno</th>
                        <th>Příjmení</th>
                        <th>Rodné číslo</th>
                        <th>Číslo karty</th>
                        <th>Datum narození</th>
                        <th>Tag</th>
                        <th>Akce</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Marks</td>
                        <td>Otto</td>
                        <td>930916/5910</td>
                        <td>15641032544</td>
                        <td>16.9.1993</td>
                        <td>TAG01</td>
                        <td>
                            <Button bsSize="small">
                                <strong>Info</strong>
                            </Button>
                            <Button bsSize="small">
                                <strong>Modify</strong>
                            </Button>
                            <Button bsSize="small">
                                <strong>Delete</strong>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>-</td>
                        <td>5415313554</td>
                        <td>30.8.1998</td>
                        <td>TAG02</td>
                        <td>
                            <Button bsSize="small">
                                <strong>Info</strong>
                            </Button>
                            <Button bsSize="small">
                                <strong>Modify</strong>
                            </Button>
                            <Button bsSize="small">
                                <strong>Delete</strong>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>-</td>
                        <td>315416513</td>
                        <td>1.9.1980</td>
                        <td>TAG03</td>
                        <td>
                            <Button bsSize="small">
                                <strong>Info</strong>
                            </Button>
                            <Button bsSize="small">
                                <strong>Modify</strong>
                            </Button>
                            <Button bsSize="small">
                                <strong>Delete</strong>
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
                
                
                {/*{this.props.pacienti.pacienti}
                test1+++
            */}
                
            </div>
        )
    }
}