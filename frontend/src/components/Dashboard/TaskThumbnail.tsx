import React from "react";
import { Box, Text, Flex, Icon, Mark, Avatar } from "@chakra-ui/react";
import { Tooltip } from "../ui/Tooltip";
import { BaseTask } from "../../client/types.gen";
import { icons, GetIcon } from "../helpers";


const TaskThumbnail = ({ task, onClick }: { task: BaseTask; onClick?: () => void }) => {
    return (
        <Box
            border="1px"
            borderColor="gray.600"
            borderRadius="md"
            p={2}
            bg="gray.100"
            boxShadow="sm"
            minH="100px"
            mb={2}
            onClick={onClick}
            cursor={onClick ? "pointer" : "default"}>
            <Flex
                direction="column"
                rowGap={2}
            >
                <Box m={0} color="gray.800" fontSize="sm">
                    {task.toplist_type && 
                        <Text as="span" fontWeight="bold">
                            {task.toplist_type}: {task.toplist_site} ({task.country})
                        </Text>
                    }
                    {!task.toplist_type &&
                        <Text fontWeight="bold">{task.title}</Text>
                    }
                </Box>

                <Flex gap={2} alignItems="center">

                    <Tooltip content={task.category.name.toLocaleUpperCase()}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <GetIcon name={task.category.icon} color={task.category.color} size="16px" />
                        </Box>
                    </Tooltip>

                    <Text fontSize="xs" fontWeight="bold" color="gray.500">{task.code}</Text>

                    <Tooltip content={task.priority.name.toLocaleUpperCase()}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <GetIcon name={task.priority.icon} color={task.priority.color} size="16px" />
                        </Box>
                    </Tooltip>

                </Flex>

                <Flex gap={2} alignItems="center">
                    <Avatar.Root key={task.assigned_to?.id} size="2xs" colorPalette={task.assigned_to ? "blue" : "red"}>
                        <Avatar.Fallback name={task.assigned_to?.full_name ?? "Unassigned"} />
                        <Avatar.Image src="" />
                    </Avatar.Root>

                    <Text fontSize="xs" color="gray.500">{task.assigned_to?.full_name ?? "Unassigned"}</Text>
                </Flex>


            </Flex>

        </Box>
    )
}   

export default TaskThumbnail;
