const products = []

const controller = {}

controller.getRoot = (req, res) => {
    res.render("home", {
        title: "Products Register 🥸"
    })
}

controller.postProducts = (req, res) => {
    products.push(req.body)
    res.redirect("/")
}

controller.getProducts = (req, res) => {
    res.render("products", {products, thereAreProducts: products.length > 0, title: 'Products Stock 😁' })
}

module.exports = {controller}