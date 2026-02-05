import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const seed = async () => {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany();

    await Product.insertMany([
        {
            title: "Dune ",
            author: "Frank Herbert",
            price: 9.99,
            image: "https://mozaik-knjiga.hr/wp-content/uploads/2025/07/Dina.jpg",
            description:
                "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for... When House Atreides is betrayed, the destruction of Paul’s family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad’Dib, he will bring to fruition humankind’s most ancient and unattainable dream.",
        },
        {
            title: "The Shining",
            author: "Stephen King",
            description:
                "Jack Torrance's new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he'll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote... and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.",
            price: 14.99,
            image: "https://mozaik-knjiga.hr/wp-content/uploads/2024/12/The-Shining.jpg",
            category: "Novel",
        },

        {
            title: "Dracula",
            author: "Bram Stoker",
            price: 19.99,
            image: "https://mozaik-knjiga.hr/wp-content/uploads/2025/09/Drakula-500pix.jpg",
            description:
                "When Jonathan Harker visits Transylvania to help Count Dracula with the purchase of a London house, he makes a series of horrific discoveries about his client. Soon afterwards, various bizarre incidents unfold in England: an apparently unmanned ship is wrecked off the coast of Whitby; a young woman discovers strange puncture marks on her neck; and the inmate of a lunatic asylum raves about the 'Master' and his imminent arrival. In Dracula, Bram Stoker created one of the great masterpieces of the horror genre, brilliantly evoking a nightmare world of vampires and vampire hunters and also illuminating the dark corners of Victorian sexuality and desire.",
        },

        {
            title: "1984",
            author: "George Orwell",
            price: 11.99,
            image: "https://mozaik-knjiga.hr/wp-content/uploads/2025/07/1984.jpg",
            description:
                "Winston Smith lives in a world where the government controls every aspect of life, even thoughts. Big Brother watches everyone, history is rewritten daily, and individuality is crushed beneath the weight of absolute power. As Winston begins to question the system and fall in love, he risks everything in a quiet rebellion against a terrifyingly efficient regime. 1984 remains one of the most powerful and disturbing visions of the future ever written.",
            category: "Novel",
            stock: 8,
        },
        {
            title: "Brave New World",
            author: "Aldous Huxley",
            price: 12.49,
            image: "https://diwanegypt.com/wp-content/uploads/2020/08/9780099477464.jpg",
            description:
                "In a seemingly perfect future society, people are engineered for happiness, consumerism, and social stability. Pain, conflict, and individuality have been eliminated — at a terrible cost. When Bernard Marx begins to feel different, and a man raised outside the system enters this brave new world, the fragile illusion of perfection begins to crack. A chilling and thought-provoking classic of dystopian fiction.",
            category: "Novel",
            stock: 6,
        },
        {
            title: "Fahrenheit 451",
            author: "Ray Bradbury",
            price: 10.99,
            image: "https://mozaik-knjiga.hr/wp-content/uploads/2024/12/9789538230981.jpg",
            description:
                "In a future where books are outlawed and burned by 'firemen,' Guy Montag carries out his duties without question — until a chance encounter makes him rethink everything. As society drifts toward shallow entertainment and enforced ignorance, Montag begins a dangerous journey toward knowledge and rebellion. Fahrenheit 451 is a powerful warning about censorship and the loss of intellectual freedom.",
            category: "Novel",
            stock: 7,
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            price: 13.99,
            image: "https://www.thebookdesigner.com/wp-content/uploads/2023/12/The-Hobbit-Book-Cover-with-Smaug.png",
            description:
                "Bilbo Baggins lives a quiet, comfortable life until the wizard Gandalf and a group of dwarves draw him into an unexpected adventure. Crossing dangerous lands and facing fearsome creatures, Bilbo discovers courage, cleverness, and strength he never knew he possessed. The Hobbit is a timeless tale of adventure, friendship, and the power of stepping beyond one’s comfort zone.",
            category: "Fantasy",
            stock: 10,
        },
        {
            title: "The Picture of Dorian Gray",
            author: "Oscar Wilde",
            price: 9.49,
            image: "https://mozaik-knjiga.hr/wp-content/uploads/2025/03/9781529954234-jacket-large.jpg",
            description:
                "Dorian Gray is a young man of extraordinary beauty who wishes that his portrait would age instead of him. As he descends into a life of indulgence and moral corruption, his appearance remains untouched — but the painting reveals the true cost of his choices. Oscar Wilde’s only novel is a haunting exploration of vanity, art, and the soul.",
            category: "Classic",
            stock: 4,
        },
        {
            title: "Frankenstein",
            author: "Mary Shelley",
            price: 8.99,
            image: "https://mozaik-knjiga.hr/wp-content/uploads/2025/10/Frankenstein.jpg",
            description:
                "Driven by ambition and scientific curiosity, Victor Frankenstein creates a living being — only to abandon it in horror. Rejected by society and his creator, the creature seeks understanding, revenge, and purpose. Frankenstein is a profound meditation on responsibility, creation, and the consequences of playing god.",
            category: "Classic",
            stock: 6,
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            price: 12.99,
            image: "https://mozaik-knjiga.hr/wp-content/uploads/2024/12/To-Kill-A-Mockingbird.jpg",
            description:
                "Set in the racially charged American South, young Scout Finch observes the moral courage of her father, Atticus, as he defends an innocent Black man accused of a crime. A story of justice, empathy, and the loss of innocence, To Kill a Mockingbird remains a timeless exploration of morality and human behavior.",
            category: "Classic",
        },
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            price: 11.49,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/960px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
            description:
                "Holden Caulfield narrates his experiences in New York City after being expelled from prep school. With wit, cynicism, and vulnerability, he struggles with alienation and the complexities of adulthood. Salinger’s novel captures the angst and confusion of youth like no other.",
            category: "Classic",
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: 13.49,
            image: "https://mozaik-knjiga.hr/wp-content/uploads/2024/12/The-Great-Gatsby.jpg",
            description:
                "In the roaring twenties, Jay Gatsby throws lavish parties to win back his lost love, Daisy Buchanan. Fitzgerald’s masterpiece explores wealth, obsession, and the elusive American Dream, revealing the dark undercurrents beneath a glittering façade.",
            category: "Classic",
        },
        {
            title: "Moby-Dick",
            author: "Herman Melville",
            price: 14.99,
            image: "https://mozaik-knjiga.hr/wp-content/uploads/2025/07/Moby-Dick.jpg",
            description:
                "Captain Ahab obsessively hunts the great white whale, Moby Dick, in a story of vengeance, fate, and human obsession. Melville’s epic novel is both a thrilling adventure and a profound meditation on humanity’s place in the universe.",
            category: "Classic",
        },
        {
            title: "The Name of the Wind",
            author: "Patrick Rothfuss",
            price: 15.99,
            image: "https://jpfukudai.weebly.com/uploads/6/2/4/0/62408011/cover-notw-fc_orig.webp",
            description:
                "Kvothe recounts his extraordinary life as a gifted musician, magician, and adventurer. From humble beginnings to legendary feats, Rothfuss weaves a rich tale of heroism, magic, and the power of stories themselves. The Name of the Wind is a fantasy novel that captivates from the first page.",
            category: "Fantasy",
        },
        {
            title: "Harry Potter and the Philosopher’s Stone",
            author: "J.K. Rowling",
            price: 10.99,
            image: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale,dpr_1.5/jackets/9781408855652.jpg",
            description:
                "Harry Potter discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry, where he makes friends, faces dark forces, and uncovers mysteries about his past. Rowling’s magical world has enchanted readers of all ages with adventure, friendship, and courage.",
            category: "Fantasy",
        },
        {
            title: "The Handmaid’s Tale",
            author: "Margaret Atwood",
            price: 13.49,
            image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1488552336i/34454589.jpg",
            description:
                "In a dystopian future, women are stripped of rights and forced into reproductive servitude. Offred navigates a world of surveillance, oppression, and resistance, exposing the terrifying consequences of fanaticism and patriarchal control. Atwood’s novel is a chilling and thought-provoking warning.",
            category: "Novel",
        },
        {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            author: "J.R.R. Tolkien",
            price: 16.99,
            image: "https://i.harperapps.com/hcuk/covers/9780008567125/x400.jpg?ph=harperreach_coming_soon.png",
            description:
                "Frodo Baggins begins a perilous journey to destroy the One Ring, accompanied by a fellowship of friends and allies. Tolkien’s epic fantasy explores courage, friendship, and the struggle between light and darkness in a richly imagined world.",
            category: "Fantasy",
        },
    ]);

    console.log("Seed completed");
    process.exit();
};

seed();
