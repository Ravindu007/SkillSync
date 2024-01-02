import React from 'react'
import SearchBar from '../components/HomePageComponents/SearchBar'
import Filter from '../components/HomePageComponents/Filter'
import JobListing from '../components/HomePageComponents/JobListing'
import Banner from '../components/HomePageComponents/Banner'

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <div className='Banner-container h-[20%] md:h-[20%] flex justify-center items-center'>
        <Banner></Banner>
      </div>

      <div className='w-full h-screen flex'>
        <div className="left hidden md:flex w-[30%] border-2 border-black">
          <Filter></Filter>
        </div>
        <div className="flex flex-col w-[100%] md:w-[70%] border-2 border-black">
          <div className="search-bar-container h-auto border-2 border-blue">
              <SearchBar></SearchBar>
          </div>
          <div className="job-listing-container">
              <JobListing></JobListing>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Home