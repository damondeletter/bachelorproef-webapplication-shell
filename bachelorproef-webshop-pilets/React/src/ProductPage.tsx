import * as React from "react";
import { ProductCard} from './ProductCard';
import { Product } from "./domain/Product";

export interface ProductPageProps {
  products: Array<Product>;
  AddButton: React.ComponentType<{item: Object}>;
}

export const ProductPage: React.FC<ProductPageProps> = ({ products, AddButton }) => {
  return (
      <div className="container">
          <div className="row">
              {products.map((product) => {
                  return (
                      <ProductCard 
                          key={product.product_id}
                          name={product.name} 
                          price={product.price} 
                          description={product.description}
                          image={product.image}
                          addBtn={<AddButton item={product} />} />
                  )
              })}
          </div>
      </div>
  )
}