import React, { useState } from "react";
import { Box, Heading, Flex, Button, useBreakpointValue } from "@chakra-ui/react";
import { BaseTask } from "../../client/types.gen";
import TaskThumbnail from "./TaskThumbnail";
import TaskDetail from "./TaskDetail";

import { mockTaskStatusList } from "../../mockdata";


const Board = ({ tasks }: { tasks: BaseTask[] }) => {
    const [activeColumn, setActiveColumn] = useState(mockTaskStatusList[0]);
    const isMobile = useBreakpointValue({ base: true, sm: false });

    const [selectedTask, setSelectedTask] = useState<BaseTask | null>(null)

    const columns = mockTaskStatusList;

    return (
        <Box
            width="100%"

        >
            <Heading mb={6}>Board</Heading>
            
            {/* Mobile column switcher */}
            {isMobile && (
                <Flex mb={4} gap={2} overflowX="auto" pb={2} justifyContent="center">
                    {columns.map((column) => (
                        <Button
                            key={column.id}
                            size="xs"
                            variant={activeColumn.id === column.id ? "solid" : "outline"}
                            colorScheme="blue"
                            onClick={() => setActiveColumn(mockTaskStatusList.find(status => status.id === column.id)!)}
                            minW="fit-content"
                            whiteSpace="nowrap"
                        >
                            {column.name}
                        </Button>
                    ))}
                </Flex>
            )}

            <Box overflowX="auto">
                <Flex gap={4} height="100%">
                    {columns.map((column) => (
                        <Flex 
                            key={column.id}
                            direction="column" 
                            flex={1} 
                            bg="gray.200" 
                            p={4} 
                            borderRadius="md"
                            minHeight="500px"
                            minWidth="250px"
                            display={isMobile ? (activeColumn.id === column.id ? "flex" : "none") : "flex"}
                        >
                            <Heading size="md" textAlign="center" color="gray.700" mb={2}>
                                {column.name.toUpperCase()} ({tasks.filter(task => task.status.id === column.id).length})
                            </Heading>
                            {tasks.filter(task => task.status.id === column.id).map((task) => (
                                <TaskThumbnail key={task.id} task={task} onClick={() => setSelectedTask(task)} />
                            ))}
                        </Flex>
                    ))}

                </Flex>
            </Box>



            {selectedTask && 
                <Box position="fixed" top="20px" right="20px" width="100%" zIndex="1005"
                    display="flex"
                    justifyContent="flex-end"
                    
                >
                    <Button onClick={() => setSelectedTask(null)}>Close</Button>
                </Box>
            }

            {selectedTask && 
                <TaskDetail task={selectedTask} />
            }

        </Box>
    )
}

export default Board;


