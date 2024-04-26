import { NextResponse } from "next/server";
import { Resend } from "resend"

import { KoalaWelcomeEmail } from "@/emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { userFirstname } = await request.json()
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'darshitrajvansh890@gmail.com',
        subject: "welcome",
        react: KoalaWelcomeEmail({
            userFirstname
        })
    });

    return NextResponse.json({
        status: 'Ok'
    })
}