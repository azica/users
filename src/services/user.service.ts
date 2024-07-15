import { baseApiUrl } from "shared/constant";

export interface ErrorResponse {
    message: string;
}

export const UserService = {
    async getUsers(limit: number = 9): Promise<User[] | ErrorResponse> {
        try {
            const response = await fetch(`${baseApiUrl}/users?limit=${limit}`);

            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }

            const data = await response.json();
            return data as User[];
        } catch (err: unknown) {
            if (err instanceof Error) {
                return { message: err.message };
            }
            return { message: 'An unknown error occurred' };
        }
    },

    async getUserById(id: string): Promise<User | ErrorResponse> {
        try {
            const response = await fetch(`${baseApiUrl}/users/${id}`);

            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }

            const data = await response.json();
            return data as User;
        } catch (err: unknown) {
            if (err instanceof Error) {
                return { message: err.message };
            }
            return { message: 'An unknown error occurred' };
        }
    },
};
