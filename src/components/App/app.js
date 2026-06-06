import React from 'react'
import AppInfo from '../App-info/app-info'
import ''
import SearchPanel from '../Search-panel/search-panel'
import AppFilter from '../App-filter/app-filter'

const app = () => {
  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo/>
        <div className='search-panel'>
          <SearchPanel/>
          <AppFilter/>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default app


// rafce