import { useState } from "react"
import Users from "./Users"

function UserListing2() {

    const [users,setusers] = useState([])


function fetchData(){
    fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json())
    .then(data =>{
        var records = data.data
        var rows = []
        console.table(records)

        for(let i=0;i<records.length;i++){
            rows.push(<Users data={{id:records[i].id,name:records[i].first_name,email:records[i].email,avatar:records[i].avatar}}/>)
        }
        setusers(rows)
    })

}
    return (<>
    <button onClick={fetchData}>Fetch Data</button>
    <table border="2">
    {users}
    </table>
    </>
  )
}

export default UserListing2