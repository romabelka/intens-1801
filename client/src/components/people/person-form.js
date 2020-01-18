import React from 'react'
import {Field, Form, Formik} from "formik";
import {useDispatch} from 'react-redux'
import {addPerson} from '../../redux/ducks/people'

function PersonForm(props) {
    const dispatch = useDispatch()
    const handleSubmit = (values) => dispatch(addPerson(values))
    return (
        <Formik onSubmit={handleSubmit} initialValues={{ firstName: '', lastName: '', email: ''}}>
            <Form>
                First name: <Field name="firstName"/>
                Last name: <Field name="lastName"/>
                Email: <Field name="email"/>
                <button type="submit">Add person</button>
            </Form>
        </Formik>
    )
}

PersonForm.propTypes = {
}

export default PersonForm
