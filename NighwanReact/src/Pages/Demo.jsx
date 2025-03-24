import React from 'react'

function Demo() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 
shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Landing Page</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-200">Home</a></li>
            <li><a href="#about" className="hover:text-gray-200">About</a></li>
            <li><a href="#services" className="hover:text-gray-200">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center h-screen bg-white">
        <h1 className="text-4xl font-bold mb-6 text-indigo-700">Welcome to My Landing Page</h1>
        <p className="text-lg mb-8">Discover the best services and solutions.</p>
        <a href="#services" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 
rounded">Get Started</a>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto p-8 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-lg mb-8">We are a team of experts dedicated to providing innovative 
solutions.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-gray-100 p-6 rounded shadow hover:bg-gray-200 w-full sm:w-1/3">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p>To deliver exceptional service and satisfaction.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow hover:bg-gray-200 w-full sm:w-1/3">
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p>To be the leader in our field.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow hover:bg-gray-200 w-full sm:w-1/3">
            <h3 className="text-xl font-bold mb-2">Our Values</h3>
            <ul className="list-disc list-inside text-lg">
              <li>Commitment</li>
              <li>Innovation</li>
              <li>Excellence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded shadow hover:bg-gray-50">
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p>Build custom websites with the latest technologies.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:bg-gray-50">
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p>Create intuitive and user-friendly interfaces.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:bg-gray-50">
            <h3 className="text-xl font-bold mb-2">Marketing</h3>
            <p>Promote your brand with effective marketing strategies.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col items-center justify-center h-screen bg-white">
        <h1 className="text-4xl font-bold mb-6 text-indigo-700">Get in Touch</h1>
        <p className="text-lg mb-8">Reach out to us for any inquiries.</p>
        <form className="flex flex-col space-y-4 w-full max-w-md">
          <div className="relative">
            <label htmlFor="name" className="absolute top-2 left-2 text-gray-500">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded 
focus:outline-none focus:border-indigo-500" required />
          </div>
          <div className="relative">
            <label htmlFor="email" className="absolute top-2 left-2 text-gray-500">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded focus:outline-none 
focus:border-indigo-500" required />
          </div>
          <div className="relative">
            <label htmlFor="message" className="absolute top-2 left-2 text-gray-500">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded focus:outline-none 
focus:border-indigo-500" required></textarea>
          </div>
          <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Send 
Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2023 My Landing Page. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Demo