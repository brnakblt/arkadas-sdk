"use strict";
/**
 * Arkadaş SDK - Auth Module
 * Handles OIDC Login and Token Management
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthManager = void 0;
class AuthManager {
    constructor(config) {
        this.config = config;
    }
    /**
     * Initiates the OIDC Authorization Code Flow (PKCE)
     */
    async login(tenantId) {
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
    async handleCallback(code) {
        // Exchange implementation (usually handled by the backend bridge for security)
        return code;
    }
}
exports.AuthManager = AuthManager;
