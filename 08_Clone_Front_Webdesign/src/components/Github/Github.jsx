import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/nikamvenkatesh')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data);
    //     })
    // }, [])
    return(
        <div className="text-center p-4 bg-gray-600 m-4 text-white text-3xl"> Github followers : {data.following}
        <img className="w-20" src={data.avatar_url} alt=" github pic" />
        </div>
        
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/nikamvenkatesh')
    return response.json()
}