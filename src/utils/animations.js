export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const cardHover = {
    y: -4,
    transition: { duration: 0.2 }
};

export const buttonHover = {
    scale: 1.03,
    transition: { duration: 0.2 }
};

export const buttonTap = {
    scale: 0.97
};

export const viewportConfig = {
    once: true,
    amount: 0.1,
    margin: "-50px"
};
