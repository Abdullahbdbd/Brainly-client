import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react"

const useData =()=>{
    // const [teachers, setTeachers]= useState([])
    // const [loading, setLoading]= useState(true)

    // useEffect(()=>{
    //     fetch('http://localhost:5000/school')
    //     .then(res => res.json())
    //     .then(data=>{
    //         setTeachers(data)
    //         setLoading(false)
    //     })
    // },[])

    const {data: teachers = [] , isLoading: loading, refetch} = useQuery({
        queryKey: ['teachers'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/school');
            return res.json();
        }
    })

    return [teachers, loading, refetch]
}
export default useData;