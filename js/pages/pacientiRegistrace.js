import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, ControlLabel, FormControl, Form, Table } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

const WEEKDAYS_LONG = 
  [
    'Pondělí',
    'Úterý',
    'Středa',
    'Čtvrtek',
    'Pátek',
    'Sobota',
    'Neděle'
  ]


const WEEKDAYS_SHORT = {
  cz: ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne']
};

const MONTHS = [
    'Leden',
    'Únor',
    'Březen',
    'Duben',
    'Květen',
    'Červen',
    'Červenec',
    'Srpen',
    'Září',
    'Říjen',
    'Listopad',
    'Prosinec',
  ]


@connect((store) => {
    return {
        domu: store.PacientiRegistraceReducer
    }
})



export default class PacientiRegistrace extends React.Component {
    constructor() {
        super();

        this.state = {
            showTag: false
        };

        this.open = this.open.bind(this);
    }
    
    open() {
        this.setState({showTag: true});
    }

    render() {
        const showTag = this.state.showTag;

        let tag = null;
        if (showTag) {
            tag = (
            
            <Form inline>
                <h1>Události tagu</h1>
                <br></br>
                <FormGroup controlId="formInlineName">
                    <ControlLabel>Od</ControlLabel>
                    <DatePicker placeholder="Placeholder" dayLabels={WEEKDAYS_LONG} monthLabels={MONTHS} />
                </FormGroup>
                {' '}
                <FormGroup controlId="formInlineEmail">
                    <ControlLabel>Do</ControlLabel>
                    <DatePicker placeholder="Placeholder" dayLabels={WEEKDAYS_LONG} monthLabels={MONTHS} />
                </FormGroup>
                <br></br>
                <h1>TAG01</h1>
                <br></br>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Start</th>
                        <th>Konec</th>
                        <th>Událost</th>
                        <th>Lokace</th>
                        <th>Akce</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>10:00 01.01.2017</td>
                        <td>11:00 01.01.2017</td>
                        <td>Přijatý</td>
                        <td>Lobby</td>
                        <td>
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
                        <td>11:00 01.01.2017</td>
                        <td>12:00 01.01.2017</td>
                        <td>Vyšetření</td>
                        <td>RTG</td>
                        <td>
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
                        <td>12:00 01.01.2017</td>
                        <td>12:30 01.01.2017</td>
                        <td>Stabilizovaný</td>
                        <td>Pokoj</td>
                        <td>
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
                
            </Form>
            );
        } else {
            tag = 'no';
        }


        return (
            <div className='row' style={{border:'1px solid black'}}>
                <div className="col-sm-3" style={{border:'1px 1px 0px 0px solid black'}}>
                    
                    <b>Registrace nového pacienta</b>
                     <form>
                        <FormGroup
                        controlId="formBasicText"
                        >
                            <ControlLabel>Číslo karty</ControlLabel>
                            <FormControl
                                type="text"
                            />
                            <ControlLabel>Jméno</ControlLabel>
                            <FormControl
                                type="text"
                            />
                            <ControlLabel>Příjmení</ControlLabel>
                            <FormControl
                                type="text"
                            />
                            <ControlLabel>Rodné číslo</ControlLabel>
                            <FormControl
                                type="text"
                            />
                            <ControlLabel>Datum narození</ControlLabel>
                            <FormControl
                                type="text"
                            />
                        </FormGroup>
                    </form>
                </div>
                <div className="col-sm-9" style={{border:'1px solid black'}}>
                    <div >
                            
                        <b>Přiřadit volné tagy</b>
                        <br></br>
                        <Button onClick={this.open}>TAG01</Button>
                        <br></br>
                        <Button>TAG02</Button>  
                        <br></br>
                        <Button>TAG03</Button>
                    </div>
                    <div>
                        {tag}
                    </div>
                </div>
                
            </div>
        )
    }
}

