import React from 'react'

const MemberCard = (props) => {
  return (
    <div className='card tc dib br3 pa3 ma2 grow bw2 shdw-5 w6'>
      <img style={memberStyle} alt='members' src={props.member.img} />
      <div>
        <h2 style={{ color: '#1C366B' }}> {props.member.name} </h2>
        <div>
          {/* <Link to={`/member/${name}`} className='btn'>
            More
          </Link> */}
          <button style={{ backgroundColor: '#F8DF4F' }}>Profile</button>
        </div>
      </div>
    </div>
  )
}

const memberStyle = {
  height: 'auto',
  maxHeight: '300px',
  width: 'auto',
  maxWidth: '300px',
}

export default MemberCard
