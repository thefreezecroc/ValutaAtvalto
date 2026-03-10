function atvaltas() {
    const valuta = document.getElementById("lista").value;
    const osszeg = document.getElementById("osszeg").value;
    const url = `https://hexarate.paikama.co/api/rates/HUF/${valuta}/latest`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("hiba a kérésben");
            }
            return response.json();
        })
        .then(json => {
          let result = osszeg * json.data.mid;
           const p = document.getElementById("vegOsszeg");
           p.innerHTML = `${osszeg} HUF = ${result.toFixed(2)} ${valuta}`;
        })
}