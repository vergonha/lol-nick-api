const getHTML = async (region, nick) => {
  const response = await fetch(`https://lols.gg/pt/name/checker/${region}/${nick}`)

  if (response.ok) {
    const data = await response.text()
    return data
  }

  return undefined

}

const getAvailability = async (region, nick) => {
  const html = await getHTML(region, nick)
  const target = html.match(/(?<=text-center">\n).*?(?=<\/)/g) || html.match(/(?<=text-center">).*?(?=<\/)/g);

  if (target != null) {
    return target[0]
  }

  return undefined
}

module.exports = () => {
  const controller = [];
  controller.checker = async (req, res) => {
    const { region, nick } = req.body
    if (!nick || !region) {
      return res.status(404).json({
        "error": 1,
        "msg": "Corpo da requisição inválido."
      })
    };


    const result = await getAvailability(region, nick)
    if (result) {
      return res.status(200).json({
        "error": 0,
        "msg": result,
        "nickname": nick
      })
    }


    return res.status(404).json({
      "error": 1,
      "msg": "Erro ao realizar a consulta."
    })
  }
  return controller
}