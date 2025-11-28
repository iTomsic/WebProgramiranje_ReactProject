const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const users = []; // temporary in-memory storage
const SECRET = "mysecretkey"; // in real apps, store in environment variables

// Register
app.post("/register", (req, res) => {
    const { username, email, password } = req.body;

    const existing = users.find((u) => u.email === email);
    if (existing) {
        return res.status(400).json({ message: "Email already registered" });
    }

    const newUser = {
        id: Date.now(),
        username,
        email,
        password, // stored in plain text for now (NOT secure, but per your instruction)
    };

    users.push(newUser);
    res.json({ message: "User registered successfully" });
});

// Login
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const user = users.find((u) => u.email === email);
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    if (user.password !== password) {
        return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "1h" });

    res.json({
        token,
        username: user.username,
        email: user.email,
    });
});

// Protected route example
app.get("/profile", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Missing auth token" });

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SECRET);
        const user = users.find((u) => u.id === decoded.id);
        res.json({ username: user.username, email: user.email });
    } catch {
        res.status(401).json({ message: "Invalid token" });
    }
});

app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});
