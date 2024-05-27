document.addEventListener("DOMContentLoaded", function (){
    const products = [
        {
            id: 1,
            name: "HUAWEI MateBook D 15 2023",
            description: "Procesador Ryzen 7-5700U, 512GB SSD + 16GB RAM, Windows 11 Home, resolución de 1080p.",
            img: "./img/hwei.jpg",
            price: 10199.00,
            deliveryTime: "Domingo 26 de mayo"
        },
        {
            id: 2,
            name: "HP Laptop 15-ef2500la",
            description: "PROCESADOR AMD Ryzen 7 5700U, Unidad de estado sólido de 512 GB PCIe NVMe M.2, Windows 11 Home y teclado en español.",
            img: "./img/laptop2.jpg",
            price: 10799.00,
            deliveryTime: "Lunes 27 de mayo"
        },
        {
            id: 3,
            name: "Nintendo Consola Switch Neon 32GB",
            description: "Nintendo Switch está diseñado para IR a donde quiera que vaya, transformando la consola de casa en un sistema portátil en un abrir y cerrar de ojos",
            img: "./img/nintendo.jpg",
            price: 8799.00,
            deliveryTime: "Martes 28 de mayo"
        },
        {
            id: 4,
            name: "Pantalla Hisense 40 pulgadas Full HD",
            description: "Android TV, Asistente de Google Integrado. Android TV cuenta con más de 400,000 contenidos que disfrutarás en la pantalla más grande de tu hogar.",
            img: "./img/tv.jpg",
            price: 5608.57,
            deliveryTime: "Miercoles 29 de mayo"
        },
        {
            id: 5,
            name: "NEUTROGENA Hidratante Facial.",
            description: "Fortalece la barrera natural de la piel, renueva sus niveles de agua, no obstruye  los poros, sin aceites, 50 g. ",
            img: "./img/crema.jpg",
            price: 196.00,
            deliveryTime: "Lunes 27 de mayo"
        },
        {
            id: 6,
            name: "Ufree Recortadora de barba para hombres",
            description: "Maquinilla de afeitar eléctrica impermeable, cortadora de pelo inalámbrica, afeitadoras para hombres, kit de aseo para hombre, para nariz, bigote, cuerpo. ",
            img: "./img/maquinita.jpg",
            price: 840.00,
            deliveryTime: "Martes 28 de mayo"
        },
        {
            id: 7,
            name: "Suavecito - Pomada Original Hold",
            description: "Esta pomada se adhiere al cabello como la cera, pero es soluble en agua. Se lava igual que un gel para el cabello: ¡lo mejor de ambos mundos!  ",
            img: "./img/suavecito.jpg",
            price: 255.00,
            deliveryTime: "Lunes 27 de mayo"
        },
        {
            id: 8,
            name: "CeraVe Crema Hidratante",
            description: "Hidratante diario para rostro y cuerpo, 539 g.",
            img: "./img/crema2.jpg",
            price: 325.00,
            deliveryTime: "Lunes 27 de mayo"
        },
        {
            id: 9,
            name: "Las 48 leyes del poder",
            description: "Robert Greene detalla las leyes del poder en su esencia más cruda, sintetizando el pensamiento de Maquiavelo, Sun Tzu, Carl von Clausewitz y otros grandes teóricos y estrategas.",
            img: "./img/libro1.jpg",
            price: 325.00,
            deliveryTime: "Lunes 27 de mayo"
        },
        {
            id: 10,
            name: "Este dolor no es mío.",
            description: "Un enfoque transformador que permite resolver problemas crónicos que no han podido ser aliviados mediante la terapia tradicional, los medicamentos u otras medidas.",
            img: "./img/dolor.jpg",
            price: 316.00,
            deliveryTime: "Viernes 31 de mayo"
        },
        {
            id: 11,
            name: "La teoría del todo: El origen y el destino del universo",
            description: "Una manera clara y amena de acercarse a los misterios del universo. En esta esclarecedora obra, el gran físico británico Stephen Hawking nos ofrece una historia del universo, del big bang a los agujeros negros.",
            img: "./img/libro2.jpg",
            price: 183.00,
            deliveryTime: "Jueves 30 de mayo"
        },
        {
            id: 12,
            name: "Historia Del Tiempo Del Big Bang A Los Agujeros",
            description: "Stephen W. Hawking presenta de forma clara y concisa los conceptos fundamentales de la mecánica newtoniana, la teoría de la relatividad, la mecánica cuántica y la cosmología contemporánea.",
            img: "./img/libro3.jpg",
            price: 307.00,
            deliveryTime: "Miercoles 29 de mayo"
        },
        {
            id: 13,
            name: "Taurus CARONTE - Hervidor de Agua Eléctrico",
            description: "Tetera Eléctrica, Jarra Inalámbrica, 2 Litros, 1000 W, Acero Inoxidable, Resistente, Hierve agua en minutos, Base removible.",
            img: "./img/cafetera.jpg",
            price: 210.00,
            deliveryTime: "Lunes 27 de mayo"
        },
        {
            id: 14,
            name: "TRAMONTINA - Batería de Cocina Primaware",
            description: "Aluminio, Antiadherente, Incluye 18 Piezas, Color Negro.",
            img: "./img/sartenes.jpg",
            price: 999.00,
            deliveryTime: "Viernes 31 de mayo"
        },
        {
            id: 15,
            name: "Mabe - RMA300FJMRQ0 Refrigerador Automático",
            description: "Tipo de parrillas cristal templado, con dispensador de agua, plata oscuro.",
            img: "./img/refri.jpg",
            price: 7979.00,
            deliveryTime: "Jueves 30 de mayo"
        },
        {
            id: 16,
            name: "Panasonic Horno de Microondas Panasonic",
            description: "Calienta 1 o 2 tazas de leche o café sin utilizar potencia, Descongelación hasta 3 kg",
            img: "./img/micro.jpg",
            price: 4861.00,
            deliveryTime: "Lunes 27 de mayo"
        },
        {
            id: 17,
            name: "VIOPY Camisas De Hombre",
            description: "Camisas De Manga Larga para Hombre, Camisas De Manga Larga De Color Sólido, Cuello De Solapa, Sueltas,Abotonadas",
            img: "./img/camisa.jpg",
            price: 221.00,
            deliveryTime: "Martes 28 de mayo"
        },
        {
            id: 18,
            name: "GOTOTOP",
            description: "Vestido de verano para mujer, manga casual, con patchwork, cuello redondo, playera",
            img: "./img/vestido.jpg",
            price: 250.00,
            deliveryTime: "Lunes 28 de mayo"
        },
        {
            id: 19,
            name: "A|X Armani Exchange Reloj",
            description: "Reloj cronógrafo para hombre con correa de piel, acero inoxidable o silicona, Caja Redonda de Acero Inoxidable Negro de 44 MM con Cristal Resistente a Rayones, carátula Negra y movimiento Cronógrafo.",
            img: "./img/reloj.jpg",
            price: 2300.00,
            deliveryTime: "Sabado 1 de junio"
        },
        {
            id: 20,
            name: "Air Jordan 1 Low",
            description: "Air Jordan 1 Low 'Bred Toe' 553558-161 Size 44",
            img: "./img/tenis.jpg",
            price: 2700.00,
            deliveryTime: "Viernes 31 de mayo"
        }
    ];    
    let cart = []; 

    function getProduct(){
        const productContainer = document.querySelector('.products-box-row');
        products.forEach(product => {
            // Crear la tarjeta del producto
            const productCard = document.createElement('div');
            productCard.className = 'products-box-col';

            // Crear la imagen del producto
            const imgBox = document.createElement('div');
            imgBox.className = 'box-image';
            productCard.appendChild(imgBox);
            const imgProduct = document.createElement('img');
            imgProduct.src = product.img;
            imgProduct.alt = product.name;
            imgBox.appendChild(imgProduct);

            // Crear el título del producto
            const title = document.createElement('h3');
            title.textContent = product.name;
            productCard.appendChild(title);

            // Crear la descripción del producto
            const description = document.createElement('p');
            description.textContent = product.description;
            description.className = 'description';
            productCard.appendChild(description);

            // Crear el precio del producto
            const price = document.createElement('p');
            price.textContent = "$" + product.price;
            productCard.appendChild(price);
            
            // Crear el botón de añadir al carrito
            const btn = document.createElement('a');
            btn.className = 'btn-buy';
            btn.textContent = "Añadir al carrito";
            btn.addEventListener('click', () => addToCart(product)); 
            productCard.appendChild(btn);
            productContainer.appendChild(productCard);
        });
    }

    //! agregar productos al carrito
    function addToCart(product) {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({...product, quantity: 1});
        }
        updateCart(); 
    }

    function updateCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = ''; 
        let total = 0;
        //! crear los componentes del carrito por el array 
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            const contImg = document.createElement('div');
            contImg.className = 'cont-img';
            cartItem.appendChild(contImg);

            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.name;
            contImg.appendChild(img);


            const titleCont = document.createElement('div');
            titleCont.className = 'title-cart';
            cartItem.appendChild(titleCont);
            const title = document.createElement('h4');
            title.textContent = item.name;
            titleCont.appendChild(title);

            const quantity = document.createElement('p');
            quantity.textContent = `Cantidad: ${item.quantity}`;
            titleCont.appendChild(quantity);

            const price = document.createElement('p');
            price.textContent = `Precio: $${item.price * item.quantity}`;
            cartItem.appendChild(price);

            //! incrementar la cantidad del producto
            const incrementButton = document.createElement('button');
            incrementButton.textContent = '+';
            incrementButton.addEventListener('click', () => {
                item.quantity += 1;
                updateCart();
            });
            titleCont.appendChild(incrementButton);

            //! disminuir la cantidad del producto
            const decrementButton = document.createElement('button');
            decrementButton.textContent = '-';
            decrementButton.addEventListener('click', () => {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    updateCart();
                }
            });
            titleCont.appendChild(decrementButton);

            cartItemsContainer.appendChild(cartItem);
            //! precio total del carrito
            total += item.price * item.quantity;
        });

        document.getElementById('total-price').textContent = total.toFixed(2);
    }

    //! mostrar el carrito
    const cartIcon = document.querySelector('.carro');
    const cartModal = document.getElementById('cart-modal');
    const closeButton = document.querySelector('.close-button');

    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    getProduct();
});