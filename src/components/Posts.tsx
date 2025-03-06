import { useEffect, useRef, useState } from "react";

type PostType = {
    id: number;
    title: string,
    body: string;
}
const Posts = () => {
    const [page, setPage] = useState(0)
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState();
    let abortRef = useRef<AbortController | null>(null);

    const [data, setData] = useState<PostType[]>()
    useEffect(() => {
        setLoading(true);
        const fetchData = () => {
            abortRef.current?.abort();
            abortRef.current = new AbortController();


            fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`, { signal: abortRef.current?.signal })
                .then((response) => {
                    return response.json();
                }).then((response) => {
                    setLoading(false);
                   // console.log(response);

                    setData(response);
                   // console.log(data);

                }).catch((e) => {
                    console.log(e);
                    setError(e);
                   // console.log("Error",e);
                })
        }
       // setTimeout(fetchData, 3000);
        fetchData();


    }, [page])
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const data: PostType[] = await response.json();
    // if(isLoading)
    //     return (<div>Loading...</div>);

    return (
        <>
            <button onClick={() => { setPage(page + 1) }}>Page {page}</button>
            {/* {error && <div>{error}</div>} */}
            {isLoading && <div>Loading..</div>}
            {!isLoading &&
                <table>

                    {
                        data?.map((item) => {
                            return (
                                <tr><td>{item.title}</td><td>{item.body}</td></tr>
                            )

                        })
                    }

                </table>
            }
        </>
    )






}
export default Posts;
