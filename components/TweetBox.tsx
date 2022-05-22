import React from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'

function TwitterBox() {
  return (
    <div className="flex space-x-2 p-5">
        <img 
        className=" mt-4 h-14 w-14 rounded-full object-cover"
        src="https://links.papareact.com/gll" 
        alt="" />

        <div className="flex flex-1 pl-2">
          <form className="flex flex-1 flex-col">
            <input type="text" placeholder="What's Happening ?" />
            <div className="flex items-center">
              <div className="flex flex-1 space-x-2 text-twitter">
                <PhotographIcon className="h-5 w-5" />
                <SearchCircleIcon className="h-5 w-5" />
                <EmojiHappyIcon className="h-5 w-5" />
                <CalendarIcon className="h-5 w-5" />
                <LocationMarkerIcon className="h-5 w-5" />
              </div>

              <button className="rounded-full bg-twitter px-5 py-2 font-bold text-white ">Tweet</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default TwitterBox