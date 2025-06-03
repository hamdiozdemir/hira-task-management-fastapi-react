import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router";
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Users from "./pages/Users";
import { isLoggedIn } from "./hooks/useAuth"
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import TaskStatusSettings from "./components/Settings/TaskStatusSettings";


const ProtectedRoute = () => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}


function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/users" element={<Users />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} >
                <Route index element={<TaskStatusSettings />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App 