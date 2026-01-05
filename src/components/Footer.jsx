import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold text-gray-900">
              Co<span className="text-[#b6723c]">Time</span>
            </span>
            <p className="text-gray-600 text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi placeat nulla enim inventore optio deleniti, eum quod libero dolores doloribus maiores eos soluta est impedit cum dignissimos quam ad eligendi!</p>
          </div>

          <div className="text-left md:text-right">
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-[#b6723c] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#b6723c] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#b6723c] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
          <p className="text-sm text-gray-500 text-center">&copy; 2025 Ilham Bouktir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer