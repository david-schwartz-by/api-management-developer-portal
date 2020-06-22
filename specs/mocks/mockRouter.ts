import { Router, Route } from "@paperbits/common/routing";

export class MockRouter implements Router {
    public getCurrentUrl(): string {
        return "";
    }

    public getPath(): string {
        return "";
    }

    public getHash(): string {
        return "";
    }

    public getCurrentUrlMetadata(): Object {
        return null;
    }

    public notifyListeners?: boolean;


    public addRouteChangeListener?(eventHandler: (args?: any) => void): void {
        //
    }

    public removeRouteChangeListener?(eventHandler: (args?: any) => void): void {
        //
    }

    public addHistoryUpdateListener?(eventHandler: (args?: any) => void): void {
        //
    }

    public removeHistoryUpdateListener?(eventHandler: (args?: any) => void): void {
        //
    }

    public async navigateTo(url: string, title?: string, metadata?: Object): Promise<void> {
        //
    }

    public updateHistory?(url: string, title?: string): void {
        //
    }

    public getCurrentRoute(): Route {
        return null;
    }
}