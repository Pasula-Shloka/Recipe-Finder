function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">

      <h1 className="text-5xl font-bold mb-8">
        Contact Us
      </h1>

      <form className="space-y-4">

        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 border rounded-xl"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 border rounded-xl"
        />

        <textarea
          rows="5"
          placeholder="Message"
          className="w-full p-4 border rounded-xl"
        />

        <button
          className="
          bg-orange-500
          text-white
          px-6
          py-3
          rounded-xl
          "
        >
          Send
        </button>

      </form>

    </div>
  );
}

export default Contact;