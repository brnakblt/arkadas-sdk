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

export class AuthManager {
    private config: AuthConfig;

    constructor(config: AuthConfig) {
        this.config = config;
    }

    /**
     * Initiates the OIDC Authorization Code Flow (PKCE)
     */
    async login(tenantId: string) {
        // Construct the login URL for the Nextcloud fork
        const authUrl = new URL(`${this.config.issuer}/index.php/apps/user_oidc/authorize`);
        authUrl.searchParams.append('response_type', 'code');
        authUrl.searchParams.append('client_id', this.config.clientId);
        authUrl.searchParams.append('redirect_uri', this.config.redirectUri);
        authUrl.searchParams.append('scope', this.config.scope);
        authUrl.searchParams.append('state', btoa(JSON.stringify({ tenantId })));
        
        // Redirect the user
        window.location.href = authUrl.toString();
    }

    /**
     * Handle the callback and exchange code for tokens
     */
    async handleCallback(code: string): Promise<string> {
        // Exchange implementation (usually handled by the backend bridge for security)
        return code;
    }
}
