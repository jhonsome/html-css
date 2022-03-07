let code1 = `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <p>Neon piscando</p>
</body>
</html>`

let code2 = `<p>
  Ne<span>o</span>n pi<span>s</span>can<span>d</span>o
</p>`

let code3 = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    @keyframes animate {
      20%,
      36%,
      48% {
        text-shadow:
        0px 0px 0px lime;
        0px 0px 0px lime,
        0px 0px 0px lime,
        0px 0px 0px lime;
        color: #818181;
      }

      22%,
      37%,
      50% {
        text-shadow:
        0px 0px 30px lime;
        0px 0px 20px lime,
        0px 0px 10px lime,
        0px 0px 5px lime;
        color: #FFFFFF;
      }
    }

    body {
      background-color: #000000;
      color: #FFFFFF;
    }

    p {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 4.5em;
      font-weight: lighter;
      text-shadow:
        0px 0px 30px lime,
        0px 0px 20px lime,
        0px 0px 10px lime,
        0px 0px 5px lime;
    }

    p > span:nth-child(1) {
      animation: animate 1s linear infinite;
    }

    p > span:nth-child(2) {
      animation: animate 2s linear infinite;
    }

    p > span:nth-child(3) {
      animation: animate 800ms linear infinite;
    }
  </style>
</head>
<body>
  <p>
    Ne<span>o</span>n pi<span>s</span>can<span>d</span>o
  </p>
</body>
</html>
`

function Main() {
  InsertCode(code1, "#c1")
  InsertCode(code2, "#c2")
  InsertCode(code3, "#c3")
  document.querySelector("textarea#clipboard").value = code3
  hljs.highlightAll()
  document.querySelectorAll("span.code").forEach(element => {
    hljs.highlightElement(element);
  })
} 
