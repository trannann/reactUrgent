import React from 'react';
import { connect } from 'react-redux';
import { Button, FormControl, Table, Modal } from 'react-bootstrap';

@connect((store) => {
    return {
        tagy: store.Tagy
    }
})
export default class Tagy extends React.Component {
    constructor() {
        super();
        
        this.state = {
            showModal: false
        };
    }

    

    open() {
        this.setState({showModal: true});
    }

    close() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <div className="row">
                <h2>
                    <div className="col-sm-3">
                        Registrované tagy
                    </div>
                    <div className="col-sm-3">
                        <Button bsSize="small" onClick={()=>this.setState({ showModal: true })}>Přiřadit tag</Button>
                        <div>
                            <Modal className="modal-container" 
                            show={this.state.showModal} 
                            onHide={this.close}
                            animation={true} 
                            bsSize="large" 
                            aria-labelledby="contained-modal-title-lg">

                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-lg">Registrace nového pacienta</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <h4>Wrapped Text</h4>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button onClick={()=>this.setState({ showModal: false })}>Close</Button>
                                <Button bsStyle="primary">Přidat</Button>
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
                        <th>Tag</th>
                        <th>Jméno a Příjmení</th>
                        <th>Lokace</th>
                        <th>Poslední událost</th>
                        <th>Akce</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>TAG01</td>
                        <td>Marks Otto</td>
                        <td>Lobby</td>
                        <td>RTG</td>
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
                        <td>TAG02</td>
                        <td>Tomas Jedno</td>
                        <td>Room</td>
                        <td>Stabilized</td>
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
                        <td>TAG03</td>
                        <td>Spencer Marks</td>
                        <td>Lobby</td>
                        <td>Examinig</td>
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