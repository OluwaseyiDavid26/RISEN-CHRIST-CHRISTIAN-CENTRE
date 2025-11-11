import React from "react";
import { Link } from "react-router-dom";

function Bible() {
  return (
    <>
      {/* Up Next Section */}
      <section className="w-full px-4 py-8">
        <div className="max-w-9xl mx-auto text-left">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            What Does the Bible Say About Giving?
          </h2>
          <p className="text-lg text-gray-700">
            “Each one must give as he has decided in his heart, not reluctantly
            or under compulsion, for God loves a cheerful giver.”
            <br />– <span className="italic">2 Corinthians 9:7</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Bible;
