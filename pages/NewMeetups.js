import React from 'react'
import { useNavigate } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

export default function NewMeetupsPage() {
    const navigate = useNavigate()

    function addMeetupHandler(meetupData){
        fetch('https://react-meetup-app-a1dd4-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',{
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(() =>{
           navigate('/', {replace:true})
        })
    }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  )
}
