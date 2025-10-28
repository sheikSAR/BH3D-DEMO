import React from 'react'
import { mentors } from '../../constants'
import ProfileCard from '../components/ProfileCard.jsx'

const Mentors = () => {
      return (
            <div className="mentors-wrapper">
                  <div className="mentors-header">
                        <h2 className="mentors-title">Meet Our Mentors</h2>
                        <p className="mentors-subtitle">Connect with industry experts</p>
                  </div>
                  <div className="mentors-container">
                        {mentors.map((mentor) => (
                              <ProfileCard
                                    key={mentor.id}
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
