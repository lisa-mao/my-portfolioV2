import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, message } = req.body;
    if (!email || !email.includes('@') || !message) {
        return res.status(400).json({ error: 'Vul een geldig e-mailadres en bericht in.' });
    }

    try {
        const data = await resend.emails.send({
            from: 'Portfolio <contact@lisamao.nl>',
            to: ['email.lisamao@gmail.com'],
            reply_to: email,
            subject: `Contactformulier: ${email}`, // Added email to subject for easier searching
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
            console.error("Resend API Logic Error:", data.error);
            return res.status(400).json({ error: data.error.message });
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Connection Error:", error);
        return res.status(500).json({ error: 'Serverfout bij het verzenden.' });
    }
}