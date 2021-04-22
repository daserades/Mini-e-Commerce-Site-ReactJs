import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Shoes 01",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f9a8bf44-6a52-4107-ba5f-78ed8118ee36/air-zoom-pegasus-38-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-Rl7WJR.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "colors": ["red", "black",  "pink"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Nike Shoes 02",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/efwa2z2axzuqhv35gxbz/air-max-270-ayakkab%C4%B1s%C4%B1-nnTrqDGR.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 19,
                "colors": ["white", "blue",],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike Shoes 03",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c7c3f4c2-2c62-471f-bfdf-106a2d09630d/air-max-plus-ayakkab%C4%B1s%C4%B1-cb7pqc.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 50,
                "colors": ["black", "white", "blue", "yellow"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nike Shoes 04",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2edf813-52a4-4bd6-a3e8-f92bd2bbbed8/air-max-90-ayakkab%C4%B1s%C4%B1-11RmNc.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 15,
                "colors": ["orange", "black", "white", "yellow"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Nike Shoes 05",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e88a7585-4406-4ecd-b61d-06d562757933/air-max-2090-ayakkab%C4%B1s%C4%B1-4f7HS7.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 10,
                "colors": ["purple", "blue", "orange", "white"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Nike Shoes 06",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/532d2bab-70f7-478c-bb17-857feebd3cfc/air-force-1-07-essential-ayakkab%C4%B1s%C4%B1-8SRWB3.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["brown", "white"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Nike Shoes 07",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c69b4c5-4fa6-43a4-a716-4e967412105e/air-max-90-ltr-gen%C3%A7-ayakkab%C4%B1s%C4%B1-nmkjpJ.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["white", "black", "blue","pink" ],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Nike Shoes 08",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/883840e4-76c1-44d3-bbbd-4ee2442b3395/revolution-5-ayakkab%C4%B1s%C4%B1-r454fL.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["orange", "black", "white"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "Nike Shoes 09",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8b71fdb-95a9-4cad-9853-8b3cd4cdda5b/air-max-bolt-ayakkab%C4%B1s%C4%B1-jMHptJ.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["purple", "white", "blue", "red"],
                "count": 1
            },
            {
                "_id": "10",
                "title": "Nike Shoes 10",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f9a8bf44-6a52-4107-ba5f-78ed8118ee36/air-zoom-pegasus-38-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-Rl7WJR.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "colors": ["red", "black",  "pink"],
                "count": 1
            },
            {
                "_id": "11",
                "title": "Nike Shoes 11",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/efwa2z2axzuqhv35gxbz/air-max-270-ayakkab%C4%B1s%C4%B1-nnTrqDGR.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 19,
                "colors": ["white", "blue",],
                "count": 1
            },
            {
                "_id": "12",
                "title": "Nike Shoes 12",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c7c3f4c2-2c62-471f-bfdf-106a2d09630d/air-max-plus-ayakkab%C4%B1s%C4%B1-cb7pqc.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 50,
                "colors": ["black", "white", "blue", "yellow"],
                "count": 1
            },
            {
                "_id": "13",
                "title": "Nike Shoes 13",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2edf813-52a4-4bd6-a3e8-f92bd2bbbed8/air-max-90-ayakkab%C4%B1s%C4%B1-11RmNc.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 15,
                "colors": ["orange", "black", "white", "yellow"],
                "count": 1
            },
            {
                "_id": "14",
                "title": "Nike Shoes 14",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e88a7585-4406-4ecd-b61d-06d562757933/air-max-2090-ayakkab%C4%B1s%C4%B1-4f7HS7.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 10,
                "colors": ["purple", "blue", "orange", "white"],
                "count": 1
            },
            {
                "_id": "15",
                "title": "Nike Shoes 15",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/532d2bab-70f7-478c-bb17-857feebd3cfc/air-force-1-07-essential-ayakkab%C4%B1s%C4%B1-8SRWB3.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["brown", "white"],
                "count": 1
            },
            {
                "_id": "16",
                "title": "Nike Shoes 16",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c69b4c5-4fa6-43a4-a716-4e967412105e/air-max-90-ltr-gen%C3%A7-ayakkab%C4%B1s%C4%B1-nmkjpJ.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["white", "black", "blue","pink" ],
                "count": 1
            },
            {
                "_id": "17",
                "title": "Nike Shoes 17",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/883840e4-76c1-44d3-bbbd-4ee2442b3395/revolution-5-ayakkab%C4%B1s%C4%B1-r454fL.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["orange", "black", "white"],
                "count": 1
            },
            {
                "_id": "18",
                "title": "Nike Shoes 18",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8b71fdb-95a9-4cad-9853-8b3cd4cdda5b/air-max-bolt-ayakkab%C4%B1s%C4%B1-jMHptJ.png",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["purple", "white", "blue", "red"],
                "count": 1
            }
        ],
        cart:[],
        total: 0
    };

    addCart = (id) => {
        const {products, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })
            if(check) {
                const data = products.filter(product => {
                    return product._id === id
                })
                this.setState({cart: [...cart,...data]})
            }else {
                alert("The product has been added to cart.")
            }
       
    };

    reduction = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1; 
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if(item._id === id){
                item.count += 1; 
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

  
    removeProduct = id => {
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item,index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
    };

    getTotal = () => {
        const {cart} = this.state;
        const res = cart.reduce((prev, item) => {
             return prev + (item.price * item.count)
        },0)
        this.setState({total: res})

    };

    componentDidUpdate(){
        localStorage.setItem('dataCart',JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal',JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null) {
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null) {
            this.setState({total: dataTotal});
        }
    }


    render() {
        const {products, cart, total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider value= {{products,addCart, cart,reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


