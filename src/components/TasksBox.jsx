import React from 'react'
import Button from './Button'

export default function TasksBox({tasks, clearFunc}) {

  return (
    <div className='w-full bg-zinc-100 rounded-lg py-4 px-4'>
        {
            tasks.map(task => 
                <div key={task} className='flex justify-between items-center'>
                    <p className='text-lg text-gray-600'>
                        {task}
                    </p>
                    <Button title="Clear" ghost clickFunc={()=> clearFunc(task)}/>
                </div>
            )
        }
    </div>
  )
}
