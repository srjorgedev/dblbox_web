export interface Session {
    message: string
    user: User
    token: string
    role: string
}

export interface User {
    id: string
    email: string
}
