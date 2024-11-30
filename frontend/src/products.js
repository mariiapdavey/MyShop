const products = {
    services:[
      {
        _id: "1",
        name: "Solo Performance",
        description:
          "A 15-20 minute set with Mariia performing solo. Ideal for intimate moments and special highlights, featuring classic jazz, lounge, and soulful songs that bring elegance and warmth to your event.",
        duration: "15-20 minutes",
        ensemble: "Solo",
        genres: ["Jazz", "Lounge", "Soul"],
        price: 300,
        image: "/images/solo.jpg",
      },
      {
        _id: "2",
        name: "Lounge Duo",
        description:
          "Mariia is joined by a pianist or guitarist in this relaxed duo, creating a soothing atmosphere with smooth jazz, bossa nova, and lounge classics. Perfect for cocktail hours, dinner parties, and smaller gatherings.",
        duration: "2 hours",
        ensemble: "Duo",
        genres: ["Jazz", "Lounge", "Bossa Nova"],
        price: 500,
        image: "/images/duo.jpg",
      },
      {
        _id: "3",
        name: "Acoustic Trio",
        description:
          "An acoustic setup with Mariia and two instrumentalists, typically guitar and bass. This trio delivers mellow jazz and funk favorites, creating an intimate and sophisticated sound for mid-sized events.",
        duration: "2 hours",
        ensemble: "Trio",
        genres: ["Jazz", "Funk", "Lounge"],
        price: 700,
        image: "/images/trio.jpg",
      },
      {
        _id: "4",
        name: "Two Eyes Jazz",
        description:
          "A five-piece original jazz band led by Mariia, featuring compositions that blend modern jazz elements with classic undertones. Perfect for jazz lovers and creative event settings.",
        duration: "2 hours",
        ensemble: "Five-piece band",
        genres: ["Jazz", "Original Compositions"],
        price: 1200,
        image: "/images/latin.jpg",
      },
      {
        _id: "5",
        name: "Latin Jazz and Funk Band",
        description:
          "Mariia leads a Latin-inspired band that fuses jazz, funk, and lively Latin rhythms. Featuring percussion, bass, guitar, and keys, this group brings energy and spice to any event, ideal for parties and festivals.",
        duration: "2 hours",
        ensemble: "Five-piece band",
        genres: ["Latin Jazz", "Funk"],
        price: 1300,
        image: "images/latin.jpg",
      },
    ],

    events:[
      {
        _id: "101",
        name: "New Yule",
        description:
          "Celebrate the holiday season with Mariia’s jazzed-up takes on Christmas and holiday classics. A warm, nostalgic program that brings the spirit of the season to life with a unique jazz twist.",
        duration: "2 hours",
        price: 600,
        image: "/images/new_yule.jpg",
      },
      {
        _id: "102",
        name: "Let's Fall in Love",
        description:
          "A Valentine's Day-inspired set featuring romantic jazz standards and love songs. Mariia sets the mood with timeless ballads perfect for any celebration of love and connection.",
        duration: "2 hours",
        price: 500,
        image: "/images/love.jpg",
      },
      {
        _id: "103",
        name: "The Golden Groove",
        description:
          "Travel back to the golden age of jazz and funk with Mariia’s renditions of 70s and 80s classics, delivering a funky and groovy experience for events with a retro theme.",
        duration: "2 hours",
        price: 700,
        image: "images/golden_groove.jpg",
      },
      {
        _id: "104",
        name: "Paris Nights",
        description:
          "An elegant evening with French jazz classics and chansons that evoke the romance and beauty of Paris. Perfect for themed dinners, cultural events, or intimate gatherings.",
        duration: "2 hours",
        price: 600,
        image: "/images/paris_nights.jpg",
      },
      {
        _id: "105",
        name: "Latin Fire",
        description:
          "An energetic program filled with Latin jazz and salsa favorites. Ideal for summer events, outdoor parties, and anyone who loves the vibrant sound of Latin music.",
        duration: "2 hours",
        price: 800,
        image: "/images/latin_fire.jpg",
      },
    ],
}
  
  export default products;