import React,{useState,useEffect} from 'react';
import axios from 'axios';

function UsingUseEffect(){
    const [post,setPost] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log('resolved');
            setPost(res.data)
        })
        .catch((rej)=>{
            console.log('error occured');
        })
    })
    return(
        <div>
            <ul>
                {
                    post.map((e)=>{
                        <li key={e.id}>{e.post}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default UsingUseEffect