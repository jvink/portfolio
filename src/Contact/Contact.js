import React from 'react';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Instagram from 'mdi-react/InstagramIcon';
import LinkedIn from 'mdi-react/LinkedinBoxIcon';
import GitHub from 'mdi-react/GithubCircleIcon';
import Portfolio from 'mdi-react/AccountCardDetailsIcon';
import './Contact.css';

class About extends React.Component {
    render() {
        return (
            <div className="content">
                <h2>Contact</h2>
                <p>Dit doet nu nog bijzonder weinig.</p>
                <Formik
                    initialValues={{ name: '', email: '', message: '' }}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(false);
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string()
                            .required('Dit veld is vereist'),
                        email: Yup.string()
                            .email()
                            .required('Dit veld is vereist'),
                        message: Yup.string()
                            .required('Dit veld is vereist'),
                    })}
                    render={props => (
                        <form onSubmit={props.handleSubmit} className="contact-form">
                            <div className="contact-form-input">
                                <label>Naam</label>
                                <input
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.name}
                                    name="name"
                                />
                                {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                            </div>
                            <div className="contact-form-input">
                                <label>Email</label>
                                <input
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.email}
                                    name="email"
                                />
                                {props.errors.email && <div id="feedback">{props.errors.email}</div>}
                            </div>
                            <div className="contact-form-input">
                                <label>Bericht</label>
                                <input
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.message}
                                    name="message"
                                />
                                {props.errors.message && <div id="feedback">{props.errors.message}</div>}
                            </div>
                            <button type="submit">Verstuur</button>
                        </form>
                    )}
                />
                <div className="social-media">
                    <a className="icon-text" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jurianvink/"><Instagram className="icon" /><span className="text">jurianvink</span></a>
                    <a className="icon-text" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jurian-vink-282465141/"><LinkedIn className="icon" /><span>Jurian Vink</span></a>
                    <a className="icon-text" target="_blank" rel="noopener noreferrer" href="https://github.com/jvink/"><GitHub className="icon" /><span>jvink</span></a>
                    <button className="clearButton" target="_blank" rel="noopener noreferrer" href="" onClick={() => this.props.history.push('/cv')}><Portfolio className="icon" /><span>Portfolio</span></button>
                </div>
            </div>
        );
    }
}

export default withRouter(About);