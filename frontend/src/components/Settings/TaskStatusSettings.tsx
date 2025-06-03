import React from "react";
import { Box, Heading, IconButton, Table, Button } from "@chakra-ui/react";
import { mockTaskStatusList } from "../../mockdata";
import { FaEdit, FaTrashAlt } from "react-icons/fa";


const TaskStatusSettings = () => {
    return (
        <Box p={10}>
            <Heading>Task Statuses</Heading>

            <Table.Root size="sm" striped>
            <Table.Header>
                <Table.Row>
                <Table.ColumnHeader>ID</Table.ColumnHeader>
                <Table.ColumnHeader>Name</Table.ColumnHeader>
                <Table.ColumnHeader>Color</Table.ColumnHeader>
                <Table.ColumnHeader>Order</Table.ColumnHeader>
                <Table.ColumnHeader>Edit</Table.ColumnHeader>
                <Table.ColumnHeader>Delete</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {mockTaskStatusList.map((status) => (
                <Table.Row key={status.id}>
                    <Table.Cell>{status.id}</Table.Cell>
                    <Table.Cell>{status.name}</Table.Cell>
                    <Table.Cell>{status.color}</Table.Cell>
                    <Table.Cell>{status.order}</Table.Cell>
                    <Table.Cell>
                        <IconButton
                            aria-label="Edit"
                            variant="outline"
                            size="sm"
                            colorPalette="blue"
                        >
                            <FaEdit />
                        </IconButton>
                    </Table.Cell>
                    <Table.Cell>
                        <IconButton
                            aria-label="Delete"
                            variant="outline"
                            size="sm"
                            colorPalette="red"
                        >
                            <FaTrashAlt />
                        </IconButton>
                    </Table.Cell>
                </Table.Row>
                ))}
            </Table.Body>
            </Table.Root>




        </Box>
    )
}

export default TaskStatusSettings;