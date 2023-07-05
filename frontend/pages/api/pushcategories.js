// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let data = [
    {
    title: "Fruits",
    description: "Explore a wide variety of fresh, juicy fruits bursting with natural flavors. From succulent oranges and crisp apples to tropical delights like mangoes and pineapples, our selection of fruits is handpicked to ensure the highest quality. Enjoy the goodness of nature with every bite and indulge in a healthy lifestyle. Start your day with a nutritious fruit bowl or use them to create refreshing smoothies and delectable desserts.",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg",
    pageurl: "fruits"
    },
    {
    title: "Vegetables",
    description: "Discover a vibrant array of farm-fresh vegetables that are packed with essential nutrients. From crunchy cucumbers and leafy greens to vibrant bell peppers and versatile tomatoes, our vegetables are sourced directly from local farmers who prioritize quality and sustainability. Incorporate these colorful and wholesome veggies into your daily meals to add flavor, texture, and a boost of vitamins and minerals to your diet.",
    image: "https://media.istockphoto.com/photos/food-background-with-assortment-of-fresh-organic-vegetables-picture-id1203599923?s=612x612",
    pageurl: "vegetables"
    },
    {
    title: "Dairy Products",
    description: "Experience the creamy goodness of our premium dairy products that are sure to tantalize your taste buds. From rich and velvety milk to a variety of cheeses, yogurts, and butter, we take pride in offering you the finest dairy options available. Sourced from trusted local farms, our dairy products are carefully processed to retain their natural goodness, making them perfect for cooking, baking, or enjoying on their own.",
    image: "https://5.imimg.com/data5/ET/DN/MY-28606098/amul-dairy-products-500x500.jpg",
    pageurl: "dairyproducts"
    },
    {
    title: "Daily Needs",
    description: "Find all your daily essentials in one place, making your life more convenient and hassle-free. From household cleaning supplies and personal care items to pet care products and baby essentials, we've got you covered. Our carefully curated collection ensures top-notch quality and reliability, so you can focus on what matters most without worrying about running out of necessities.",
    image: "https://yespunjab.com/wp-content/uploads/2021/09/Junk-Food-Packaged.jpg",
    pageurl: "dailyneeds"
    },
    {
    title: "Groceries",
    description: "Discover a wide range of pantry staples and essential groceries that will stock your kitchen with everything you need. From cooking oils, grains, and spices to canned goods, snacks, and beverages, our selection ensures you have access to high-quality ingredients for all your culinary adventures. Shop with us and enjoy the convenience of getting your groceries delivered right to your doorstep.",
    image: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/09/19/Pictures/food-shop_1e8c16ea-bbe5-11e8-95ec-91800d079bb4.jpg",
    pageurl: "groceries"
    },
    {
    title: "Potteries",
    description: "Enhance your dining experience with our exquisite range of pottery and tableware. From elegant dinner sets and beautiful serving platters to unique mugs and glassware, our collection is designed to elevate your meals and gatherings. Each piece is meticulously crafted by skilled artisans, combining functionality with aesthetic appeal. Browse through our selection and add a touch of artistry to your home.",
    image: "https://myrepublica.nagariknetwork.com/uploads/media/2019/August/clay%20pots.jpg",
    pageurl: "pottery"
    }
    ]

export default async function handler(req, res) {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    await fetch("https://villagemart.onrender.com/api/categories-infos",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({data:item}),
            
        })
        // let response = await a.json()

  }
    res.status(200).json({ "success":"true" })
    // data.forEach((item)=>{res.status(200).json({ name: item })})
  }
  