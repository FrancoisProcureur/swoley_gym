import React, { useState } from 'react'

export default function ExerciseCard(props) {
    const {exercise, i} = props
    const [setsCompleted, setSetsCompleted] = useState(0)

    function handleIncrement(){
        setSetsCompleted((setsCompleted + 1) % 6)
    }

  return (
    <div className='p-4 rounded-md flex flex-col gap-4
    bg-slate-950 sm:flex-wrap'>
        <div className='flex flex-col sm:flex-row 
        sm:items-center sm:flex-wrap gap-x-4'>
            <h4 className='text-3xl hidden sm:inline sm:text-4xl
            md:text-5xl lg:text-6xl font-semibold text-slate-400'>
                0{i+1}
            </h4>
            <h2 className='capitalize whitespace-nowrap truncate
            max-w-full text-lg sm:text-xl md:text-2xl sm:text-center
            flex-1'> 
                {exercise.name.replaceAll("_"," ")}
            </h2>
            <p className='capitalize text-sm text-slate-400'>
                {exercise.type}
            </p>
        </div> 
        <div className='flex flex-col'>
            <h3 className='text-slate-40 0 text-sm'>Muscle groups</h3>
            <p className='capitalize'>{exercise.muscles.join(' & ')}</p>
        </div>

        <div className='flex flex-col bg-slate-950 rounded gap-2'>
            {exercise.description.split("___").map((val) => {
                return (
                    <div className='text-sm'>
                        {val}
                    </div>
                )
            })}
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2'>
            {['reps', 'rest', 'tempo'].map(info =>{
                return(
                    <div key={info} className='flex flex-col p-2 rounded border-[1.5px]
                    border-slate-900 w-full'>
                        <h3 className='capitalize text-slate-400 text-sm'>
                            {info === 'reps' ? `${exercise.unit}` : info}
                        </h3>
                        <p className='font-medium'>
                            {exercise[info]}
                        </p>
                    </div>
                )
            })}
            <button onClick={handleIncrement} className='flex flex-col border-[1.5px]
            p-2 rounded border-solid border-blue-900 hover:border-blue-600
            duration-200 place-items-center'>
                <h3 className='capitalize text-slate-400 text-sm'>Sets completed</h3>
                <p className='font-medium'>{setsCompleted} / 5</p> 
            </button>
        </div>
    </div>
  )
}