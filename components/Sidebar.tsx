import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className="h-10 w-10">
        <img src="https://links.papareact.com/drq" alt="" />
        <SidebarRow Icon={HomeIcon} title="Home" />
    </div>
  )
}

export default Sidebar 