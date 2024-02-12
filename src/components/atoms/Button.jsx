/* eslint-disable react/prop-types */

function Button(props) {
  return (
    <button className='rounded-full bg-[#1D9BF0] py-1 px-4 font-semibold'>
      <p>{props.title}</p>
    </button>
  )
}

export default Button