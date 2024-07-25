import React, { useEffect, useState } from 'react'
import data from './db.json'
import axios from 'axios'

const JsonRect = () => {

    const [getdata, setGetData] = useState([])


    useEffect(() => {
        axios({
            url:"https://jsonplaceholder.typicode.com/posts"
        })
        .then((res)=>setGetData(res.data))
        .catch((e)=>console.log("error",e))
   
    }, [])
    return (
        <div className=''>


            <div className='bg-red-200 h-[100vh]'>
                <button onClick={() => {
                    console.log("fg");

                }}>GEt</button>

                <div>
                    {getdata.map((e) => {
                        return (
                            <div key={e.id} className='bg-red-100 mt-3 '>
                                <p>{e.id}</p>
                                <h1 className='font-bold'>{e.title}</h1>
                                <p>{e.body}</p>


                     
                            </div>
                        )
                    })}
                </div>
            </div>

            {data.map((e, i) => {
                return (
                    <div key={e.id}>
                        <p>{e.userId}</p>
                        <h1>{e.title}</h1>
                        <h4>{e.body}</h4>
                    </div>
                )
            })}
        </div>

    )
}

export default JsonRect