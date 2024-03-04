
var data = {
    nama: "sodikin",
    umur: 12,
    pekerjaan: "Mahasiswa"
};

var dataContainer = document.getElementById("dataContainer");

var htmlString = "<p>Nama: " + data.nama + "</p>" +
                "<p>Umur: " + data.umur + "</p>" +
                "<p>Pekerjaan: " + data.pekerjaan + "</p>";

// dataContainer.innerHTML = htmlString;

console.log(data.nama)