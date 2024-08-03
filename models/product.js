const productStore = [];

class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.desc = description;
    this.price = price;
  }

  save() {
    productStore.push(this);
  }

  static fetchProducts() {
    return productStore;
  }
}

const initProduct = new Product(
  "sampleID",
  "Sameple product",
  "https://external-preview.redd.it/txvX1tynOeV9ayJqSeJVJfrHp9dI6pYnWT7_yj4TqXA.jpg?width=1080&crop=smart&auto=webp&s=d10e17e14d18a7634b659330728155ed1b6de6f6",
  "This is initiated on it's own for demo",
  "0.0"
);
productStore.push(initProduct);

module.exports = Product;
