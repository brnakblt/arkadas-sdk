"use strict";
/**
 * Arkadaş SDK - Core Client
 * Handles API requests with multi-tenant headers
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArkadaşClient = void 0;
class ArkadaşClient {
    constructor(config) {
        this.config = config;
    }
    async request(path, options = {}) {
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
exports.ArkadaşClient = ArkadaşClient;
