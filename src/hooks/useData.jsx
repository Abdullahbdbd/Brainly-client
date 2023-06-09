import { useEffect, useState } from "react"

const useData =()=>{
    const [teachers, setTeachers]= useState([])
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        fetch('http://localhost:5000/school')
        .then(res => res.json())
        .then(data=>{
            setTeachers(data)
            setLoading(false)
        })
    },[])
    return [teachers, loading]
}
export default useData;