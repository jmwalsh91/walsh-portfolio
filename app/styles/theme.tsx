import { useColorScheme } from "@mantine/hooks"
export const theme= {
    headings: {
      fontFamily: 'Smoking Typeface'
    },
    colorScheme: useColorScheme,
    colors: {
      'primary': [
        "#defdfd",
        "#bbf2f1",
        "#95e7e7",
        "#6ededd",
        "#49d4d3",
        "#31bbb9",
        "#219190",
        "#136867",
        "#003f3f",
        "#001717",
      ],
      'secondary': [
        "#ffe3fd",
        "#f8b2ff",
        "#ec80ff",
        "#f04efe",
        "#fa1ffd",
        "#e409db",
        "#b2039e",
        "#800068",
        "#4e003b",
        "#1e0015",
      ],
      'accent': [
        "#fffada",
        "#fff0ad",
        "#ffe67d",
        "#ffdb4b",
        "#ffd11a",
        "#e6b800",
        "#b38f00",
        "#806600",
        "#4e3d00",
        "#1d1400",
      ],
      'success': [
        "#e0fdf3",
        "#baf2dc",
        "#94e9c3",
        "#6bdfa7",
        "#43d68a",
        "#29bc7a",
        "#1d9266",
        "#11684e",
        "#044033",
        "#00170e",
      ],
   
    },
    other: {
      accent: "#ffd11a",
    },
    primaryColor: 'primary',
    primaryShade: 5,
}