
const Button = ({text, className}) => {
  return (
    <button className={`${className} btn`}>
        {text}
    </button>
  )
}

export default Button