import React, { useState , useEffect } from "react";

import { useParams } from "react-router-dom";
import { Card, Image , Button} from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { name } = useParams(); //obje dondurur.
  const [product, setProduct] = useState([]);

  useEffect(() =>{
     let productService = new ProductService()
     productService.getProductsByName(name).then(result=>setProduct(result.data.data))

  },[])
  return (

    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>${product.unitPrice}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Sepete Ekle
              </Button>
              <Button basic color="red">
                Sepetten Cikar
              </Button>
            </div>
          </Card.Content>
        </Card>
        
      </Card.Group>
    </div>
  );
}
