import { useState } from "react";
import GithubUser from "./GithubUser";

export function GithubUserList({users}) {
  
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState('');

  function handleInput({target}) {
    setNewUser(target.value);
  }

  function handleSubmit() {
      setUser([...user, newUser]);
  }

  const userArray = user.map((user, index) => (
      <div>
        <ul>
          <li key={index}>
            <GithubUser username={user} />
          </li>
        </ul>
      </div>
  ))

  return (
    <div>

        <div>
                <input onChange={handleInput}/>
                <button onClick={handleSubmit}>Search</button>
        </div>

        <div>
            {userArray}
    </div>

    </div>
  )
}