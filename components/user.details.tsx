import React, { useEffect, useState } from "react";
import { Avatar, Card, CardBody, CardFooter, Text, Box, Button } from "grommet";
import { fetchStudents, Student } from "../services/students";
import { useRouter } from "next/router";

export const CardDetails = ({ id }: any) => {
    const [student, setStudent] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    console.log(id);
    useEffect(() => {
        if (id) fetching();
        console.log(student[0]);
    }, [id]);

    const fetching = async () => {
        await fetchStudents().then((data: Student[]) => setStudent(data?.filter((s) => s.id === id)));
        setLoading(false);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <Button primary label="Go Back" onClick={() => router.back()} />
            </div>
            {loading ? (
                <h1>Loading..</h1>
            ) : (
                <Box direction="row" border={{ color: "brand", size: "large" }} pad="medium" width="50%" height="100%" overflow="auto">
                    <Card height="100%" width="100%" align="center">
                        <Avatar src={student[0].avatar} size="large" />
                        <CardBody align="center" pad="large">
                            <Text textAlign="center">
                                <strong>Full Name: </strong>
                                {`${student[0].first_name} ${student[0].last_name}`}
                            </Text>
                            <Text textAlign="center">
                                <strong>Company: </strong>
                                {`${student[0].company}`}
                            </Text>
                            <Text textAlign="center">
                                <strong>Job: </strong>
                                {`${student[0].job}`}
                            </Text>
                            <Text textAlign="center">
                                <strong>Email: </strong>
                                {`${student[0].email}`}
                            </Text>
                        </CardBody>
                    </Card>
                </Box>
            )}
        </div>
    );
};
