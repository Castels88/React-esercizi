import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser ({username}){
    const {user, loading, error} = useGithubUser(username)
        return(
        <div>
            {loading && <p>Loading...</p> }
            {error && <p>error...</p> }
            {user&&
                <div>
                    <h1>{`Name: ${user.name}`}</h1>
                </div>
            }
        </div>
    )
}