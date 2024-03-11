import Button from "./Button"

const Header = ({title}) => {
    const onClick = () => {
        console.log('clicked');
    }
  return (
    <header className="flex justify-between p-2">
        <h1 className="font-bold text-2xl p-2">{title}</h1>
        <Button text='Add' clickFunction={onClick}/>
    </header>
  )
}

//default prop title for the functional component
Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header