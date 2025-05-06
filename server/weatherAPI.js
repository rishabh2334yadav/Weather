


const axios = require('axios');

async function FetchAPIdata(city) {
  const data = {};
  const apiKey = 'a1e3d9f09b6743d490a162749250205';
  const url = 'https://api.weatherapi.com/v1/current.json';

  try {
    console.log('API Request URL:', url);
    console.log('API Request Parameters:', { key: apiKey, q: city });

    const response = await axios.get(url, {
      params: {
        key: apiKey,
        q: city
      }
    });

    console.log('API Response:', response.data);

    const res = response.data;

    data.Cloud = res.current.cloud;
    data.Time = res.location.localtime;
    data.UV = res.current.uv;
    data.Temp = res.current.temp_c;
    data.FeelsLike = res.current.feelslike_c;
    data.Wind = res.current.wind_mph;
    data.Pressure = res.current.pressure_mb;
    data.Visibility = res.current.vis_km;
    data.Gust = res.current.gust_mph;
    data.Location = `${res.location.name}, ${res.location.region}, ${res.location.country}`;
    data.Longitude = res.location.lon;
    data.Latitude = res.location.lat;
    data.WindDeg = res.current.wind_degree;
    data.WindDir = res.current.wind_dir;
    data.Precipitation = res.current.precip_in;
    data.Humidity = res.current.humidity;

    console.log('Parsed Weather Data:', data);

    return data;
  } catch (error) {
    console.error("API Error:", error.message);
  }
}

(async () => {
  const a = await FetchAPIdata('Lucknow');
  console.log('Final Weather Data:', a);
})();

module.exports = { FetchAPIdata };
