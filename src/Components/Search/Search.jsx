import React, { useState, memo } from 'react';
import Styles from './search.module.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import { getTasks } from '../../store/actions';


let statusOptions = [
    {
        label: 'Reset',
        value: ''
    },

    {
        label: 'Active',
        value: 'active'
    },

    {
        label: 'Done',
        value: 'done'
    }
]

let sortOptions = [
    {
        label: 'Reset',
        value: ''
    },

    {
        label: 'A-Z',
        value: 'a-z'
    },

    {
        label: 'Z-A',
        value: 'z-a'
    },

    {
        label: 'Creation date oldest',
        value: 'creation_date_oldest'
    },

    {
        label: 'Creation date newst',
        value: 'creation_date_newest'
    },

    {
        label: 'completion date oldest',
        value: 'completion_date_oldest'
    },

    {
        label: 'completion date newest',
        value: 'completion_date_newest'
    },
];

let dateOptions = [

    {
        label: 'Create later than',
        value: 'create_lte'
    },

    {
        label: 'Creation earlier than',
        value: 'create_gte'
    },

    {
        label: 'Complet  later than',
        value: 'complete_lte'
    },

    {
        label: 'Complet earlier than',
        value: 'complete_gte'
    },



];

function Search(props) {

    let [status, setStatus] = useState({
        label: '',
        value: ''
    });

    let [sort, setSort] = useState({
        label: '',
        value: ''
    });

    let [dates, setDates] = useState({
        create_lte: null,
        create_gte: null,
        complete_lte: null,
        complete_gte: null,
    });

    let [search, setSearch] = useState('');

    let handleSubmit = () => {
        let data = {};
        let { create_lte, create_gte, complete_lte, complete_gte } = dates
        if (create_lte) data.create_lte = create_lte.toLocaleString();
        if (create_gte) data.create_gte = create_gte.toLocaleString();
        if (complete_lte) data.complete_lte = complete_lte.toLocaleString();
        if (complete_gte) data.complete_gte = complete_gte.toLocaleString();

        if (search) data.search = search;
        if (sort) data.sort = sort.value;
        if (status) data.status = status.value;

     
        props.getTasks(data)
    }


    return (
        <div className={Styles.searchBar}>
            <Navbar expand="lg">

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <NavDropdown title={status.value ? status.label : 'Status'} >
                            {
                                statusOptions.map((item, key) => {
                                    return (
                                        <NavDropdown.Item
                                            key={key}
                                            onClick={() => setStatus(item)}
                                            active={status.value === item.value}
                                        >
                                            {item.label}
                                        </NavDropdown.Item>
                                    );
                                })
                            }
                        </NavDropdown>
                        <NavDropdown title={sort.value ? sort.label : 'Status'} >
                            {
                                sortOptions.map((sortitem, key) => {
                                    return (
                                        <NavDropdown.Item
                                            key={key}
                                            onClick={() => setSort(sortitem)}
                                            active={sort.value === sortitem.value}
                                        >
                                            {sortitem.label}
                                        </NavDropdown.Item>
                                    );
                                })
                            }
                        </NavDropdown>
                    </Nav>

                    <Form inline>
                        <FormControl
                            className="mr-sm-2"
                            type="text"
                            value={search}
                            placeholder="Search"
                            onChange={(event) => setSearch(event.target.value)}
                        />
                        <Button
                            variant="outline-success"
                            onClick={handleSubmit}
                        >
                            Search
                            </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <div>
                {
                    dateOptions.map((item, index) => {
                        return (
                            <Col
                            className={Styles.dates} 
                            key={index} >
                                <span>
                                    <DatePicker
                                        selected={dates[item.value]}
                                        onChange={(date) => {
                                            setDates({
                                                ...dates,
                                                [item.value]: date
                                            })
                                        }}
                                    />
                                </span>
                                <span>{item.label} </span>

                            </Col>

                        );
                    })
                }
            </div>
        </div>
    );
};

let mapDispatchToProps = {
    getTasks
}

export default connect(null,mapDispatchToProps)(memo(Search));