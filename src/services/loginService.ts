import { httpService } from "@/utils/httpService.ts";

type LoginPayload = {
    email: string;
    username: string;
    password: string;
};

export const loginService = {
    async login(data: LoginPayload) {
        return await httpService.post("/auth/login", { username : data.username, password: data.password , email : data.email });
    },
};