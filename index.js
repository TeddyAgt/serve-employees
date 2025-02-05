import express from "express";

const app = express();

const PORT = 3310;

const sampleEmployee = {
    name: {
        first: "Charlie",
        last: "Thompson",
    },
    email: "charlie.thompson@example.com",
    picture: {
        medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
};

app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});

// routes
app.get("/api/employees", (req, res) => {
    res.json({ message: "Hello Employees", results: [sampleEmployee] });
});
