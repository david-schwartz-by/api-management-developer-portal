import { MockRouter } from "./mockRouter";
import { StaticSettingsProvider } from "../../src/components/staticSettingsProvider";
import { MockAuthenticator } from "./mockAuthenticator";
import { MockHttpClient } from "./mockHttpClient";
import { MapiClient } from "../../src/services/mapiClient";

describe("My tests", async () => {
    it("Test 1", async () => {
        const httpClient = new MockHttpClient();
        const authenticator = new MockAuthenticator();
        const settingsProvider = new StaticSettingsProvider({});
        const router = new MockRouter();

        const mapiClient = new MapiClient(httpClient, authenticator, settingsProvider, router);

        await mapiClient.get("/someurl");
    });

    it("Test 2", async () => {
        console.log("Test 3");
    });

    it("Test 3", async () => {
        console.log("Test 4");
    });
});