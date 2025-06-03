import React, { useState } from "react";
import { Box, HStack, NativeSelect, Field } from "@chakra-ui/react";

import Board from "../components/Dashboard/Board";
import { mockTaskList, mockUsers, mockTaskStatusList, mockTaskTypeList, mockTaskPriorityList, mockTaskCategoryList } from "../mockdata";

import { TaskStatus, TaskPriority, BaseTask, UserPublic } from "../client/types.gen";


export type TaskFilter = {
    category: string | null
    type: string | null
    priority: string | null
    assigned_to: string | null
}


const Dashboard = () => {

    const [filter, setFilter] = useState<TaskFilter>({
        category: null,
        type: null,
        priority: null,
        assigned_to: null
    })

    const [tasks, setTasks] = useState<BaseTask[]>(mockTaskList)
    const [users, setUsers] = useState<UserPublic[]>(mockUsers)


    const handleFilterChange = (field: keyof TaskFilter, value: string | null) => {
        setFilter(prev => ({
            ...prev,
            [field]: value === "" ? null : value
        }))
        console.log(filter)
    }

    return (
        <Box p={4}>
            <Box p={4} bg="white" shadow="sm" mb={4}>
                <Box 
                    display="grid" 
                    gridTemplateColumns="repeat(auto-fit, minmax(120px, 1fr))" 
                    gap="2" 
                    mb="1"
                >

                    <NativeSelect.Root>
                        <NativeSelect.Field
                            placeholder="All Categories"
                            value={filter.category || ""}
                            onChange={(e) => handleFilterChange('category', e.target.value as string)}
                        >
                            {mockTaskCategoryList.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </NativeSelect.Field>
                    </NativeSelect.Root>

                    <NativeSelect.Root>
                        <NativeSelect.Field
                            placeholder="All Types"
                            value={filter.type || ""}
                            onChange={(e) => handleFilterChange('type', e.target.value as string)}
                        >
                            {mockTaskTypeList.map((type) => (
                                <option key={type.id} value={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </NativeSelect.Field>
                    </NativeSelect.Root>

                    <NativeSelect.Root>
                        <NativeSelect.Field
                            placeholder="All Priorities"
                            value={filter.priority || ""}
                            onChange={(e) => handleFilterChange('priority', e.target.value as string)}
                        >
                            {mockTaskPriorityList.map((priority) => (
                                <option key={priority.id} value={priority.id}>
                                    {priority.name}
                                </option>
                            ))}
                        </NativeSelect.Field>
                    </NativeSelect.Root>
                
                    <NativeSelect.Root size="sm" width="200px">
                        <NativeSelect.Field
                            placeholder="All Users"
                            value={filter.assigned_to || ""}
                            onChange={(e) => handleFilterChange('assigned_to', e.target.value)}
                        >
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.full_name}
                                </option>
                            ))}
                        </NativeSelect.Field>
                        <NativeSelect.Indicator />
                    </NativeSelect.Root>
                
                </Box>
            </Box>

            <Board tasks={tasks} />
        </Box>
    )
}   

export default Dashboard;
