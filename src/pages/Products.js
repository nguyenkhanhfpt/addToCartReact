import React from 'react';
import axios from 'axios';
import {
    Container, Row, Col, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { CartContext } from '../contexts/CartContext';

import load from '../load.png';
import './Product.css';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoadding: true
        }
    }

    componentDidMount() {
        axios.get('https://10kc1.sse.codesandbox.io/products')
        .then(res => {
            this.setState({
                products: res.data,
                isLoadding: false
            })
        })
    }

    render() {
        let { products } = this.state;;
        return (
            <div className="Products">
                <Container>
                    <h2>Products</h2>

                    {this.state.isLoadding && <img src={load} alt="" className="load"/>}

                    <Row>
                        {products.map((product, index) => (
                            <Col sm="4">
                                <Card key={index}>
                                    <CardImg top width="100%" height={200} src={product.img} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{product.title}</CardTitle>
                                        <CardSubtitle>{product.description}</CardSubtitle>
                                        <CartContext.Consumer>
                                            {({addToCart}) => <Button onClick={() => addToCart(product)}>Add to Cart</Button>}
                                        </CartContext.Consumer>
                                        
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Products;