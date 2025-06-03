import React from 'react';
import { Box, Flex, Text, Spacer, Button, HStack } from '@chakra-ui/react';
import { Outlet, useNavigate } from 'react-router';

import { ColorModeProvider } from '../components/ui/color-mode'



  
  const Layout: React.FC = () => {

    const navigate = useNavigate();
    return (
      <ColorModeProvider>

            <Box minH="100vh">
            {/* Topbar */}
            <Flex
                as="header"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="1rem"
                bg="blue.500"
                color="white"
                shadow="md"
            >
                <Text fontSize="xl" fontWeight="bold" _hover={{cursor: 'pointer'}} onClick={() => navigate('/')}>
                Humbl JIRA
                </Text>
                
                <Spacer />
                
                <HStack>
                <Button
                    variant="ghost"
                    color="white"
                    _hover={{ bg: 'blue.600' }}
                    onClick={() => navigate('/')}
                >
                    Home
                </Button>

                <Button
                    variant="ghost"
                    color="white"
                    _hover={{ bg: 'blue.600' }}
                    onClick={() => navigate('/dashboard')}
                >
                    Dashboard
                </Button>
                <Button
                    variant="ghost"
                    color="white"
                    _hover={{ bg: 'blue.600' }}
                    onClick={() => navigate('/users')}
                >
                    Users
                </Button>
                <Button
                    variant="ghost"
                    color="white"
                    _hover={{ bg: 'blue.600' }}
                    onClick={() => navigate('/settings')}
                >
                    Settings
                </Button>

                <Button
                    variant="outline"
                    color="white"
                    borderColor="white"
                    _hover={{ bg: 'white', color: 'blue.500' }}
                    onClick={() => navigate('/login')}
                >
                    Login
                </Button>
                </HStack>
            </Flex>

            {/* Main content area */}
            <Box as="main">
                <Outlet />
            </Box>
            </Box>
      </ColorModeProvider>
    );
  };
  
  export default Layout;


