import Button from "./Button";

const Header = ({ title, onShow, showAdd }) => {
  return (
    <header className="flex justify-between p-2">
      <h1 className="font-bold text-2xl p-2">{title}</h1>
      <Button text={showAdd ? "Close" : "Add"} color={showAdd ? 'red' : 'green'} clickFunction={onShow} />
    </header>
  );
};

//default prop title for the functional component
Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
