import { BASE_API_URL, BASE_API_ENDPOINTS } from "../utils/API";
import type { SummaryCharacter } from "../types/summary.formated.character";
import type { FormatedCharacter } from "../types/formated.character";

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

export async function getCharacter(id: number): Promise<FormatedCharacter> {
    const response = await fetch(`${BASE_API_URL}${BASE_API_ENDPOINTS.id(id)}`);
    const data = await response.json();

    return data;
}