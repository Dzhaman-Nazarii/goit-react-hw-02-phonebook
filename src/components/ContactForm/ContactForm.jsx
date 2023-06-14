import { Component } from 'react'
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        id: ''
    }

    handleChange = evt => {
        this.setState({[evt.target.name]: evt.target.value})
    }
 
    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state)
        this.reset()
    }

    nameId = nanoid();
    numberId = nanoid();

    reset = () => {
        this.setState({ name: '', number: '', id:''})
    }
        

    render() {
        const{name, number} = this.state
    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="this.nameId"></label>
                Name
                <input
                    id={this.nameId}
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label htmlFor="this.numberId"></label>
                Number
                <input
                    id={this.numberId}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <button type="submit">Add contact</button>
            </form>
        </div>
    )
  }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}