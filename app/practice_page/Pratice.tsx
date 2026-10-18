"use client"
import React, { useEffect, useState } from 'react'

const Pratice = () => {

    const [prods,setProds] = useState([]);

    const [search,setSearch] = useState("");

    const makesearch =(e)=>{

        e.preventDefault();

       

        setSearch(e.target.value);

        console.log(search);

    }



    useEffect(()=>{

        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data=> setProds(data.products));

    },[])

    const filteredprod = prods.filter((singlepro)=>{
        return singlepro.title.toLowerCase().includes(search.toLowerCase());
    })
  return (
    <div>

        <div className='flex justify-center py-10'>
            <input onChange={makesearch} type="text" className='border-2 border-black w-[250px] h-[45px]' />
        </div>

    {
        filteredprod.map((singelprod,index)=>{
            return(
                <div key={index}>

                    <p>{singelprod.title}</p>

                </div>
            )
        })
    }
      
    </div>
  )
}

export default Pratice
