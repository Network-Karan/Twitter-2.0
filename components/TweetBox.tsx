import React from 'react'

function TwitterBox() {
  return (
    <div>
        <img 
        className=" mt-4 h-14 w-14 rounded-full object-cover"
        src="https://links.papareact.com/gll" 
        alt="" />

        <div>
          <form>
            <input type="text" placeholder="What's Happening ?" />
            <div>
              <div>{/*Icons*/}</div>

              <button>Tweet</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default TwitterBox