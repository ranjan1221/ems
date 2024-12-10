import React from 'react'

const TaskList = ({data}) => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
        {/* height hata ke padding kui di?? */}
        <div className='w-[45%] py-5 px-10 rounded-xl  bg-red-400'>
            <h3 className='text-3xl font-medium'>{data.taskCounts.newTask}</h3>
            <h2 className='text-2xl font-semibold'>New Task</h2>
        </div>
        <div className='w-[45%] py-5 px-10 rounded-xl  bg-emerald-400'>
            <h3 className='text-3xl font-medium'>{data.taskCounts.completed}</h3>
            <h2 className='text-2xl font-semibold'>Completed Task</h2>
        </div>
        <div className='w-[45%] py-5 px-10 rounded-xl  bg-blue-400'>
            <h3 className='text-3xl font-medium'>{data.taskCounts.active}</h3>
            <h2 className='text-2xl font-semibold'>Accepted Task</h2>
        </div>
        <div className='w-[45%] py-5 px-10 rounded-xl  bg-orange-400'>
            <h3 className='text-3xl font-medium'>{data.taskCounts.failed}</h3>
            <h2 className='text-2xl font-semibold'>Failed Task</h2>
        </div>
    </div>
  )
}

export default TaskList