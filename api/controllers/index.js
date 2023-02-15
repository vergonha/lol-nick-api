module.exports = () => {
    const controller = []
    controller.index = (req, res) => {
      res.status(200).json({
        "error": 0,
        "msg": "API Ativa"
      })
    }
    return controller
  }