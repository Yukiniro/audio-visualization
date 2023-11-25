import daisyui from 'daisyui';

export default {
    content: ['./src/**/*.{vue,js,ts}'],
    plugins: [daisyui],
    daisyui: {
        themes: ["light", "dark", "cupcake"],
    },
    theme: {
        fontFamily: {
            death: ['death-note'],
        }
    }
};
