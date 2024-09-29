export interface TaskBoardData {
    key: string,
    taskType: string,
    taskKey: string,
    name: string,
    assignee?: {
        color: string,
        name: string
        id?: string
    },
    status: string,
    timeblock?: {
        color: string,
        name: string,
        id?: string
    }
    dueDate?: Date
}