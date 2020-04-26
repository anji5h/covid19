async function apicall() {
  let worlddata = {};
  let nepaldata = {};
  worlddata = await fetch("https://api.covid19api.com/world/total")
    .then((data) => data.json())
    .catch((err) => {
      return (worlddata = {
        TotalConfirmed: 0,
        TotalDeaths: 0,
        TotalRecovered: 0,
        ActiveCases: 0,
      });
    });
  nepaldata = await fetch("https://nepalcorona.info/api/v1/data/nepal")
    .then((data) => data.json())
    .catch((err) => {
      return (nepaldata = {
        tested_positive: 0,
        tested_total: 0,
        in_isolation: 0,
        deaths: 0,
        recovered: 0,
        active: 0,
      });
    });
  if (worlddata && nepaldata) {
    worlddata.ActiveCases = worlddata.TotalConfirmed - worlddata.TotalRecovered;
    nepaldata.active = nepaldata.tested_positive - nepaldata.recovered;
    for (let i in worlddata) {
      worlddata[i] = worlddata[i]
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    for (let i in nepaldata) {
      nepaldata[i] = nepaldata[i]
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
  return { worlddata, nepaldata };
}

export default apicall();
