import React from 'react';
import { render, fireEvent, screen, getLabelByTestId, getByLabelText } from '@testing-library/react';
import ContactForm from './ContactForm';

test('ContactForm renders without errors', () => {
    const { getByText } = render(<ContactForm />)
})

test('ContactForm renders without errors', () => {
    const {getByLabelText} = render(<ContactForm />)
})

test('Form can be filled out and submitted', () => {
    render(<ContactForm />)

    const firstNameInput = screen.getByLabelText(/First Name/i)
    const lastNameInput = screen.getByLabelText(/Last Name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    const submitButton = screen.getByTestId(/submit/i)

    fireEvent.change(firstNameInput, {target: {value: 'Jason'}})
    fireEvent.change(lastNameInput, {target: {value: 'Clegg'}})
    fireEvent.change(emailInput, {target: {value: 'jason@jason.com'}})
    fireEvent.change(messageInput, {target: {value: 'Im Jason'}})

    fireEvent.click(submitButton)
})