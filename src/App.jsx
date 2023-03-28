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
    <main className=" font-spartan relative">
    <Header/>
      <div className='flex flex-col justify-center items-center mt-10'> 
      {jobs.map((job) => (
        <Card job={job} key={job.id}/>
      ))}
      </div>
    </main>
  )
}

export default App
