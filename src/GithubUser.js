import React, { useEffect } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser ({username}){
    const {user, loading, error, onFetch} = useGithubUser(username)
        useEffect(()=>{
            onFetch(username)
        },[username])
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