import React, {useEffect, useState} from 'react';
import {Skeleton} from "skeleton/skeleton";


const UserComponent = () => {
    const [profile, setProfile] = useState(null);
    useEffect(() => {
     setTimeout(async () => {
         const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
         const data = await response.json()
         setProfile(data)
     },5000)
    })

    return (
        <div className={'user'}>
            <h2>User profiles</h2>
            {profile && (
                <div className={'profile'}>
                    <h3>{profile.username}</h3>
                    <p>{profile.email}</p>
                    <a href={profile.website}> {profile.website} </a>
                </div>
            )}
            {!profile && (
                <Skeleton mode={'profile'} animation={'wave'}/>

            )}
        </div>
    );
};

export {UserComponent};