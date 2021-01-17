import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const MemberEdit = (props) => {
    return (
        <Edit title='Edit member' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='name' />
                <TextInput source='email' />
                <TextInput source='yearOfGraduation' />
                <TextInput source='registrationNumber' />
                <TextInput source='currentPosition' />
                <TextInput source='phoneNumber' />
                <TextInput source='expertise' />
                <TextInput source='linkedinID' />
                <TextInput source='facebookID' />
                <TextInput source='portfolioWebsite' />
                <TextInput source='googleScholarID' />
            </SimpleForm>            
        </Edit>
    )
}

export default MemberEdit
