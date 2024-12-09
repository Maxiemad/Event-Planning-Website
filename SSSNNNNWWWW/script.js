particlesJS('particles-js', {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: ["#ff89d5", "#a389ff", "#6a57d5", "#d3a3ff"] }, // Pastel colors
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000" },
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
            value: 5,
            random: true,
            anim: { enable: true, speed: 4, size_min: 0.2, sync: false },
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
        },
    },
    retina_detect: true,
});
