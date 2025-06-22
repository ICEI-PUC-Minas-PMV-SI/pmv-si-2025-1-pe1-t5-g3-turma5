// cadastro-ong.js

// Salva os dados da ONG no localStorage ao enviar o formulário
window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-ong");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");
    const nome = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const telefone = inputs[2].value.trim();
    const cep = inputs[3].value.trim();
    const endereco = inputs[4].value.trim();
    const cnpj = inputs[5].value.trim();
    const cidade = inputs[6].value.trim();
    const missao = form.querySelector(".form-direita input[placeholder^='A nossa missão']").value.trim();

    const ong = {
      nome,
      email,
      telefone,
      cep,
      endereco,
      cnpj,
      cidade,
      missao
    };

    const lista = JSON.parse(localStorage.getItem("ongsPetMatch")) || [];
    lista.push(ong);
    localStorage.setItem("ongsPetMatch", JSON.stringify(lista));

    alert("ONG cadastrada com sucesso!");
    window.location.href = "../pagina%20protetores/protetores.html";
  });
});
document.querySelectorAll("a").forEach(link => {
  if (link.textContent.trim().toLowerCase() === "blog") {
    link.setAttribute("href", "blog/blog.html");
  }
});
document.querySelectorAll("a").forEach(link => {
  if (link.textContent.trim().toLowerCase() === "quero adotar") {
    link.setAttribute("href", "catalogo.html");
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-ong');
  const fotoInput = document.getElementById('fotoOngInput');
  const imagePreview = document.getElementById('imagePreview');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const inputs = form.querySelectorAll('input, textarea');
    const data = {};
    let imageBase64 = '';

    // Validação de campos obrigatórios
    let valid = true;
    inputs.forEach(input => {
      if (
        input.hasAttribute('required') || 
        input.placeholder.includes('*') || 
        input.type === 'email' || 
        input.type === 'tel'
      ) {
        if (!input.value.trim() && input.type !== 'file' && input.type !== 'checkbox') {
          alert(`Preencha o campo: ${input.placeholder || input.previousElementSibling?.textContent}`);
          valid = false;
        }
      }

      if (input.type === 'radio') {
        const radios = form.querySelectorAll(`input[name="${input.name}"]`);
        const isChecked = Array.from(radios).some(r => r.checked);
        if (!isChecked) {
          alert(`Selecione uma opção para: ${input.name}`);
          valid = false;
        }
      }
    });

    if (!form.querySelector('input[type="checkbox"]').checked) {
      alert('Você precisa concordar com os termos');
      return;
    }

    if (!valid) return;

    // Coleta os dados
    data.nome = inputs[0].value;
    data.email = inputs[1].value;
    data.telefone = inputs[2].value;
    data.cep = inputs[3].value;
    data.endereco = inputs[4].value;
    data.cnpj = inputs[5].value;
    data.cidade = inputs[6].value;
    data.voluntario = form.querySelector('input[name="voluntario"]:checked')?.value || '';
    data.registrada = form.querySelector('input[name="registrada"]:checked')?.value || '';
    data.missao = inputs[7].value;
    data.responsavel = inputs[8].value;
    data.telefoneResponsavel = inputs[9].value;

    // Processa a imagem como base64
    if (fotoInput.files.length > 0) {
      imageBase64 = await toBase64(fotoInput.files[0]);
      data.foto = imageBase64;
    }

    // Salva no localStorage
    const ongs = JSON.parse(localStorage.getItem('ongsPetMatch') || '[]');
    ongs.push(data);
    localStorage.setItem('ongsPetMatch', JSON.stringify(ongs));

    // Redireciona
    window.location.href = '../pagina%20protetores/protetores.html';
  });

  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }
});
