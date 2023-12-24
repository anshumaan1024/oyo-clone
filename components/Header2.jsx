
const Header2 = () => {
    const List = [
        {
            name : "Bangalore"
        },
        {
            name : "Calcutta"
        },
        {
            name : "Mumbai"
        },
        {
            name : "Delhi"
        },
        {
            name : "Hyderabad"
        },
    ] 
  return (
    <div>
        <div className="flex px-10  bg-grey-100 justify-between ">{

            List.map((e)=>{
                return (
                    <span key={e.name}>{e.name}</span>
                )
            })
        }</div>
      
    </div>
  )
}

export default Header2
