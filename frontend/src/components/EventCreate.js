import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const EventCreate = (props) => {
    return (
        <Create title='Add a new event' {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='eventType' />
                <TextInput source='location' />
                <TextInput multiline source='description' />
                <TextInput source='image' />
                <DateInput source='startDate' />
                <DateInput source='endDate' />
                <TextInput source='noOfParticipants' />
                <TextInput source='contributor' />
            </SimpleForm>            
        </Create>
    )
}

export default EventCreate
