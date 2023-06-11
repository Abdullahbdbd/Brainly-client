import { useQuery } from "@tanstack/react-query";

const useData =()=>{

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