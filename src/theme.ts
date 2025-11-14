import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        msgOwn: { 
          value: {
            base: "",
            _dark: "#E3F8FF" 
          } as any
        },
        msgForeign: { 
          value: {
            base: "",
            _dark: "#C7EAFD" 
          } as any 
        },
        error: {
          value: {
            base:"",
            _dark: "#FF6B6B"
          } as any
        },
        button: { 
          value: {
            base: "",
            _dark: "#76C7F4" 
          } as any 
        },
        accent: { 
          value: {
            base: "",
            _dark: "#9AEAFF" 
          } as any 
        },
        input: { 
          value: {
            base: "",
            _dark: "#D6F1FA" 
          } as any 
        },
        avatarBg: { 
          value: {
            base: "",
            _dark: "#BAE1FF" 
          } as any 
        },
        topBar: { 
          value: {
            base: "",
            _dark: "#133C55" 
          } as any 
        },
        iconBorder: { 
          value: {
            base: "",
            _dark: "#A2B8CB" 
          } as any 
        },
        msgSystem: { 
          value: {
            base: "",
            _dark: "#E9F7FF" 
          } as any 
        },
        myBg: { 
          value: {
            base: "",
            _dark: "#182C3A" 
          } as any 
        },
        myBgAlt: { 
          value: {
            base: "",
            _dark: "#24425C" 
          } as any 
        },
        text: { 
          value: {
            base: "",
            _dark: "#E5F7FF" 
          } as any 
        },
        textSecondary: { 
          value: {
            base: "",
            _dark: "#B5CCDF" 
          } as any 
        },
        disabled: { 
          value: {
            base: "",
            _dark: "#7D97AD" 
          } as any 
        },
        tagUser: { 
          value: {
            base: "",
            _dark: "#009FFF" 
          } as any 
        },
        nickForeign: { 
          value: {
            base: "",
            _dark: "#A572E8" 
          } as any 
        },
        nickOwn: { 
          value: {
            base: "",
            _dark: "#54C6EB" 
          } as any 
        },
        msgText: { 
          value: {
            base: "",
            _dark: "#182C3A" 
          } as any 
        },
      },
      fonts: {
        body: { value: "system-ui, sans-serif" },
        heading: { value: "Montserrat, sans-serif" },
      }
    }
  },
  globalCss: {
    "*": {
      fontFamily: "Montserrat, regular, sans-serif",
      fontSize: "14px",
      color: "text"
    },
    "&::-webkit-scrollbar": {
      width: "6px",
      background: "transparent",
      scrollbarWidth: "thin",
      scrollbarColor: "#BBB #222",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "msgText",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
  }
});

export const system = createSystem(defaultConfig, config);