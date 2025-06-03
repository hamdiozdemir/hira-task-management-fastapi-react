import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  SimpleGrid,
  Button
} from '@chakra-ui/react';

export default function Homepage() {
  return (
    <Container maxW="6xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={8}>
          <Heading size="2xl" mb={4} color="gray.700">
            Welcome to TaskFlow
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Organize your tasks, boost your productivity, and achieve your goals.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <Box p={6} borderWidth={1} borderRadius="lg">
            <Heading size="md" mb={3}>Easy Task Creation</Heading>
            <Text color="gray.600">Create and organize your tasks with just a few clicks.</Text>
          </Box>
          
          <Box p={6} borderWidth={1} borderRadius="lg">
            <Heading size="md" mb={3}>Track Progress</Heading>
            <Text color="gray.600">Monitor your progress and stay on top of deadlines.</Text>
          </Box>
          
          <Box p={6} borderWidth={1} borderRadius="lg">
            <Heading size="md" mb={3}>Prioritize Tasks</Heading>
            <Text color="gray.600">Set priorities and focus on what matters most.</Text>
          </Box>
        </SimpleGrid>

        <Box textAlign="center" py={8}>
          <Button colorScheme="blue" size="lg" mr={4}>
            Create Your First Task
          </Button>
          <Button variant="outline" size="lg">
            View All Tasks
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}
