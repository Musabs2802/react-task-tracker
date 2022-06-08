import PropTypes from 'prop-types'

const Button = ({ title, color, onClick }) => {
  return (
    <button
      className='btn'
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

Button.defualtProps = {
  color: 'black',
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
