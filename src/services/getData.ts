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