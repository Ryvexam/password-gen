function genererMotDePasse(longueur, chiffres, caracteresSpeciaux) {
  const lettres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const chiffresStr = '0123456789';
  const speciaux = '!@#$%&*()';

  let caracteres = lettres;
  if (chiffres) caracteres += chiffresStr;
  if (caracteresSpeciaux) caracteres += speciaux;

  let motDePasse = '';
  for (let i = 0; i < longueur; i++) {
    motDePasse += caracteres[Math.floor(Math.random() * caracteres.length)];
  }

  return motDePasse;
}

document.getElementById('longueur').addEventListener('input', () => {
  document.getElementById('longueurAffichee').innerText = document.getElementById('longueur').value;
});

document.getElementById('copier').addEventListener('click', () => {
  const motDePasse = document.getElementById('motDePasse');
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(motDePasse);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  selection.removeAllRanges();

  const texteCopie = document.getElementById('texteCopie');
  texteCopie.style.display = 'block';
});

document.getElementById('generer').addEventListener('click', () => {
  const longueur = parseInt(document.getElementById('longueur').value, 10);
  const chiffres = document.getElementById('chiffres').checked;
  const caracteresSpeciaux = document.getElementById('caracteresSpeciaux').checked;

  const motDePasse = genererMotDePasse(longueur, chiffres, caracteresSpeciaux);
  document.getElementById('motDePasse').innerText = motDePasse;
  document.getElementById('copier').style.visibility = 'visible';
  texteCopie.style.display = 'none';
});

