import { 
    BaseTask, 
    UserPublic, 
    TaskStatus, 
    TaskType, 
    TaskPriority, 
    TaskCategory, 
    TaskComment, 

} from "./client/types.gen";



export const mockUsers: UserPublic[] = [
    {
        id: "sdfd-8h3h-3434",
        email: "john.doe@example.com",
        role: "admin",
        is_active: true,
        is_superuser: true,
        full_name: "John Doe Admin",
    },
    {
        id: "sdfd-8h3h-3437",
        email: "john.doe2@example.com",
        role: "qa",
        is_active: true,
        is_superuser: false,
        full_name: "John Doe QA",
    },
    {
        id: "sdfd-8h3h-3439",
        email: "john.doe3@example.com",
        role: "developer",
        is_active: true,
        is_superuser: false,
        full_name: "John Doe Developer",
    }
]


export const mockUserAdmin: UserPublic = {
    id: "sdfd-8h3h-3434",
    email: "john.doe@example.com",
    role: "admin",
    is_active: true,
    is_superuser: true,
    full_name: "John Doe Admin",
}

export const mockUserQa: UserPublic = {
    id: "sdfd-8h3h-3437",
    email: "john.doe2@example.com",
    role: "qa",
    is_active: true,
    is_superuser: false,
    full_name: "John Doe QA",   
}

export const mockUserDeveloper: UserPublic = {
    id: "sdfd-8h3h-3439",
    email: "john.doe3@example.com",
    role: "developer",
    is_active: true,
    is_superuser: false,
    full_name: "John Doe Developer",
}


export const mockTaskStatusBacklog: TaskStatus = {
    id: 1,
    name: "backlog",
    color: "gray",
    order: 1,
}

export const mockTaskStatusInProgress: TaskStatus = {
    id: 2,
    name: "in progress",
    color: "blue",
    order: 2,
}

export const mockTaskStatusInReview: TaskStatus = {
    id: 3,
    name: "in review",
    color: "yellow",
    order: 3,
}

export const mockTaskStatusDone: TaskStatus = {
    id: 4,
    name: "done",
    color: "green",
    order: 4,
}

export const mockTaskStatusList: TaskStatus[] = [
    mockTaskStatusBacklog,
    mockTaskStatusInProgress,
    mockTaskStatusInReview,
    mockTaskStatusDone,
]


export const mockTaskTypeBug: TaskType = {
    id: 1,
    name: "bug",
    color: "red",
}

export const mockTaskTypeFeature: TaskType = {
    id: 2,
    name: "feature",
    color: "blue",
}

export const mockTaskTypeDocumentation: TaskType = {
    id: 3,
    name: "documentation",
    color: "green",
}

export const mockTaskTypeOther: TaskType = {
    id: 4,
    name: "other",
    color: "gray",
}

export const mockTaskTypeFix: TaskType = {
    id: 5,
    name: "fix",
    color: "orange",
}

export const mockTaskTypeList: TaskType[] = [
    mockTaskTypeBug,
    mockTaskTypeFeature,
    mockTaskTypeDocumentation,
    mockTaskTypeOther,
    mockTaskTypeFix,
]


export const mockTaskPriorityLow: TaskPriority = {
    id: 1,
    name: "low",
    color: "gray",
    icon: "signal_low",
}

export const mockTaskPriorityMedium: TaskPriority = {
    id: 2,
    name: "medium",
    color: "green",
    icon: "signal_medium",
}

export const mockTaskPriorityHigh: TaskPriority = {
    id: 3,
    name: "high",
    color: "orange",
    icon: "signal_full",
}

export const mockTaskPriorityCritical: TaskPriority = {
    id: 4,
    name: "critical",
    color: "red",
    icon: "fire",
}

export const mockTaskPriorityList: TaskPriority[] = [
    mockTaskPriorityLow,
    mockTaskPriorityMedium,
    mockTaskPriorityHigh,
    mockTaskPriorityCritical,
]


export const mockTaskCategoryToplist: TaskCategory = {
    id: 1,
    name: "toplist",
    color: "gray",
    icon: "list",
}

export const mockTaskCategoryAdvert: TaskCategory = {
    id: 2,
    name: "advert",
    color: "blue",
    icon: "advert",
}

export const mockTaskCategoryCompliance: TaskCategory = {
    id: 3,
    name: "compliance",
    color: "green",
    icon: "compliance",
}

export const mockTaskCategoryBrandMonitoring: TaskCategory = {
    id: 4,
    name: "brand monitoring",
    color: "red",
    icon: "monitor",
}

export const mockTaskCategoryUi: TaskCategory = {
    id: 5,
    name: "ui",
    color: "purple",
    icon: "ui",
}

export const mockTaskCategoryOther: TaskCategory = {
    id: 6,
    name: "other",
    color: "gray",
    icon: "other",
}

export const mockTaskCategoryList: TaskCategory[] = [
    mockTaskCategoryToplist,
    mockTaskCategoryAdvert,
    mockTaskCategoryCompliance,
    mockTaskCategoryBrandMonitoring,
    mockTaskCategoryUi,
]

