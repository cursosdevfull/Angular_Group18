abstract class BaseComponent {
  abstract metadata: string[];

  data = [
    {
      id: 1,
      title: "product01",
      description: "description product01",
      category: "poultry",
    },
    {
      id: 2,
      title: "product02",
      description: "description product02",
      category: "poultry",
    },
    {
      id: 3,
      title: "product03",
      description: "description product03",
      category: "poultry",
    },
    {
      id: 4,
      title: "product04",
      description: "description product04",
      category: "poultry",
    },
  ];

  productList() {
    const fields = Object.keys(this.data[0]);
    const fieldsToShow = fields.filter((el) => this.metadata.includes(el));

    return this.data.map((el: any) => {
      const item: any = {};
      for (const field of fieldsToShow) {
        item[field] = el[field];
      }

      return item;
    });
  }
}

class ProductList extends BaseComponent {
  metadata = ["id", "title", "category"];

  showProducts() {
    console.log(this.productList());
  }
}

const list = new ProductList();
list.showProducts();
