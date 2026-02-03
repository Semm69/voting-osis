const PASSWORD_PANITIA = "osis123";

const form = document.getElementById("votingForm");
const hasil = document.getElementById("hasil");

let suara = {
  A: 0,
  B: 0,
  C: 0
};

// voting siswa
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const pilihan = document.querySelector("input[name='pilihan']:checked").value;
  suara[pilihan]++;
  alert("Suara berhasil dikirim");
  form.reset();
});

// login panitia
function loginPanitia() {
  const password = document.getElementById("password").value;

  if (password === PASSWORD_PANITIA) {
    hasil.style.display = "block";
    hasil.innerHTML = `
      <h3>📊 Hasil Voting</h3>
      Calon A: ${suara.A} suara<br>
      Calon B: ${suara.B} suara<br>
      Calon C: ${suara.C} suara
    `;
  } else {
    alert("Password panitia salah!");
  }
}
