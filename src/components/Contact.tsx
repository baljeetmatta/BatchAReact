import { useParams } from "react-router-dom";

const Contact=()=>{
    // const data=useParams();
    // const id=data.id;
    const {id}=useParams();
    return (
        <>
        <div>Contact us Page -{id}

        </div>
        </>
    )
}
export default Contact;