import React from 'react'
import { mentors } from '../../constants'
import ProfileCard from '../components/ProfileCard.jsx'

const Mentors = () => {
      return (
            <div className="w-full py-16 px-4">
                  {/* This is the horizontal scrolling container:
        - 'flex': Enables flexbox layout (defaults to a row).
        - 'overflow-x-auto': Enables horizontal scrolling if content overflows.
        - 'gap-4': Adds a 16px gap between the flex items (the cards).
        - 'max-w-7xl mx-auto': Constrains width and centers the container.
        - 'scrollbar-none...': Hides the scrollbar.
        - 'py-4': Adds a little vertical padding *inside* the scroll area.
      */}
                  <div className="flex overflow-x-auto gap-8 w-100% mx-auto scrollbar-none [&::-webkit-scrollbar]:hidden ">
                        {mentors.map((mentor) => (
                              <ProfileCard
                                    key={mentor.id} // Key on the ProfileCard component
                                    name={mentor.name}
                                    title={mentor.title}
                                    handle={mentor.name}
                                    status={mentor.status}
                                    contactText={mentor.contactText}
                                    avatarUrl={mentor.avatarUrl}
                                    showUserInfo={true}
                                    enableTilt={true}
                                    enableMobileTilt={false}
                                    showBehindGradient={true}
                                    iconUrl='https://res.cloudinary.com/broskieshub/image/upload/v1756907359/broskieshub/qrdtvpfzqaw0bsu8rcl0.png'
                                    onContactClick={() => console.log("Contact clicked")}
                              />
                        ))}
                  </div>
            </div>
      )
}

export default Mentors