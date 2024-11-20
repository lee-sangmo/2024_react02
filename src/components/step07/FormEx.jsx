import React, { useState } from 'react';

function FormEx(props) {
  const [userName, setUserName] = useState('')
  const [isSubscribed, setSubScribed] = useState(false)
  const roles = ['user', 'admin', 'guest']
  const [role, setRole] = useState(roles[0])
  return (
    <form>
      <p>Name: {userName} {isSubscribed && '(Subscribed)'} </p>
      <p>Role: {role}</p>
      <p>
      <input 
        type='text'
        placeholder='UserName'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      </p>
      <p>
      <input 
        type='checkbox'
        checked={isSubscribed}
        onChange={e => setSubScribed(e.target.checked)}
      />
      <label>Subscribed</label>
      </p>
      <p>
        <select 
          value={role}
          onChange={e=>setRole(e.target.value)} 
        >
          {
            roles.map((k)=>(
              <option key={k} value={k}>{k}</option>
            ))}

        </select>
          
      </p>
    </form>
  );
}

export default FormEx;