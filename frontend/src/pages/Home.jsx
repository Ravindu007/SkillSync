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
        <div className="left hidden md:flex w-[30%]">
          <Filter></Filter>
        </div>
        <div className="flex flex-col w-[100%] h-full md:w-[70%]">
          <div className="search-bar-container h-auto">
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