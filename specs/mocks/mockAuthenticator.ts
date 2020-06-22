import { HttpHeader } from "@paperbits/common/http";
import { IAuthenticator } from "../../src/authentication/IAuthenticator";
import { AccessToken } from "../../src/authentication";

export class MockAuthenticator implements IAuthenticator {
    public async getAccessToken(): Promise<string> {
        return "";
    }

    public async setAccessToken(accessToken: string): Promise<void> {
        return null;
    }


    public async refreshAccessTokenFromHeader(responseHeaders: HttpHeader[]): Promise<string> {
        return null;
    }

    public parseAccessToken?(accessToken: string): AccessToken {
        return null;
    }

    public async clearAccessToken(cleanOnlyClient?: boolean): Promise<void> {
        //
    }

    public async isAuthenticated(): Promise<boolean> {
        return null;
    }
}