
const Divider = ({style}) => {
  return (
    <div className={`${style} flex flex-col gap-y-0.5 my-8`}>
      <div className="w-12 h-0.5 bg-primary" />
      <div className="w-24 h-0.5 bg-secondary" />
    </div>
  )
}

export default Divider