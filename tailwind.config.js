module.exports = {   content: ['./src/**/*.{html,js}'],   theme: {
    extend: {
      fontFamily: {
        NotoSans: ["Noto Sans", "san-serif"],
        Roboto: ["Roboto", "san-serif"],
        Poppins: ["Poppins", "san-serif"]
      },
      colors:{
        "primary-color":"#00FF00",
        "secondary-color":"#00FF00",
        "tertiary-color":"#00FF00",
        "quartiary-color":"#00FF00"
      },
      screens:{
        "sm":"480px",
        "xl":"1440px"
      }
    },
  }, };