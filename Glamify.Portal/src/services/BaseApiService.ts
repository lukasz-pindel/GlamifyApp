import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

class BaseApiService {
  private axiosInstance: AxiosInstance

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    })

    this.initializeResponseInterceptor()
  }

  private initializeResponseInterceptor() {
    this.axiosInstance.interceptors.response.use((response) => response, this.handleError)
  }

  protected handleError = (error: any): Promise<any> => {
    return Promise.reject(error)
  }

  protected get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.get<T>(url, config).then((response) => response.data)
  }

  protected post<T>(url: string, data?: any): Promise<T> {
    return this.axiosInstance.post<T>(url, data).then((response) => response.data)
  }

  protected put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.put<T>(url, data, config).then((response) => response.data)
  }

  protected delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.delete<T>(url, config).then((response) => response.data)
  }
}

export default BaseApiService
