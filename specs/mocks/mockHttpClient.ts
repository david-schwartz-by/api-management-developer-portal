import { HttpClient, HttpRequest, HttpResponse } from "@paperbits/common/http";

export class MockHttpClient implements HttpClient {
    public send<T>(request: HttpRequest): Promise<HttpResponse<T>> {
        return null;
    }
}