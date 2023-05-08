let equationArr = []
module.exports = {
    saveEquation: (req,res) => {
        let {equation} = req.body
        let newEquation = {equation:equation, answer:eval(equation)}
        equationArr.push(newEquation)
        res.status(200).send(equationArr)
    }
}