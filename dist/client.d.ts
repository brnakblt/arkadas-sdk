/**
 * Arkadaş SDK - Core Client
 * Handles API requests with multi-tenant headers
 */
export interface ClientConfig {
    baseUrl: string;
    tenantId: string;
}
export declare class ArkadaşClient {
    private config;
    constructor(config: ClientConfig);
    request(path: string, options?: RequestInit): Promise<any>;
    getMe(): Promise<any>;
    getStudents(): Promise<any>;
}
