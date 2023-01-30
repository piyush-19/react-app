import React from 'react'

function Users(props) {
  const{id,name,email,avatar} = props.data
    return (
    <>
    <tr>
    <td>{id }</td><td>{name}</td><td>{email}</td><td><img src={avatar}/></td>
    </tr>
    </>
  )
}

export default Users