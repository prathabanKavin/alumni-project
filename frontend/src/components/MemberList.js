import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'

const MemberList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='name' />
                <TextField source='email' />
                <TextField source='yearOfGraduation' />
                <TextField source='registrationNumber' />
                <TextField source='currentPosition' />
                <TextField source='phoneNumber' />
                <EditButton basePath='members' />
                <DeleteButton basePath='members' />
            </Datagrid>
        </List>
    )
}

export default MemberList
