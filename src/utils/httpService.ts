import axios, {type AxiosRequestConfig, type AxiosResponse } from 'axios';

const BASE_URL = import.meta.env.PUBLIC_API_URL;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor - Add Bearer token if available
axiosInstance.interceptors.request.use(
    (config) => {
        // Check if we're in browser environment (not SSR)
        if (typeof window !== 'undefined') {
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor - Handle 401 errors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle 401 errors (token expired/invalid)
        if (error.response?.status === 401 && typeof window !== 'undefined') {
            localStorage.removeItem('accessToken');
            // Optionally redirect to login
            // window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export const httpService = {
    async get<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axiosInstance.get(path, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async post<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axiosInstance.post(path, data, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async put<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axiosInstance.put(path, data, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async patch<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axiosInstance.patch(path, data, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async delete<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axiosInstance.delete(path, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};