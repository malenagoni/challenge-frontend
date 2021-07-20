import { Box, TextInput } from "grommet";
import React, { useEffect, useState } from "react";
import UserCard from "../components/user.card";
import { fetchStudents, Student } from "../services/students";

type Props = {};

const Main: React.FC<Props> = ({}) => {
    const onChangeHandler = (event: any) => {
        // TODO
    };

    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        fetchStudents().then((data: Student[]) => setStudents(data));
    }, []);
    
    return (
        <Box direction="column" pad="medium" height="100%" overflow="auto">
            <TextInput placeholder="type here" value="" onChange={onChangeHandler} />
            <Box direction="row" wrap={true}>
                {students.map((s,i) => (
                    <Box margin="10px" key={i}>
                        <UserCard user={s} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Main;
