export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
        
        {/* Company */}
        <div className="mb-4 md:mb-0">
          <span className="font-semibold text-white">Calypsion Pvt Ltd</span> © {new Date().getFullYear()} All rights reserved.
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}
