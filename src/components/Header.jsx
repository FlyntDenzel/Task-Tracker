const Header = ({title}) => {
  return (
    <header>
        <h1 className="font-bold text-2xl p-2">{title}</h1>
    </header>
  )
}

//default prop title for the functional component
Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header