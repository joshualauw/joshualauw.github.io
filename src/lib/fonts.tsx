import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--poppins",
    weight: "300",
});

export const fonts = {
    poppins,
};
