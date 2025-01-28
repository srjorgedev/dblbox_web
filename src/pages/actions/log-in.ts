import type { APIRoute } from "astro";
import { getSession } from "../../services/getSession";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) throw new Error("Email and password are required");

    const { token, role } = await getSession(email, password);

    cookies.set("token", token?.toString() || "", {
        httpOnly: true,
        sameSite: "strict",
        path: "/",
    });

    cookies.set("role", role?.toString() || "", {
        httpOnly: true,
        sameSite: "strict",
        path: "/",
    });

    return redirect("/dashboard/");
};