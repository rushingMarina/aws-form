import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import "./App.css";

export default class SimpleFormExample extends React.Component {
    state = {
        formData: {
            name: '',
            email: '',
            message: ''
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
            //sending data to the App parent
            var user1 = this.state.formData;
            this.props.parentCallback(user1);
        });

    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h2 className="heading">Sample form</h2>
                <TextValidator
                    label="Name"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br/>
                <br/>
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
                <br />
                <br />
                <TextValidator
                    id="outlined-multiline-static"
                    label="Your Message"
                    onChange={this.handleChange}
                    name="message"
                    multiline
                    rows={4}
                    value = {formData.message}
                    variant="outlined"
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Submitted!')
                        || (!submitted && 'Submit')
                    }
                </Button>
            </ValidatorForm>
        );
    }
}
