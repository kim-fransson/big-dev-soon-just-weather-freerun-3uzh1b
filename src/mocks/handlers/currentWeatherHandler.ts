import { rest } from "msw";

import exampleIcon from "../../assets/weather-api/cloud_64x64.webp";

export const currentWeatherHandler = rest.get(
  import.meta.env.VITE_WEATHER_API_CURRENT_WEATHER_URL,
  (_req, res, ctx) => {
    return res(
      ctx.json({
        tempC: -3.0,
        feelslikeC: -9.4,
        condition: {
          text: "Overcast",
          icon: exampleIcon,
          code: 1009,
        },
        pressureMb: 1006,
        windKph: 16.9,
        uv: 1,
        visibilityKm: 10,
      }),
    );
  },
);