import axios, { AxiosRequestConfig } from 'axios'

declare class Moxios {
    constructor()

    mock(append: Record<string, unknown>): void
    _redirectRequestToMock(config: AxiosRequestConfig): AxiosRequestConfig
}

export { Moxios }
