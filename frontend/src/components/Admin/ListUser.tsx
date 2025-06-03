import React from "react";
import { Box, Button, Flex, Heading, Text, Table } from "@chakra-ui/react";

import { UserActionsMenu } from "../Common/UserActionsMenu";


import { mockUsers } from "../../mockdata";
import { UserPublic } from "../../client";
import { useQueryClient } from "@tanstack/react-query";


const ListUser = () => {

    const queryClient = useQueryClient()
    const currentUser = queryClient.getQueryData<UserPublic>(["currentUser"])

    return (
        <Box>

            <Table.Root size="sm" striped>
            <Table.Header>
                <Table.Row>
                <Table.ColumnHeader>Full Name</Table.ColumnHeader>
                <Table.ColumnHeader>Email</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">Role</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">Status</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">Is Superuser</Table.ColumnHeader>
                <Table.ColumnHeader w="sm">Actions</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {mockUsers.map((user) => (
                <Table.Row key={user.id}>
                    <Table.Cell>{user.full_name}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell textAlign="end">{user.role}</Table.Cell>
                    <Table.Cell textAlign="end">{user.is_active ? "Active" : "Inactive"}</Table.Cell>
                    <Table.Cell textAlign="end">{user.is_superuser ? "Yes" : "No"}</Table.Cell>
                    <Table.Cell>
                        <UserActionsMenu
                        user={user}
                        disabled={currentUser?.id === user.id}
                        />
                    </Table.Cell>
                </Table.Row>
                ))}
            </Table.Body>
            </Table.Root>

        </Box>
    );
}

export default ListUser;