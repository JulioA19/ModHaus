document.getElementById("Iniciosesion").addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  
  if (usuario === "ModHaus" && contrasena === "12345") {
    alert('Inicio de sesión exitoso, ¡Bienvenido!');
    window.location.href = "principal.html";
  } else {
    alert('Usuario o contraseña incorrecta. Inserta nuevamente los datos');
  }
});

function whatsapp() {
    
      const nombre = document.getElementById("nombre").value;
      const numero = "529331172380"; 
       const texto = `Hola, soy ${nombre}. Quisiera saber más información sobre los servicios de ModHaus`;
  
const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank');
    }

function Servicios(){
      window.location.href = "Servicios.html";
}
function Contacto(){
      window.location.href = "Contacto.html";
}
