async function apicall() {

  let worlddata = await fetch("https://api.covid19api.com/world/total")
    .then((data) => data.json())
    .catch((err) => {
      worlddata={}
    });
  let nepaldata = await fetch("https://nepalcorona.info/api/v1/data/nepal")
    .then((data) => data.json())
    .catch((err) => {
      nepaldata={}
    });
  if(worlddata&&nepaldata){
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
  return {worlddata,nepaldata};
}

export default apicall();
