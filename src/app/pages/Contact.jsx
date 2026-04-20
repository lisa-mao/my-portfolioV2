import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState({ loading: false, success: false, message: "", error: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ ...status, loading: true, error: "" });

        const formData = new FormData(e.target);
        const data = {
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("pages/api/route.js", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                setStatus({ loading: false, success: true, message: "Bericht verzonden!", error: "" });
                e.target.reset();
            } else {
                setStatus({ loading: false, success: false, message: "", error: result.error || "Er ging iets mis." });
            }
        } catch (err) {
            setStatus({ loading: false, success: false, message: "", error: "Kon geen verbinding maken met de server." });
        }
    };

    return (
        <div className="flex justify-center items-center flex-col w-full h-full p-6">
            <h2 className="jersey text-3xl mb-2 tracking-wider">Samen iets moois bouwen?</h2>

            <form onSubmit={handleSubmit} className="w-full max-w-[500px] bg-white border-2 border-black rounded-xl pb-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-black p-2 text-center">
                    <p className="noto-sans-jp font-thin text-white text-xs tracking-widest uppercase">Nieuw Bericht</p>
                </div>

                <div className="p-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="noto-sans-jp font-bold text-sm uppercase">Email:</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="jouw@email.com"
                            disabled={status.loading}
                            className="border-2 border-black p-3 rounded-lg noto-sans-jp text-sm focus:outline-none focus:bg-gray-50 w-full disabled:opacity-50"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="noto-sans-jp font-bold text-sm uppercase">Bericht:</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Vertel me over je project..."
                            rows="4"
                            disabled={status.loading}
                            className="border-2 border-black p-3 rounded-lg noto-sans-jp text-sm focus:outline-none focus:bg-gray-50 w-full resize-none disabled:opacity-50"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status.loading}
                        className="bg-black text-white p-3 rounded-lg jersey text-2xl hover:bg-white hover:text-black border-2 border-black transition-all active:translate-y-1 disabled:bg-gray-600"
                    >
                        {status.loading ? "Versturen..." : "Verstuur bericht"}
                    </button>

                    {status.success && <p className="text-center text-green-600 font-bold mt-2">{status.message}</p>}
                    {status.error && <p className="text-center text-red-500 font-bold mt-2">{status.error}</p>}
                </div>
            </form>
        </div>
    );
}