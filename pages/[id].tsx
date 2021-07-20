import { useRouter } from "next/dist/client/router";
import React from "react";
import { CardDetails } from "../components/user.details";
import { fetchStudents, Student } from "../services/students";

type Props = {};

const UserDetails: React.FC<Props> = ({}) => {
    const router = useRouter();
    const { id }:any = router.query;
    return (<div>
        <CardDetails id={id}/>
    </div>
    );
};

export default UserDetails;
