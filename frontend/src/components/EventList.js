import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

const MemberList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='name' />
                <TextField source='eventType' />
                <TextField source='location' />
                <TextField source='description' />
                <TextField source='image' />
                <DateField source='startDate' />
                <DateField source='endDate' />
                <TextField source='noOfParticipants' />
                <TextField source='contributor' />
                <EditButton basePath='events' />
                <DeleteButton basePath='events' />
            </Datagrid>
        </List>
    )
}

export default MemberList
