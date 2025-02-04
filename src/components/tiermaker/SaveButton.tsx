import { useState } from "react"
import html2canvas from "html2canvas"

export default function SaveButton() {
    const [isSaving, setIsSaving] = useState(false)

    async function handleSave() {
        const tierContainer = document.querySelector<HTMLElement>(".tier")

        if (!tierContainer) return

        const originalStyles = {
            padding: tierContainer.style.padding,
            margin: tierContainer.style.margin,
            boxSizing: tierContainer.style.boxSizing
        };

        // 2. Resetear estilos temporalmente
        tierContainer.style.padding = "0";
        tierContainer.style.margin = "0";
        tierContainer.style.boxSizing = "border-box";

        // 3. Calcular dimensiones precisas
        const { width, height } = tierContainer.getBoundingClientRect();
        const margin = 15; // Márgenes externos deseados

        const options = {
            useCORS: true,
            logging: true,
            scale: 2.5,
            backgroundColor: null,
            width: width,
            height: height,
            x: 0,
            y: 0,
            windowWidth: width,
            windowHeight: height,
            allowTaint: true,
            onclone: (clonedDoc: Document) => {
                // 4. Resetear estilos en el clon
                const clonedTier = clonedDoc.querySelector(".tier") as HTMLElement;
                if (clonedTier) {
                    clonedTier.style.padding = "0";
                    clonedTier.style.margin = "0";
                    clonedTier.style.boxSizing = "border-box";
                }

                clonedDoc.querySelectorAll(".row-container").forEach((el) => {
                    (el as HTMLElement).style.boxShadow = "none";
                    (el as HTMLElement).style.margin = "0";
                    (el as HTMLElement).style.padding = "0";
                });
            }
        };

        try {
            setIsSaving(true);

            const canvas = await html2canvas(tierContainer, options);

            // 5. Crear canvas con márgenes exactos
            const finalCanvas = document.createElement("canvas");
            finalCanvas.width = canvas.width + margin * 2;
            finalCanvas.height = canvas.height + margin * 2;

            const finalCtx = finalCanvas.getContext("2d");
            if (finalCtx) {
                finalCtx.fillStyle = "transparent";
                finalCtx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);
                finalCtx.drawImage(canvas, margin, margin);
            }

            const imgURL = finalCanvas.toDataURL("image/png");

            // 6. Descargar imagen
            const downloadLink = document.createElement("a");
            downloadLink.download = `dbl-tierlist-${Date.now()}.png`;
            downloadLink.href = imgURL;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

        } catch (error) {
            console.error("Error al generar la imagen:", error);
        } finally {
            // 7. Restaurar estilos originales
            tierContainer.style.padding = originalStyles.padding;
            tierContainer.style.margin = originalStyles.margin;
            tierContainer.style.boxSizing = originalStyles.boxSizing;
            setIsSaving(false);
        }
    }

    return (
        <button
            disabled={isSaving}
            className="btn save-btn"
            onClick={handleSave}
        >
            {isSaving ? (
                <>
                    <span className="loading-animation">⏳</span>
                    Guardando...
                </>
            ) : (
                "Guardar"
            )}
        </button>
    )
}