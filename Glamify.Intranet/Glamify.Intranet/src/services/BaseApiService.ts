import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class BaseApiService {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
            }
        });

        this.initializeResponseInterceptor();
    }

    private initializeResponseInterceptor() {
        this.axiosInstance.interceptors.response.use(
            this.handleResponse,
            this.handleError
        );
    }

    private handleResponse = <T>(response: AxiosResponse<T>): T => {
        return response.data;
    };

    protected handleError = (error: any): Promise<any> => {
        // Optional: Handle global API error logging here
        return Promise.reject(error);
    }

    protected get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.get<T>(url, config).then(response => response.data);
    }

    protected post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.post<T>(url, data, config).then(response => response.data);
    }

    protected put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.put<T>(url, data, config).then(response => response.data);
    }

    protected delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.delete<T>(url, config).then(response => response.data);
    }
}

export default BaseApiService;
