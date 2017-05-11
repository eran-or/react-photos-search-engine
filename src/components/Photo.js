import React from 'react'

const Photo = (props) => {
  let style = {
    div: {
      display: 'inline-block',
      margin: '12px 12px 12px 0'
    },
    img: {
      verticalAlign: 'bottom'
    }
  };
  return (
    <div style={style.div}>
      <img style={style.img} alt="" src={props.url} />
    </div>
  )
}

export default Photo;