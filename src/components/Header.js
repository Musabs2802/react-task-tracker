import Button from './Button'

const Header = () => {
  const onClick = (e) => {
    console.log(e)
  }

  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button title='Add' onClick={onClick} />
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
