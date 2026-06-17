function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex flex-col md:flex-row justify-between items-center gap-2">

          <h2 className="text-lg font-bold text-orange-400">
            Recipe Explorer
          </h2>

          <div className="flex gap-4 text-sm text-gray-300">
            <span>Home</span>
            <span>Recipes</span>
            <span>Wishlist</span>
            <span>Contact</span>
          </div>

          <div className="flex gap-3 text-lg">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-3 pt-2 text-center">
          <p className="text-xs text-gray-400">
            © 2026 Recipe Explorer
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;