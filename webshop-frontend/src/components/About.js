import "./About.css";

export default function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1 className="about-title">About Novella</h1>
            </div>

            <div className="about-content">
                <section className="about-story">
                    <p>
                        Novella began as a small neighborhood bookshop with a
                        simple dream: to connect readers with stories that
                        matter. What started as a humble collection of
                        handpicked titles has grown into an impressive online
                        sanctuary for book lovers everywhere, no matter the kind
                        of literature you truly resonate with.
                    </p>

                    <div className="quote-section">
                        <blockquote className="book-quote">
                            "A reader lives a thousand lives before he dies. The
                            man who never reads lives only one."
                            <cite>— George R.R. Martin</cite>
                        </blockquote>
                    </div>
                </section>

                <div className="about-features">
                    <div className="feature-card">
                        <div className="feature-icon">✨</div>
                        <h3>Curated Selection</h3>
                        <p>
                            Each book in our collection is carefully chosen by
                            our team of passionate readers.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🤝</div>
                        <h3>Community Focused</h3>
                        <p>
                            We support independent authors and publishers,
                            bringing unique voices to your shelf.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🌱</div>
                        <h3>Sustainable Reading</h3>
                        <p>
                            We prioritize eco-friendly packaging and partner
                            with sustainable publishers.
                        </p>
                    </div>
                </div>

                <section className="about-mission">
                    <h2>Our Mission</h2>
                    <p>
                        In a world of algorithms and recommendations, we believe
                        in the magic of human-curated collections. We're not
                        just selling books; we're fostering connections between
                        readers and the stories that will stay with them long
                        after the last page is turned.
                    </p>
                    <p>
                        Every book you find here has been selected with care,
                        considering not just popularity but literary quality,
                        diverse perspectives, and that special something that
                        makes a book unforgettable.
                    </p>
                </section>

                <div className="closing-note">
                    <p className="closing-text">
                        Thank you for being part of our story. We hope we can be
                        a part of yours as well.
                    </p>
                    <div className="signature">— The Novella Team</div>
                </div>
            </div>
        </div>
    );
}