export const mockTaskOne: BaseTask = {
    id: 1,
    created_by: mockUserAdmin,
    assigned_to: null,
    assigned_by: mockUserAdmin,
    qa_user: mockUserQa,
    created_at: "2021-01-01 12:00:00",
    updated_at: "2021-01-01 12:00:00",
    title: "Task 1",
    description: "Task 1 description",
    status: mockTaskStatusBacklog,
    category: mockTaskCategoryToplist,
    type: mockTaskTypeBug,
    priority: mockTaskPriorityLow,
    is_archived: false,
    code: "TL-101",
    toplist_site: "toplist.com",
    country: "Netherlands",
    toplist_type: "New Site",
}

export const mockTaskTwo: BaseTask = {
    id: 2,
    created_by: mockUserAdmin,
    assigned_to: mockUserQa,
    assigned_by: mockUserAdmin,
    qa_user: mockUserQa,
    created_at: "2025-05-25 12:00:00",
    updated_at: "2025-05-25 12:00:00",
    title: "Task 2",
    description: "Task 2 description",
    status: mockTaskStatusInProgress,
    category: mockTaskCategoryAdvert,
    type: mockTaskTypeFeature,
    priority: mockTaskPriorityMedium, 
    is_archived: false,
    code: "ADV-101",
}

export const mockTaskThree: BaseTask = {
    id: 3,
    created_by: mockUserAdmin,
    assigned_to: mockUserQa,
    assigned_by: mockUserAdmin,
    qa_user: mockUserQa,
    created_at: "2025-05-25 12:00:00",
    updated_at: "2025-05-25 12:00:00",
    title: "Task 3",
    description: "Task 3 description",
    status: mockTaskStatusInReview,
    category: mockTaskCategoryCompliance,
    type: mockTaskTypeDocumentation,
    priority: mockTaskPriorityHigh,
    is_archived: false,
    code: "CM-101",
}

export const mockTaskFour: BaseTask = {
    id: 4,
    created_by: mockUserAdmin,
    assigned_to: mockUserAdmin,
    assigned_by: mockUserAdmin,
    qa_user: mockUserQa,
    created_at: "2025-05-25 12:00:00",
    updated_at: "2025-05-25 12:00:00",
    title: "Task 4",
    description: "Task 4 description",
    status: mockTaskStatusDone,
    category: mockTaskCategoryBrandMonitoring,
    type: mockTaskTypeOther,
    priority: mockTaskPriorityCritical,
    is_archived: false,
    code: "BM-101",
}

export const mockTaskFive: BaseTask = {
    id: 5,
    created_by: mockUserAdmin,
    assigned_to: mockUserDeveloper,
    assigned_by: mockUserAdmin,
    qa_user: mockUserQa,
    created_at: "2025-05-25 12:00:00",
    updated_at: "2025-05-25 12:00:00",
    title: "Task 5",
    description: "Task 5 description",
    status: mockTaskStatusInReview,
    category: mockTaskCategoryUi,
    type: mockTaskTypeOther,
    priority: mockTaskPriorityCritical,
    is_archived: false,
    code: "UI-101",
}

export const mockTaskSix: BaseTask = {
    id: 6,
    created_by: mockUserAdmin,
    assigned_to: mockUserDeveloper,
    assigned_by: mockUserAdmin,
    qa_user: mockUserQa,
    created_at: "2025-05-25 12:00:00",
    updated_at: "2025-05-25 12:00:00",
    title: "Task 6 hhgh update this shit",
    description: "Task 6 description",
    status: mockTaskStatusBacklog,
    category: mockTaskCategoryToplist,
    type: mockTaskTypeFix,
    priority: mockTaskPriorityHigh,
    is_archived: false,
    code: "TL-102",
    toplist_site: "bettingsites.com",
    country: "Germany",
    toplist_type: "Missing Site",
}

export const mockTaskSeven: BaseTask = {
    id: 7,
    created_by: mockUserAdmin,
    assigned_to: mockUserDeveloper,
    assigned_by: mockUserAdmin,
    qa_user: mockUserQa,
    created_at: "2025-05-25 15:00:00",
    updated_at: "2025-05-25 15:00:00",
    title: "Task 7 fix the main bug",
    description: "Task 6sdf sdfsdfsdfdescription",
    status: mockTaskStatusInReview,
    category: mockTaskCategoryToplist,
    type: mockTaskTypeBug,
    priority: mockTaskPriorityMedium,
    is_archived: false,
    code: "TL-103",
    toplist_site: "toplist.com",
    country: "Netherlands",
    toplist_type: "New Site",
}



export const mockTaskList: BaseTask[] = [
    mockTaskOne,
    mockTaskTwo,
    mockTaskThree,
    mockTaskFour,
    mockTaskFive,
    mockTaskSix,
    mockTaskSeven,
]

export const mockTaskCommentOne: TaskComment = {
    id: 1,
    task: 1,
    created_by: mockUserAdmin,
    created_at: "2025-05-25 12:00:00",
    updated_at: "2025-05-25 12:00:00",
    content: "Task 1 comment etc lorem ipsum dolor sit amet",
}

export const mockTaskCommentTwo: TaskComment = {
    id: 2,
    task: 1,
    created_by: mockUserAdmin,
    created_at: "2025-05-25 12:00:00",
    updated_at: "2025-05-25 12:00:00",
    content: "Task 1 comment etc lorem ipsum dolor sit amet",
}

export const mockTaskCommentList: TaskComment[] = [
    mockTaskCommentOne,
    mockTaskCommentTwo,
]



