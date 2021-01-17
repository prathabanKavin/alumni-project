import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const MemberCreate = (props) => {
    return (
        <Create title='Add a new member' {...props}>
            <SimpleForm>
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
        </Create>
    )
}

export default MemberCreate
