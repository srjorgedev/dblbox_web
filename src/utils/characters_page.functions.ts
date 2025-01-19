export function toggleOffList(elements: NodeListOf<Element>): void {
    elements.forEach((element) => {
        if (element.classList.contains("on")) {
            element.classList.remove("on");
        }
        element.classList.add("off");
    });
}

export function toggleOnList(elements: NodeListOf<Element>): void {
    elements.forEach((element) => {
        if (element.classList.contains("off")) {
            element.classList.remove("off");
        }
        element.classList.add("on");
    });
}

export function toggleSelectedOffList(elements: NodeListOf<Element>): void {
    elements.forEach((element) => {
        if (element.classList.contains("selected")) {
            element.classList.remove("selected");
        }
    });
}

export function setToggleSelectedOn(target: HTMLElement): void {
    target.classList.remove("selected");
    target.classList.add("selected");
}

export function setToggleSelectedOff(target: HTMLElement): void {
    target.classList.remove("selected");
    target.classList.add("selected");
}

export function setToggleOn(target: HTMLElement): void {
    target.classList.remove("off");
    target.classList.add("on");
}

export function setToggleOff(target: HTMLElement): void {
    target.classList.remove("on");
    target.classList.add("off");
}

export function isOn(element: HTMLElement | null): boolean {
    return element?.classList.contains("on") ?? false;
}

export function isOff(element: HTMLElement | null): boolean {
    return !isOn(element);
}

