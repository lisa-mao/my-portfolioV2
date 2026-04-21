import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { email, message } = await request.json();

        if (!email || !email.includes('@') || !message) {
            return NextResponse.json(
                { error: 'Vul een geldig e-mailadres en bericht in.' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: 'Portfolio <contact@lisamao.nl>',
            to: ['email.lisamao@gmail.com'],
            reply_to: email,
            subject: `Contactformulier: ${email}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="border-bottom: 2px solid #000; padding-bottom: 10px;">Nieuw bericht</h2>
                    <p><strong>Afzender:</strong> ${email}</p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <p style="white-space: pre-wrap; margin: 0;">${message}</p>
                    </div>
                </div>
            `,
        });

        if (data.error) {
            return NextResponse.json({ error: data.error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("Resend Error:", error);
        return NextResponse.json(
            { error: 'Serverfout bij het verzenden.' },
            { status: 500 }
        );
    }
}