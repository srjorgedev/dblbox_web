import { BASE_API_URL } from "../utils/API";
import type { Session } from "../types/session";

export async function getSession(email: FormDataEntryValue, password: FormDataEntryValue) {
    const body = new URLSearchParams();
    body.append("email", email.toString());
    body.append("password", password.toString());

    const response = await fetch(`${BASE_API_URL}auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded", 
        },
        body: body.toString(), 
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Error during login");
    }

    const data: Session = await response.json();

    return {
        role: data.role,
        token: data.token,
    };
}
