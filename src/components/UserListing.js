import React, { useState } from 'react'
import Users from './Users'

function UserListing() {

    const[users, setUser] = useState([]);

function fetchData(){
    fetch("https://reqres.in/api/users?page=1")
    .then(response => response.json())
    .then(data =>{
        var records = data.data
        var rows = []
        console.table(records)
        for(let i=0;i<records.length;i++){
            rows.push(<Users data={{id:records[i].id,name:records[i].first_name,email:records[i].email,avatar:records[i].avatar}}/>)
        
        }
        setUser(rows)

    })
}
   return (<>
   {/* <button onClick={Add}>click me</button> */}
   <button class="btn btn-primary" onClick={fetchData}>click me</button>
   <table border="2">
   {users}
   </table>
   </>
  )
}

export default UserListing