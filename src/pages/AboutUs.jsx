import React from "react";

export default function AboutUs() {
  return (
    <main className="page-shell">
      <section className="about-grid">
        <img
          className="about-image"
          src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=85"
          alt="Healthy green houseplants"
        />
        <div className="about-copy">
          <p className="eyebrow">ABOUT PARADISE NURSERY</p>
          <h1 className="page-title">Plants that make your space feel like home.</h1>
          <p>
            Paradise Nursery is a modern houseplant store built for people who
            want to bring more greenery into everyday life. We carefully
            select attractive, beginner-friendly plants for bedrooms, offices,
            living rooms, and cozy corners.
          </p>
          <p>
            Our goal is simple: make choosing and caring for plants easy,
            enjoyable, and accessible. From low-maintenance succulents to
            statement tropicals, every collection is chosen with home growers
            in mind.
          </p>
        </div>
      </section>
    </main>
  );
}