import React,{useState} from 'react'

function HookCounterThree() {
    const [name,setName] = useState({firstName:'',lastName:''})

  return (
    <div>
        <form>
            <label>FirstName : </label>
            <input type='text' value={name.firstName} onChange={e => setName({...name,firstName:e.target.value})}/>
            <label>LastName : </label>
            <input type='text' value={name.lastName} onChange={e => setName({...name,lastName:e.target.value})}/>
            <h2>your first name is - {name.firstName}</h2>
            <h2>your last name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    </div>
  )
}

export default HookCounterThree