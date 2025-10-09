const productos = [
    {
        id: "1",
        nombre: "URBAN DARK BLOWER TEE",
        precio: 30,
        img: '../src/assets/designs/tshirt1/tshirt-front.png',
        img_back: '../src/assets/designs/tshirt1/tshirt-back.png',
        prenda: 'playera',
        desc: "The Urban Dark Blower Tee brings street style to a new level. Made from ultra-soft cotton with a deep black tone that pairs with anything, it delivers a confident and versatile look for any day or night in the city."
    },
    {
        id: "2",
        nombre: "URBAN LIGHT BLOWER TEE",
        precio: 30,
        img: '../src/assets/designs/tshirt2/tshirt-front.png',
        img_back: '../src/assets/designs/tshirt2/tshirt-back.png',
        prenda: 'playera',
        desc: "A fresh take on minimal streetwear, the Urban Light Blower Tee is crafted from lightweight cotton that keeps you cool all day. Its clean design and soft texture make it the perfect piece for relaxed city vibes."
    },
    {
        id: "3",
        nombre: "CERTIFIED MIND BLOWER T-SHIRT",
        precio: 25,
        img: '../src/assets/designs/tshirt3/tshirt-front.png',
        img_back: '../src/assets/designs/tshirt3/tshirt-back.png',
        prenda: 'playera',
        desc: "Designed for the bold thinker, the Certified Mind Blower T-Shirt combines comfort with a thought-provoking aesthetic. Its minimalist front and creative graphic detail on the back make it a true conversation starter."
    },
    {
        id: "4",
        nombre: "NAVY T-SHIRT",
        precio: 30,
        img: '../src/assets/designs/tshirt4/tshirt-front.png',
        img_back: '../src/assets/designs/tshirt4/tshirt-back.png',
        prenda: 'playera',
        desc: "A timeless navy tee that never goes out of style. Soft to the touch and built for durability, it's the kind of piece that fits seamlessly into any wardrobe — from casual mornings to late-night hangouts."
    },
    {
        id: "5",
        nombre: "WEEKEND DARK CMB PANTS",
        precio: 65,
        img: '../src/assets/designs/pants1/pants-front.png',
        img_back: '../src/assets/designs/pants1/pants-back.png',
        prenda: 'pants',
        desc: "These dark-toned pants redefine comfort and casual sophistication. Made for weekend adventures or laid-back afternoons, their flexible waistband and structured cut keep you stylish without sacrificing ease."
    },
    {
        id: "6",
        nombre: "LOWKEY MALTA CMB PANTS",
        precio: 68,
        img: '../src/assets/designs/pants2/pants-front.png',
        img_back: '../src/assets/designs/pants2/pants-back.png',
        prenda: 'pants',
        desc: "The Lowkey Malta Pants are all about effortless style. With a smooth, lightweight texture and relaxed silhouette, they offer the perfect balance between minimalist design and everyday versatility."
    },
    {
        id: "7",
        nombre: "WEEKEND ZURICH CMB PANTS",
        precio: 72,
        img: '../src/assets/designs/pants3/pants-front.png',
        img_back: '../src/assets/designs/pants3/pants-back.png',
        prenda: 'pants',
        desc: "Inspired by the clean aesthetics of Zurich, these pants are crafted for both comfort and class. Their soft fabric and modern cut make them ideal for those who want to look sharp while keeping it casual."
    },
    {
        id: "8",
        nombre: "PORTO BLOWER PANTS",
        precio: 65,
        img: '../src/assets/designs/pants4/pants-front.png',
        img_back: '../src/assets/designs/pants4/pants-back.png',
        prenda: 'pants',
        desc: "The Porto Blower Pants merge practicality with style. Featuring modern cargo-inspired pockets and a slim yet comfortable fit, they're designed for movement, creativity, and everyday exploration."
    },
    {
        id: "9",
        nombre: "FAROVAO CEMB PANTS",
        precio: 70,
        img: '../src/assets/designs/pants5/pants-front.png',
        img_back: '../src/assets/designs/pants5/pants-back.png',
        prenda: 'pants',
        desc: "The Farovao Pants combine streetwear design with a refined edge. Made from a durable cotton blend, they deliver both structure and flexibility — perfect for days that shift between work and leisure."
    },
    {
        id: "10",
        nombre: "LIGHT BEACHKEY SHORTS",
        precio: 50,
        img: '../src/assets/designs/shorts1/shorts-front.png',
        img_back: '../src/assets/designs/shorts1/shorts-back.png',
        prenda: 'shorts',
        desc: "Designed for warm days and chill moods, the Light Beachkey Shorts offer a breezy, relaxed fit. Their quick-drying fabric and clean design make them perfect for the beach, the streets, or anywhere in between."
    },
    {
        id: "11",
        nombre: "BLUE CMB SHORTS",
        precio: 53,
        img: '../src/assets/designs/shorts2/shorts-front.png',
        img_back: '../src/assets/designs/shorts2/shorts-back.png',
        prenda: 'shorts',
        desc: "A modern essential for summer wardrobes. The Blue CMB Shorts feature a soft-touch texture and tailored finish, combining casual comfort with an elevated, easy-to-wear aesthetic."
    },
    {
        id: "12",
        nombre: "DARK GREEN CMB SHORTS",
        precio: 55,
        img: '../src/assets/designs/shorts3/shorts-front.png',
        img_back: '../src/assets/designs/shorts3/shorts-back.png',
        prenda: 'shorts',
        desc: "These Dark Green Shorts bring subtle color and sleek design together. Crafted for durability and softness, they offer a refined alternative to standard casualwear while maintaining all-day comfort."
    },
    {
        id: "13",
        nombre: "CMD ORANGE CARACAS SHORTS",
        precio: 48,
        img: '../src/assets/designs/shorts4/shorts-front.png',
        img_back: '../src/assets/designs/shorts4/shorts-back.png',
        prenda: 'shorts',
        desc: "Bold and refreshing, the CMD Orange Caracas Shorts embody tropical energy and urban cool. Their lightweight material and bright tone make them ideal for anyone who loves standing out effortlessly."
    },
    {
        id: "14",
        nombre: "SICK BLOWER HOODIE",
        precio: 85,
        img: '../src/assets/designs/hoodie1/hoodie-front.png',
        img_back: '../src/assets/designs/hoodie1/hoodie-back.png',
        prenda: 'hoodie',
        desc: "The Sick Blower Hoodie is made for those who lead with creativity. Featuring a cozy fleece interior and a striking print design, it blends warmth, comfort, and attitude for an authentic streetwear statement."
    },
    {
        id: "15",
        nombre: "NAVY CHART HOODIE",
        precio: 80,
        img: '../src/assets/designs/hoodie2/hoodie-front.png',
        img_back: '../src/assets/designs/hoodie2/hoodie-back.png',
        prenda: 'hoodie',
        desc: "Simple, sleek, and effortlessly cool — the Navy Chart Hoodie offers a timeless silhouette. Its soft interior and subtle front detail make it an everyday go-to piece for colder days or casual nights out."
    },
    {
        id: "16",
        nombre: "LOWKEY BLOWER HOODIE",
        precio: 90,
        img: '../src/assets/designs/hoodie3/hoodie-front.png',
        img_back: '../src/assets/designs/hoodie3/hoodie-back.png',
        prenda: 'hoodie',
        desc: "The Lowkey Blower Hoodie combines minimal design with premium comfort. Made from heavyweight fabric with a clean front and perfect drape, it's ideal for layering and creating a modern, effortless look."
    },
]


export function getProductos(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (productos) resolve(productos)
            else reject('Unresolved. Products were not received')
        }, 500)
    })
}

export function getUnProducto(id){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const producto = productos.find((item) => item.id === id)
            if (producto) resolve(producto)
            else reject('Unresolved. Product was not received')
        }, 200)
    })
}
