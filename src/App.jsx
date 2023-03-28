import { useState, useEffect } from 'react'
import { data } from './Data/Data'
import { Header, Filter, Card, Modal } from './components'
import './App.css'

{data.map((job) => {
  job.filters = [job.role, job.level]
  job.filters = job.filters.concat(job.languages, job.tools)
  return job
})}


function App() {
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])

useEffect( () => 
setJobs(data)
,[])



  return (
    <main className=" font-spartan relative ">
    <Header/>
      <div className='flex flex-col gap-10 mt-16 mx-auto lg:w-3/4 '> 
      {jobs.map((job) => (
        <Card job={job} key={job.id}/>
      ))}
      </div>
    </main>
  )
}

export default App
