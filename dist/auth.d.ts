/**
 * Arkadaş SDK - Auth Module
 * Handles OIDC Login and Token Management
 */
export interface AuthConfig {
    clientId: string;
    issuer: string;
    redirectUri: string;
    scope: string;
}
export declare class AuthManager {
    private config;
    constructor(config: AuthConfig);
    /**
     * Initiates the OIDC Authorization Code Flow (PKCE)
     */
    login(tenantId: string): Promise<void>;
    /**
     * Handle the callback and exchange code for tokens
     */
    handleCallback(code: string): Promise<string>;
}
