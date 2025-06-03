import React from "react"
import { Box, Link, Heading, Flex } from "@chakra-ui/react"
import { Outlet } from "react-router"




const Settings = () => {
    return (
        <Box
            m={0}
            p={0}
            w="100%"
            h="100%"
            display="flex"
        >
            <Box
                as="aside"
                w="200px"
                h={`calc(100vh - 72px)`}
                bg="gray.100"
                boxShadow="md"
                p={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
                // gap={2}
                fontSize="md"
            >
                <Heading mt={2} fontSize="md">Dashboard Settings</Heading>

                <Flex borderTop="1px solid gray" py={2} w="95%" justifyContent="center" alignItems="center"
                    _hover={{ bg: 'gray.200' }}
                >
                    <Link href="/settings/task-statuses" variant="plain">Task Statuses</Link>
                </Flex>
                <Flex borderTop="1px solid gray" py={2} w="95%" justifyContent="center" alignItems="center"
                    _hover={{ bg: 'gray.200' }}
                >
                    <Link href="/settings/task-priority" variant="plain">Task Priority</Link>
                </Flex>

                <Heading mt={2} fontSize="md">Account Settings</Heading>

                <Flex borderTop="1px solid gray" py={2} w="95%" justifyContent="center" alignItems="center"
                    _hover={{ bg: 'gray.200' }}
                >
                    <Link href="/settings/task-statuses" variant="plain">Change Password</Link>
                </Flex>
                <Flex borderTop="1px solid gray" py={2} w="95%" justifyContent="center" alignItems="center"
                    _hover={{ bg: 'gray.200' }}
                >
                    <Link href="/settings/task-priority" variant="plain">Logout</Link>
                </Flex>

            </Box>
            
            
            
            <Outlet />
        </Box>
    )
}

export default Settings