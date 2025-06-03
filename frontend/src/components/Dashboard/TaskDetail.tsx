import React, { useState } from "react"
import { Box, Text, Flex, Icon, Mark, Avatar, Link, Textarea, Separator, Button } from "@chakra-ui/react"
import { BaseTask } from "../../client/types.gen"



const TaskDetail = ({ task }: { task: BaseTask }) => {
    const [comment, setComment] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Add API call to submit comment
        console.log("Submitting comment:", comment);
        setComment(""); // Clear form after submission
    };

    return (
        <Box
            width="100vw"
            minH="100vh"
            position="fixed"
            top="0"
            left="0"
            zIndex="1000"
            p={20}
            display="flex"
            justifyContent="center"
            // alignItems="center"
        >
            <Box
                width="65vw"
                height="80vh"
                bg="gray.100"
                // borderRadius="md"
                p={4}
                boxShadow="md"
                display="flex"
                flexDirection="column"
            >
                <Link fontSize="sm" fontWeight="bold" href={`/tasks/${task.id}`}>#{task.code} - {task.title}</Link>

                <Box mt={5} p={2}>
                    <Text fontSize="md" fontWeight="bold">{task.title}</Text>
                    <Text fontSize="md" >{task.status.name}</Text>
                </Box>

                <Box
                    display="flex"
                    mt={5}
                    alignItems="center"
                    width="100%"
                    gap={5}
                >
                    <Avatar.Root key={task.assigned_to.id} size="2xs" colorPalette="blue">
                        <Avatar.Fallback name={task.assigned_to.full_name ?? "N/A"} />
                        <Avatar.Image src="" />
                    </Avatar.Root>

                    <Box bg="white" p={2} borderRadius="md" width="100%">
                        <Text fontSize="sm">{task.description}</Text>
                        <Text fontSize="2xs" color="gray.500" textAlign="right">{task.created_at}</Text>
                    </Box>
                </Box>

                <Separator />

                <Box>
                    <Text fontSize="md" fontWeight="bold">Comments</Text>

                    <form onSubmit={handleSubmit}>
                        <Textarea 
                            placeholder="Add a comment" 
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            mb={2}
                            bg="white"
                        />
                        <Button 
                            type="submit" 
                            colorScheme="blue" 
                            size="sm"
                            disabled={!comment.trim()}
                        >
                            Add Comment
                        </Button>
                    </form>
                </Box>

            </Box>

            <Box
                width="25vw"
                height="80vh"
                bg="gray.100"
                // borderRadius="md"
                p={4}
                boxShadow="md"
            >
                <Text fontSize="2xl" fontWeight="bold">SIDE MENU</Text>

            </Box>


        </Box>
    )
}   

export default TaskDetail
