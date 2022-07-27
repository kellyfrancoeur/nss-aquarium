const database = {
    fish: [
        {
            name: "Nemo",
            food: "Eats: insect larvae, small insects, algae",
            length: "Length: 2.2 cm",
            harvested: "Harvested in: Peru",  
            species: "Species: Neon Tetra",
            image: "https://www.thesprucepets.com/thmb/BTUpTekiPP6YvaJB0IKLMJG0GkA=/2486x2486/smart/filters:no_upscale()/neon-tetra-paracheirodon-1381835-hero-2cc17d27c90d4215bfe4deeeab03e0a5.jpg"  
        },
        {
            name: "Gus",
            food: "Eats: algae wagers, fish flakes, bloodworms",
            length: "Length: 2.4 in",
            harvested: "Harvested in: Trinidad",  
            species: "Species: Guppies",
            image: "https://cdn.britannica.com/02/117202-004-526214C9.jpg" 
        },
        {
            name: "Peter",
            food: "Eats: flakes and shit",
            length: "Length: 3in",
            harvested: "Harvested in: South Africa",
            species: "Species: Dwarf Gourami",
            image: "https://cdn.fishtankadvisor.com/wp-content/uploads/2019/11/dwarf-gourami-powder-blue.jpg"
        } 
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}