import React from 'react'
import Headers from '../others/Headers'
import TaskList from '../others/TaskList'
import NewTaskList from '../Tasklist/NewTaskList'

const Employee = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
          {/* <h1>{data.id}</h1> */}
            <Headers changeUser={props.changeUser} data={props.data}/>
            <TaskList data={props.data}/>
            <NewTaskList data={props.data}/>
        
    </div>
  )
}

export default Employee