/**
 * Arkadaş SDK - Core Client
 * Handles API requests with multi-tenant headers
 */

export interface ClientConfig {
    baseUrl: string;
    tenantId: string;
}

export class ArkadaşClient {
    constructor(private config: ClientConfig) {}

    async request(path: string, options: RequestInit = {}) {
        const url = `${this.config.baseUrl}${path}`;
        
        const headers = new Headers(options.headers);
        headers.set('X-Tenant-ID', this.config.tenantId);
        
        const response = await fetch(url, {
            ...options,
            headers
        });

        if (!response.ok) {
            throw new Error(`Arkadaş API Error: ${response.statusText}`);
        }

        return response.json();
    }

    async getMe() {
        return this.request('/api/v1/me');
    }

    async getStudents() {
        return this.request('/api/v1/students');
    }
}
