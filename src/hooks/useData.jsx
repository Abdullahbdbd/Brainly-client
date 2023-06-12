import { useQuery } from "@tanstack/react-query";

const useData =()=>{

    const {data: teachers = [] , isLoading: loading, refetch} = useQuery({
        queryKey: ['teachers'],
        queryFn: async()=>{
            const res = await fetch('https://summer-camp-school-server-amber.vercel.app/school');
            return res.json();
        }
    })

    return [teachers, loading, refetch]
}
export default useData;