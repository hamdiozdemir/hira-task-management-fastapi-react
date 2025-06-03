import React from "react";

import { mockUsers } from "../mockdata";
import { Table, Container } from "@chakra-ui/react";
import ListUser from "../components/Admin/ListUser";
import AddUser from "../components/Admin/AddUser";


const Users = () => {
    return (
        <Container maxW="container.xl" py={10}>
            <AddUser />
            <ListUser />
        </Container>
    )
}

export default Users;
