const fetch = (url) => import('node-fetch').then(({ default: fetch }) => fetch(url));


const disponibility = async (region, nick) => fetch(`https://lols.gg/pt/name/checker/${region}/${nick}`)
  .then((response) => {
    if (response.status != 200) {
      return "error"
    }
    return response.text()
  }
  )
  .then((html) => {
    let retorno = html.match(/(?<=text-center">\n).*?(?=<\/)/g) || html.match(/(?<=text-center">).*?(?=<\/)/g);
    if (retorno != null) {return retorno[0]}
    else {return "error"}
  })
  .catch((err) => {
    console.log(err)
    return "error"
  })

module.exports = () => {
  const controller = [];
  controller.checker = (req, res) => {

    if (!req.body['nick'] || !req.body['region']) {
        res.status(404).json({
            "error": 1,
            "msg": "Corpo da requisição inválido."
        })
      return
    };

    disponibility(req.body['region'], req.body['nick']).then(resultado => {
      if (resultado != "error") {
        res.status(200).json({
          "error": 0,
          "msg": resultado,
          "nickname": req.body['nick']
        })
      }
      else {
        res.status(404).json({
          "error": 1,
          "msg": "null"
        })
      }
    })
  }
  return controller
}