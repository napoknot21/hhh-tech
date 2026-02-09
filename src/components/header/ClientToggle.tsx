import { useEffect, useState } from "react";

type ClientType = "professional" | "non_professional";

const STORAGE_KEY = "heroics_client_type";

export default function ClientToggle() {

    const [clientType, setClientType] = useState<ClientType>("professional");

    useEffect(() => {

        const saved = localStorage.getItem(STORAGE_KEY) as ClientType | null;
        
        if (saved === "professional" || saved === "non_professional") {
            setClientType(saved);
        }

    }, []);

    const select = (next: ClientType) => {
        setClientType(next);
        localStorage.setItem(STORAGE_KEY, next);
    };

    return (
        <div className="client-toggle" role="group" aria-label="Client type">
            <button
                type="button"
                className={`client-btn ${clientType === "professional" ? "is-active" : ""}`}
                onClick={() => select("professional")}
            >
                Profesional
            </button>
            
            <button
                type="button"
                className={`client-btn ${clientType === "non_professional" ? "is-active" : ""}`}
                onClick={() => select("non_professional")}
            >
                Non-Pro
            </button>
        </div>
    );
}
