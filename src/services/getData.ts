import type { FullData } from "../types/data.get";
import type { FormatedCharacterV2 } from "../types/formated.character.v2";
import type { SummaryCharacter } from "../types/summary.formated.character";
import { API_URL_V2, BASE_API_ENDPOINTS, BASE_API_URL } from "../utils/API";

export async function getSummaryCharacters(): Promise<SummaryCharacter[]> {
    try {
        const response = await fetch(`${BASE_API_URL}${BASE_API_ENDPOINTS.all}`, {
            method: "GET",
            redirect: "manual"
        });

        if (response.status >= 300 && response.status < 400) {
            const location = response.headers.get("Location");
            throw new Error(`Redirection detected: ${location}`);
        }

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}

export async function getCharacter(id: number): Promise<FormatedCharacterV2> {
    const response = await fetch(`${API_URL_V2}${BASE_API_ENDPOINTS.id(id)}`);
    const data = await response.json();

    return data;
}

export async function getData(): Promise<FullData> {
    try {
        const response = await fetch(`${BASE_API_URL}data/get/all`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json()
        return json
    } catch (error) {
        console.error("Fetch error:", error);
        return { color: [], type: [], chapter: [], rarity: [], tag: [] }
    }
}

export async function getSparkings(): Promise<SummaryCharacter[]> {
    try {
        const response = await fetch(`${BASE_API_URL}characters/get/summary/rarity/3`, {
            method: "GET",
            redirect: "manual"
        });

        if (response.status >= 300 && response.status < 400) {
            const location = response.headers.get("Location");
            throw new Error(`Redirection detected: ${location}`);
        }

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}

export async function getHero(): Promise<SummaryCharacter[]> {
    try {
        const response = await fetch(`${BASE_API_URL}characters/get/summary/rarity/1`, {
            method: "GET",
            redirect: "manual"
        });

        if (response.status >= 300 && response.status < 400) {
            const location = response.headers.get("Location");
            throw new Error(`Redirection detected: ${location}`);
        }

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}

export async function getExtreme(): Promise<SummaryCharacter[]> {
    try {
        const response = await fetch(`${BASE_API_URL}characters/get/summary/rarity/2`, {
            method: "GET",
            redirect: "manual"
        });

        if (response.status >= 300 && response.status < 400) {
            const location = response.headers.get("Location");
            throw new Error(`Redirection detected: ${location}`);
        }

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}

export async function getUltra(): Promise<SummaryCharacter[]> {
    try {
        const response = await fetch(`${BASE_API_URL}characters/get/summary/rarity/4`, {
            method: "GET",
            redirect: "manual"
        });

        if (response.status >= 300 && response.status < 400) {
            const location = response.headers.get("Location");
            throw new Error(`Redirection detected: ${location}`);
        }

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}

export async function getLL(): Promise<SummaryCharacter[]> {
    try {
        const response = await fetch(`${BASE_API_URL}characters/get/summary/ll`, {
            method: "GET",
            redirect: "manual"
        });

        if (response.status >= 300 && response.status < 400) {
            const location = response.headers.get("Location");
            throw new Error(`Redirection detected: ${location}`);
        }

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}

export async function getLLUL(): Promise<SummaryCharacter[]> {
    try {
        const responseUl = fetch(`${BASE_API_URL}characters/get/summary/rarity/4`, {
            method: "GET",
            redirect: "manual"
        });
        const responseLL = fetch(`${BASE_API_URL}characters/get/summary/ll`, {
            method: "GET",
            redirect: "manual"
        });

        const responses = await Promise.all([responseUl, responseLL])

        if (responses[0].status >= 300 && responses[0].status < 400) {
            const location = responses[0].headers.get("Location");
            throw new Error(`Redirection detected: ${location}`);
        }

        if (responses[1].status >= 300 && responses[1].status < 400) {
            const location = responses[0].headers.get("Location");
            throw new Error(`Redirection detected: ${location}`);
        }

        if (!responses[0].ok) {
            throw new Error(`HTTP error! Status: ${responses[0].status}`);
        }

        if (!responses[1].ok) {
            throw new Error(`HTTP error! Status: ${responses[1].status}`);
        }

        const json1 = await responses[0].json();
        const json2 = await responses[1].json()

        return [...json1, ...json2];
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}