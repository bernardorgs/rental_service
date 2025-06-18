
export type UserRole = 'Admin' | 'User'

interface IUserProps {
    id?: string;
    role: UserRole;
    name: string;
    phone: string;
    email: string;
    password: string;
}
