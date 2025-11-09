// proxy.js
export async function login(formData) {
  const response = await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("https://laporan.infinityfreeapp.com/api/auth.php"), {
    method: "POST",
    body: formData,
  });
  return response.json();
}
