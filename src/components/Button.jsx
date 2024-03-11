const Button = ({text, clickFunction}) => {
  return (
    <div>
        <button className="bg-green-900 rounded-md px-2 p-1 m-2 font-bold text-white" onClick={clickFunction}>{text}</button>
    </div> 
  )
} 

export default Button