import React, { useEffect, useState } from "react";

export function GithubUser({ username }) {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

async function fetchGithubUser(username) {
    setLoading(true);
    setError(null);

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const json = await response.json();
        setUser(json);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
}

    useEffect(() => {
    fetchGithubUser(username);
}, [username]);

    return (
    <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}
        {user && 
    <div>
        <h1>{`Name: ${user.name}`}</h1>
        <h1>{`URL: ${user.url}`}</h1>
    </div>

    }
    </div>
  )
}
