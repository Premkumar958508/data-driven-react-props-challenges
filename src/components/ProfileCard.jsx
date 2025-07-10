import React from 'react'

const ProfileCard = ({name,email,avatarUrl}) => {
  return (
    <>
    <div className='change'>
    <img src = {avatarUrl} alt={name}></img>
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
    </>
  )
}

export default ProfileCard