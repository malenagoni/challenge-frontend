import { Box, TextInput } from "grommet";
import React, { useEffect, useState } from "react";
import UserCard from "../components/user.card";
import { fetchStudents, Student } from "../services/students";

type Props = {};

const Main: React.FC<Props> = ({}) => {
    const [students, setStudents] = useState<Student[]>([]);
    const [input, setInput] = useState("");
    const [fetch, setFetch] = useState(true);

    useEffect(() => {
        fetchStudents().then((data: Student[]) => setStudents(data));
    }, [fetch]);

    const onChangeHandler = (event: any) => {
        let eventValue = event.target.value;
        console.log(eventValue)
        setInput(eventValue);
        
        const users: Student[] = students?.filter((s) => `${s?.first_name} ${s?.last_name}`.toLowerCase().includes(eventValue.toLowerCase()));
        
        if (eventValue === "") return setFetch((prevFetch) => !prevFetch);
        return setStudents(users);
    };

    return (
        <Box direction="column" pad="medium" height="100%" overflow="auto">
            <TextInput placeholder="type here" value={input} onChange={onChangeHandler} />
            <Box direction="row" wrap={true}>
                {students.length > 0 ? (
                    students?.map((s, i) => (
                        <Box margin="10px" key={i}>
                            <UserCard user={s} />
                        </Box>
                    ))
                ) : (
                    <div>No results</div>
                )}
            </Box>
        </Box>
    );
};

export default Main;
