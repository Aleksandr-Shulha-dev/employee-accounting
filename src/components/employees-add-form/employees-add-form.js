import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onChangeValue = (e) => {
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    addItem = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onChangeData(this.state);
    }


    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.addItem}>
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.onChangeValue}
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                    />
                    <input 
                        type="number"
                        name="salary"
                        value={salary}
                        onChange={this.onChangeValue}
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                    />
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
    
}

export default EmployeesAddForm;