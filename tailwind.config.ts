import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/common/**"
  ],
  theme: {
    extend: {
      colors : {
        primary : {
          10 : "",
          20 : "",
          30 : "",
          40 : "#A4A1C6",
          50 : "",
          60 : "",
          70 : "#4E46B4",
          80 : "#382FAE",
          90 : "#0C00A1",
          based : "#4E46B4"
        },
        light : {
          10 : "#F5F5F5",
          20 : "#EBEBEB",
          30 : "#F9F9F9",
          40 : "",
          50 : "",
          60 : "",
          70 : "#999CA0",
          80 : "",
          90 : "#667080",
        },
        secondary : {
          based : "#40A69F"
        },
        supportive : {
          100 : "#FF4E64" 
        },
        red : {
          50:"#FF0000"
        }
      },
      borderRadius : {
        2 : "2px",
        4 : "4px",
        6 : "6px",
        8 : "8px",
        10 : "10px",
        12 : "12px",
        14 : "14px",
        16 : "16px",
        18 : "18px",
        20 : "20px",
      },
      spacing : {
        2 : "2px",
        4 : "4px",
        6 : "6px",
        8 : "8px",
        10 : "10px",
        12 : "12px",
        14 : "14px",
        16 : "16px",
        18 : "18px",
        20 : "20px",
        22 : "22px",
        24 : "24px",
        32 : "32px",
        40 : "40px",
        48 : "48px", 
        56 : "56px",
        72 : "72px",
        80 : "80px",
      },
      fontSize : {
        8 : "8px",
        10 : "10px",
        12 : "12px",
        14 : "14px",
        16 : "16px",
        18 : "18px",
        20 : "20px",
        22 : "22px",
        24 : "24px",
        26 : "26px",
        28 : "28px",
        30 : "30px",
        32 : "32px",
      },
      fontFamily : {
        iransanReq : "iran-sans-req",
        iransanMd : "iran-sans-md",
        iransanBold : "iran-sans-bold",
      }
    },
  },
  plugins: [],
};
export default config;
