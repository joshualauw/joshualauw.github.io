"use server";

interface ISendEmail {
    name: string;
    content: string;
}

export async function sendEmail({ name, content }: ISendEmail) {
    try {
        await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: `portfolio@resend.dev`,
                to: "joshualauw1@gmail.com",
                subject: `Message from ${name}`,
                text: content,
            }),
        });
        return { message: "email sent successfully", status: true };
    } catch (err) {
        return { message: "email failed to sent", status: false };
    }
}
