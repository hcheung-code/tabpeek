import { ArrowRightIcon, MousePointerIcon, MousePointerClickIcon, EyeIcon, CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button"
import { ChromeBrowserDemo } from "./_components/ChromeBrowserDemo";

export default function HomePage() {
  return <>
  <section className="min-h-screen bg-[radial-gradient(circle,_rgba(176,196,216,0.25)_0%,_rgba(52,73,94,0.18)_60%,_rgba(246,243,236,0.12)_100%)] flex items-center justify-center text-center flex-col text-balance gap-8 px-4">
    <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4 text-logo-dark"> Never get lost finding your tabs again</h1>
    <p className="text-lg lg:text-3xl max-w-screen-xl text-logo-dark">
    Instantly preview all tabs in a group with a simple hover, making it faster 
    and easier than ever to find exactly what you need!
    </p>
    <a href="#download">
      <Button className="text-lg p-6 rounded-xl flex gap-2 bg-logo-dark text-logo-cream hover:bg-logo-light hover:text-logo-dark">
        Download now <ArrowRightIcon className="size-5"/>
      </Button>
    </a>

  </section>
  <section id="about" className="bg-[radial-gradient(circle,_rgba(176,196,216,0.25)_0%,_rgba(52,73,94,0.18)_60%,_rgba(246,243,236,0.12)_100%)] text-logo-dark py-24">
    <div className="container max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">How TabPeek Works</h2>
      
      {/* Introduction */}
      <div className="max-w-3xl mx-auto mb-16">
        <p className="text-xl text-center leading-relaxed">
          TabPeek is a powerful browser extension that transforms your tab management experience.
          With a simple hover, find exactly what you need and browse more efficiently.
        </p>
      </div>
      
      {/* Interactive Demo Section */}
      <div className="max-w-5xl mx-auto mb-24 overflow-hidden">
        <ChromeBrowserDemo />
      </div>
      
      {/* Combined Features Section */}
      <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
          <div className="flex flex-col h-full relative z-10">
            <div className="flex items-center mb-4">
              <MousePointerIcon className="h-6 w-6 mr-2 text-logo-dark" />
              <h3 className="text-2xl font-semibold text-logo-dark">Hover to Preview</h3>
            </div>
            <p className="text-gray-700 mb-4 flex-grow">
              Simply hover over any tab group and instantly see all tabs within it. No more guessing or clicking through each one.
            </p>
            <div className="h-1 w-16 bg-logo-dark mt-auto transform transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
        
        <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
          <div className="flex flex-col h-full relative z-10">
            <div className="flex items-center mb-4">
              <MousePointerClickIcon className="h-6 w-6 mr-2 text-logo-dark" />
              <h3 className="text-2xl font-semibold text-logo-dark">Quick Navigation</h3>
            </div>
            <p className="text-gray-700 mb-4 flex-grow">
              Click on any tab in the preview to jump directly to it, making tab navigation faster and more intuitive.
            </p>
            <div className="h-1 w-16 bg-logo-dark mt-auto transform transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
        
        <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
          <div className="flex flex-col h-full relative z-10">
            <div className="flex items-center mb-4">
              <EyeIcon className="h-6 w-6 mr-2 text-logo-dark" />
              <h3 className="text-2xl font-semibold text-logo-dark">Stay Organized</h3>
            </div>
            <p className="text-gray-700 mb-4 flex-grow">
              Easily identify tabs with identical websites or icons. TabPeek displays titles and details so you can stay organized.
            </p>
            <div className="h-1 w-16 bg-logo-dark mt-auto transform transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
      </div>
      
      {/* Additional Features */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-20 shadow-sm hover:shadow-lg transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div className="flex items-start gap-3 group hover:bg-blue-50/50 p-3 rounded-lg transition-colors duration-200 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-logo-dark flex items-center justify-center text-white mt-1">
              <CheckIcon className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Seamless Integration</h4>
              <p className="text-gray-700 text-sm">Works effortlessly with your browser's native tab groups</p>
            </div>
          </div>
          <div className="flex items-start gap-3 group hover:bg-blue-50/50 p-3 rounded-lg transition-colors duration-200 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-logo-dark flex items-center justify-center text-white mt-1">
              <CheckIcon className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Customizable Preview</h4>
              <p className="text-gray-700 text-sm">Choose how you want your tab previews to appear</p>
            </div>
          </div>
          <div className="flex items-start gap-3 group hover:bg-blue-50/50 p-3 rounded-lg transition-colors duration-200 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-logo-dark flex items-center justify-center text-white mt-1">
              <CheckIcon className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Smooth Performance</h4>
              <p className="text-gray-700 text-sm">Optimized for speed, even with dozens of tab groups</p>
            </div>
          </div>
          <div className="flex items-start gap-3 group hover:bg-blue-50/50 p-3 rounded-lg transition-colors duration-200 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-logo-dark flex items-center justify-center text-white mt-1">
              <CheckIcon className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Clean Design</h4>
              <p className="text-gray-700 text-sm">Unobtrusive yet always ready when you need it</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* How it works steps - with interactive animations */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-12">Simple to Use</h3>
        
        <div className="space-y-12">
          <div className="group flex flex-col md:flex-row items-center gap-8 transition-all duration-300 hover:-translate-x-2">
            <div className="md:w-16 flex-shrink-0 md:text-center">
              <div className="w-12 h-12 rounded-full bg-logo-dark text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300">1</div>
            </div>
            <div className="flex-grow bg-white/70 backdrop-blur-sm p-6 rounded-xl group-hover:shadow-md transition-all duration-300 border-l-4 border-logo-dark">
              <h4 className="text-xl font-semibold mb-2">Install the Extension</h4>
              <p className="text-gray-700">Download TabPeek directly from here, it automatically integrates with your browser.</p>
            </div>
          </div>
          
          <div className="group flex flex-col md:flex-row items-center gap-8 transition-all duration-300 hover:-translate-x-2">
            <div className="md:w-16 flex-shrink-0 md:text-center">
              <div className="w-12 h-12 rounded-full bg-logo-dark text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300">2</div>
            </div>
            <div className="flex-grow bg-white/70 backdrop-blur-sm p-6 rounded-xl group-hover:shadow-md transition-all duration-300 border-l-4 border-logo-dark">
              <h4 className="text-xl font-semibold mb-2">Hover Over Tab Groups</h4>
              <p className="text-gray-700">Simply hover your mouse over any tab group in your browser to see a preview of all tabs inside.</p>
            </div>
          </div>
          
          <div className="group flex flex-col md:flex-row items-center gap-8 transition-all duration-300 hover:-translate-x-2">
            <div className="md:w-16 flex-shrink-0 md:text-center">
              <div className="w-12 h-12 rounded-full bg-logo-dark text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300">3</div>
            </div>
            <div className="flex-grow bg-white/70 backdrop-blur-sm p-6 rounded-xl group-hover:shadow-md transition-all duration-300 border-l-4 border-logo-dark">
              <h4 className="text-xl font-semibold mb-2">Click to Navigate</h4>
              <p className="text-gray-700">With the preview displayed, click on any tab to instantly jump to it. It's that simple!</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Perfect for section - with interactive elements */}
      <div className="mt-20">
        <h3 className="text-3xl font-semibold text-center mb-10">Perfect For</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3V6M16 3V6M3 9H21M5 4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4 className="font-semibold text-lg mb-3">Web Developers</h4>
            <p className="text-gray-700">Managing multiple projects with dozens of tabs</p>
          </div>
          <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 15.5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 8L11 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 11L14 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4 className="font-semibold text-lg mb-3">Researchers</h4>
            <p className="text-gray-700">Switching between various sources quickly</p>
          </div>
          <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-700 mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6V20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20V6Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M15 5V3.5C15 3.22386 14.7761 3 14.5 3H9.5C9.22386 3 9 3.22386 9 3.5V5" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4 className="font-semibold text-lg mb-3">Students</h4>
            <p className="text-gray-700">Organizing study materials across tabs</p>
          </div>
          <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 3V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 20V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4 className="font-semibold text-lg mb-3">Product Managers</h4>
            <p className="text-gray-700">Juggling multiple tasks with numerous open tabs</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="pricing" className="px-8 py-16 bg-[radial-gradient(circle,_rgba(176,196,216,0.25)_0%,_rgba(52,73,94,0.18)_60%,_rgba(246,243,236,0.12)_100%)]">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm relative hover:shadow-lg transition-all duration-300">
        <div className="absolute -top-5 left-8 text-5xl text-logo-dark"></div>
        <div className="pt-4">
          <p className="text-lg text-logo-dark leading-relaxed mb-6">
            "TabPeek has completely transformed the way I manage my browser tabs! With so many tabs open at once, 
            I was constantly struggling to find the right one. Now, with just a quick hover over a tab group, 
            I can instantly see all my tabs and get to what I need in seconds. It's so simple and effective – 
            this app has saved me so much time and frustration!"
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-logo-dark"></div>
            <div className="ml-4">
              <p className="font-semibold text-logo-dark">Henry C</p>
              <p className="text-sm text-gray-600">Technical Program Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4
    max-w-screen-xl mx-auto">

    </div>
  </section>
  
  </>
}