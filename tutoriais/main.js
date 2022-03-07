function InsertCode(code, selector) {
  const element = document.querySelector(selector)
  element.textContent = code.trim()
}

function CopyToClipboard(input_element) {
  if (navigator.clipboard === undefined) {
    alert("Não foi possível copiar")
  } else {
    input_element.hidden = false
    input_element.select()
    input_element.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(input_element.value).then(
      () => alert("Copiado")
    ).catch(
      (erro) => alert("Não foi possível copiar: " + erro)
    )
    input_element.hidden = true
  }
}
