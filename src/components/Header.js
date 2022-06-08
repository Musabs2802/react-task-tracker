import Button from './Button'

const Header = ({ onAddClick, isFormVisible }) => {
  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button
        title={isFormVisible ? 'Close' : 'Add'}
        onClick={onAddClick}
        color={isFormVisible ? 'red' : ''}
      />
    </header>
  )
}

/** Default Props */
// Header.defualtProps = {
//     title: 'Task Tracker',
// }

/** Prop Types */
// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }

export default Header
