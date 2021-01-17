import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const EventEdit = (props) => {
    return (
        <Edit title='Edit event' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
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
        </Edit>
    )
}

export default EventEdit
