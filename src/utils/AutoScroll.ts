interface AutoScrollerOptions {
    margin?: number; // Margen desde el borde donde empieza el scroll
    sensitivity?: number; // Sensibilidad del desplazamiento
    maxSpeed?: number; // Velocidad máxima de desplazamiento
}

export default class AutoScroller {
    private options: Required<AutoScrollerOptions>;
    private isDragging: boolean;
    private currentSpeed: number;
    private rafId: number | null;

    constructor(options: AutoScrollerOptions = {}) {
        this.options = {
            margin: options.margin ?? 50,
            sensitivity: options.sensitivity ?? 0.3,
            maxSpeed: options.maxSpeed ?? 10,
        };

        this.isDragging = false;
        this.currentSpeed = 0;
        this.rafId = null;

        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);

        this.setupEventListeners();
    }

    private setupEventListeners(): void {
        document.addEventListener("dragstart", this.handleDragStart);
        document.addEventListener("dragend", this.handleDragEnd);
        document.addEventListener("dragover", this.handleDragOver);
    }

    private handleDragStart(): void {
        this.isDragging = true;
    }

    private handleDragEnd(): void {
        this.isDragging = false;
        this.currentSpeed = 0;
        this.stopScrolling();
    }

    private handleDragOver(e: DragEvent): void {
        if (!this.isDragging) return;
        e.preventDefault();

        const { clientY } = e;
        const { innerHeight, scrollY } = window;
        const { margin, sensitivity, maxSpeed } = this.options;

        if (clientY < margin) {
            // Cursor cerca del borde superior → Scroll arriba
            this.currentSpeed = -Math.min(maxSpeed, (margin - clientY) * sensitivity);
        } else if (clientY > innerHeight - margin) {
            // Cursor cerca del borde inferior → Scroll abajo
            this.currentSpeed = Math.min(maxSpeed, (clientY - (innerHeight - margin)) * sensitivity);
        } else {
            this.currentSpeed = 0;
        }

        if (this.currentSpeed !== 0) {
            this.startScrolling();
        }
    }

    private startScrolling(): void {
        if (this.rafId) return;

        const scroll = () => {
            if (!this.isDragging || this.currentSpeed === 0) {
                this.stopScrolling();
                return;
            }

            window.scrollBy(0, this.currentSpeed);
            this.rafId = requestAnimationFrame(scroll);
        };

        this.rafId = requestAnimationFrame(scroll);
    }

    private stopScrolling(): void {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
            this.rafId = null;
        }
    }

    public destroy(): void {
        document.removeEventListener("dragstart", this.handleDragStart);
        document.removeEventListener("dragend", this.handleDragEnd);
        document.removeEventListener("dragover", this.handleDragOver);
    }
}
