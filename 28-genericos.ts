type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
};

type Transport = {
  id: number;
  name: string;
  licenseDrive: string;
};

abstract class BaseComponent<Entity extends object> {
  abstract metadata: string[];

  abstract data: Entity[];

  listItems() {
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

class ProductList extends BaseComponent<Product> {
  metadata = ["id", "title", "category"];
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

  /*showProducts() {
        console.log(this.listItems())
    }*/
}

const list = new ProductList();
list.listItems();

class TransportList extends BaseComponent<Transport> {
  metadata = ["id", "name"];

  data: Transport[] = [
    { id: 1, name: "Joe", licenseDrive: "abc-123" },
    { id: 2, name: "Jane", licenseDrive: "def-456" },
  ];

  /*showTransports() {
        console.log(this.listItems())
    }*/
}

const listTransports = new TransportList();
listTransports.listItems();
