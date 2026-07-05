import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  ShoppingCart,
  Menu,
  X,
  MessageCircle,
  ChevronRight,
  ChevronDown,
  HandHeart,
  Leaf,
  ShieldCheck,
  Truck
} from "lucide-react";
import { cn } from './utils/cn';
import { products, upholsteryOptions, woodOptions, Product } from './constants/data';

// --- Components ---

const Navbar = ({
  onCartClick,
  onWishlistClick,
  cartCount,
  wishlistCount,
}: {
  onCartClick: () => void;
  onWishlistClick: () => void;
  cartCount: number;
  wishlistCount: number;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'О бренде', href: '#about' },
    { name: 'Каталог', href: '#catalog' },
    { name: 'Производство', href: '#production' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 py-3 md:px-6 md:py-4">
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between rounded-full px-4 py-3 transition-all duration-300 md:rounded-none md:px-0 md:py-0",
          "bg-white/92 shadow-[0_10px_35px_rgba(0,0,0,0.12)] backdrop-blur-xl md:bg-transparent md:shadow-none md:backdrop-blur-none",
          isScrolled && "md:bg-white/80 md:backdrop-blur-md md:shadow-sm md:rounded-full md:px-6 md:py-3"
        )}
      >
        <div className="flex items-center gap-8">
          <a
            href="/"
            className={cn(
              "flex items-center gap-2 font-serif text-2xl font-bold tracking-tighter transition-all duration-500 md:gap-3",
              "text-stone-900",
              !isScrolled && "md:text-white"
            )}
          >
            <img src="/трэс.png" alt="ТРЭС" className="h-8 md:h-14" />
            <span>ТРЭС</span>
          </a>

          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-widest transition-all duration-500",
                  isScrolled ? "text-black" : "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden xl:flex items-center gap-3 mr-4">
            <button
              onClick={onWishlistClick}
              aria-label="Избранное"
              className={cn(
                "relative group transition-all duration-300 hover:scale-110",
                isScrolled ? "text-black" : "text-white"
              )}
            >
              <Heart size={24} strokeWidth={1.8} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-stone-900 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onCartClick}
              aria-label="Корзина"
              className={cn(
                "relative group transition-all duration-300 hover:scale-110",
                isScrolled ? "text-black" : "text-white"
              )}
            >
              <ShoppingCart size={24} strokeWidth={1.8} className="group-hover:text-[#b58b52] transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#b58b52] text-white text-[11px] font-semibold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href="tel:+79176659081"
              className={cn(
                "text-sm font-medium transition-all duration-500",
                isScrolled ? "text-black" : "text-white"
              )}
            >
              8 (917) 665-90-81
            </a>

            <a href="https://t.me/mebeltrees" target="_blank" rel="noopener noreferrer">
              <img src="/tglogo.png" alt="Telegram" className="w-9 h-9 object-contain" />
            </a>
            <a href="https://max.ru/join/JVs7PGXE7REpJryjRhwK3CpG_MMGBFFxYFyF6R-BoSY" target="_blank" rel="noopener noreferrer">
              <img src="/maxlogo.png" alt="MAX" className="w-6 h-6 object-contain" />
            </a>
            <a href="https://vk.com/trees.mebel" target="_blank" rel="noopener noreferrer">
              <img src="/vklogo.png" alt="VK" className="w-6 h-6 object-contain" />
            </a>
          </div>

          <a
            href="tel:+79176659081"
            className="hidden sm:flex md:hidden h-9 items-center rounded-full bg-stone-100 px-3 text-[12px] font-semibold text-stone-800"
          >
            8 917
          </a>

          <button
            onClick={onWishlistClick}
            aria-label="Избранное"
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-900 md:hidden"
          >
            <Heart size={18} strokeWidth={1.9} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-stone-900 px-1 text-[10px] text-white">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={onCartClick}
            aria-label="Корзина"
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-white md:hidden"
          >
            <ShoppingCart size={18} strokeWidth={1.9} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b58b52] px-1 text-[10px] text-white">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b1d16] text-white shadow-lg transition-all duration-300 hover:scale-105 md:hidden"
            aria-label="Меню"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className="mx-auto mt-2 flex w-full max-w-7xl items-center justify-between rounded-full bg-white/86 px-4 py-2 text-[12px] font-medium text-stone-800 shadow-[0_8px_25px_rgba(0,0,0,0.08)] backdrop-blur-xl md:hidden">
        <a href="tel:+79176659081">8 (917) 665-90-81</a>
        <div className="flex items-center gap-3">
          <a href="https://t.me/mebeltrees" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <img src="/tglogo.png" alt="Telegram" className="h-5 w-5 object-contain" />
          </a>
          <a href="https://vk.com/trees.mebel" target="_blank" rel="noopener noreferrer" aria-label="VK">
            <img src="/vklogo.png" alt="VK" className="h-5 w-5 object-contain" />
          </a>
          <a href="https://max.ru/join/JVs7PGXE7REpJryjRhwK3CpG_MMGBFFxYFyF6R-BoSY" target="_blank" rel="noopener noreferrer" aria-label="MAX">
            <img src="/maxlogo.png" alt="MAX" className="h-5 w-5 object-contain" />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 grid w-full max-w-7xl grid-cols-2 gap-2 rounded-[28px] bg-white/95 p-3 text-sm font-medium text-stone-900 shadow-[0_20px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="rounded-2xl bg-stone-100 px-4 py-3 text-center"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ProductModal = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isInWishlist,
}: {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
}) => {
const [selectedUpholstery, setSelectedUpholstery] = useState(() => {

  if (product.id === "chaise-longue") {
    return upholsteryOptions.find((item) => item.id === "milky") || upholsteryOptions[0];
  }

  if (product.id === "malina") {
    return upholsteryOptions.find((item) => item.id === "dark-gray") || upholsteryOptions[0];
  }

  return upholsteryOptions[0];
});

const [selectedWood, setSelectedWood] = useState(() => {
  if (product.id === "malina") {
    return woodOptions.find((item) => item.id === "brown-oil") || woodOptions[0];
  }

  return woodOptions[0];
});
 

 

 
 const galleryPhotos =
 product.id === "chaise-longue" &&
selectedUpholstery.id === "milky"
  ? [
      "/шезлонгмол1 (4).png",
      "/шезлонгмол1 (1).png",
      "/шезлонгмол1 (2).png",
      "/шезлонгмол1 (3).png",
    "/шезлонгмол.png"
    ]
    : product.id === "chaise-longue" &&
  selectedUpholstery.id === "dark-gray"
? [
  "/шезлонг темсер (2).png",
    "/шезлонг темсер (1).png",
    "/шезлонг темсер (3).png",
    "/шезлонг темсер (5).png",
    "/шезлонг темсер (4).png",
  ]
    : product.id === "chaise-longue" &&
selectedUpholstery.id === "brown"
  ? [
      "/шезлонг кор.png",
      "/шезлонг кор (1).png",
      "/шезлонг кор (3).png",
      "/шезлонг кор (2).png",
      "/шезлонг кор (4).png",
    ]
    : product.id === "chaise-longue" &&
  selectedUpholstery.id === "khaki"
? [
  "/шезлонг хаки (3).png",
  "/шезлонг хаки (1).png",
  "/шезлонг хаки (2).png",
    "/шезлонг хаки (5).png",

    "/шезлонг хаки (4).png",
  ]
    :
product.id === "malina" &&
selectedWood.id === "brown-oil" &&
selectedUpholstery.id === "light-gray"
? [
  "/malinatsk (1).jpg",
  "/malinatsk (2).jpg",
  "/malinatsk (3).jpg",
  "/malinatsk (4).jpg",
  "/malinatsk (1).png",
]

: product.id === "malina" &&
selectedWood.id === "brown-oil" &&
selectedUpholstery.id === "milky"
? [
  "/malinamolk (1).jpg",
  "/malinamolk (2).jpg",
  "/malinamolk (3).jpg",
  "/malinamolk (4).jpg",
  "/malinamolk (1).png",
]

: product.id === "malina" &&
selectedWood.id === "brown-oil" &&
selectedUpholstery.id === "dark-gray"
? [
  "/malinatsk (1).jpg",
  "/malinatsk (2).jpg",
  "/malinatsk (3).jpg",
  "/malinatsk (4).jpg",
  "/malinatsk (1).png",
]

: product.id === "malina" &&
selectedWood.id === "brown-oil" &&
selectedUpholstery.id === "brown"
? [
  "/malinakork (2).jpg",
  "/malinakork (1).jpg",
  "/malinakork (3).jpg",
  "/malinakork (4).jpg",
  "/malinakork (1).png",
]

: product.id === "malina" &&
selectedWood.id === "brown-oil" &&
selectedUpholstery.id === "dark-beige"
? [
  "/malinatb (1).jpg",
  "/malinatb (2).jpg",
  "/malinatb (3).jpg",
  "/malinatb (4).jpg",
  "/malinatb (5).jpg",
  "/malinatb (1).png",
]

: product.id === "malina" &&
selectedWood.id === "gray-oil" &&
selectedUpholstery.id === "milky"
? [
  "/malinamols.png",
  "/malinamolk (1).png",
]

: product.id === "malina" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "milky"
? [
  "/malinamoln.png",
  "/malinamolk (1).png",
]

: product.id === "malina" &&
selectedWood.id === "black-oil" &&
selectedUpholstery.id === "milky"
? [
  "/malinamolc.png",
  "/malinamolk (1).png",
]

: product.id === "malina" &&
selectedWood.id === "gray-oil" &&
selectedUpholstery.id === "dark-gray"
? [
  "/malinatss.png",
  "/malinatsk (1).png",
]

: product.id === "malina" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "dark-gray"
? [
  "/malinatsn.png",
  "/malinatsk (1).png",
]

: product.id === "malina" &&
selectedWood.id === "black-oil" &&
selectedUpholstery.id === "dark-gray"
? [
  "/malinatsc.png",
  "/malinatsk (1).png",
]

: product.id === "malina" &&
selectedWood.id === "gray-oil" &&
selectedUpholstery.id === "brown"
? [
  "/malinakors.png",
  "/malinakork (1).png",
]

: product.id === "malina" &&
selectedWood.id === "black-oil" &&
selectedUpholstery.id === "brown"
? [
  "/malinakorc.png",
  "/malinakork (1).png",
]

: product.id === "malina" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "brown"
? [
  "/malinakorn.png",
  "/malinakork (1).png",
]

: product.id === "malina" &&
selectedWood.id === "gray-oil" &&
selectedUpholstery.id === "dark-beige"
? [
  "/malinatbs.png",
  "/malinatb (1).png",
]

: product.id === "malina" &&
selectedWood.id === "black-oil" &&
selectedUpholstery.id === "dark-beige"
? [
  "/malinatbc.png",
  "/malinatb (1).png",
]

: product.id === "malina" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "dark-beige"
? [
  "/malinatbn.png",
  "/malinatb (1).png",
]

:
 product.id === "alba" &&
selectedWood.id === "brown-oil" &&
selectedUpholstery.id === "brown"
? [
    "/albakor (1).jpg",
    "/albakor (2).jpg",
    "/albakor (3).jpg",
    "/albakor (4).png",
     "/albakor (1).png"
]
: product.id === "alba" &&
  selectedWood.id === "natural-oil" &&
  selectedUpholstery.id === "brown"
? [
  "/albakorn (1).jpg",
  "/albakorn (2).png",
  "/albakorn (3).png",
  "/albakorn (2).jpg",
  "/albakor (1).png",
]
: product.id === "alba" &&
  selectedWood.id === "gray-oil" &&
  selectedUpholstery.id === "brown"
? [
  "/albakors.png",
  "/albakor (1).png"
]
: product.id === "alba" &&
  selectedWood.id === "black-oil" &&
  selectedUpholstery.id === "brown"
? [
  "/albakorc (1).jpg",
  "/albakorc (1).png",
  "/albakorc (2).jpg",
  "/albakorc (2).png",
  "/albakorc (3).jpg",
  "/albakor (1).png"
]
: product.id === "alba" &&
  selectedWood.id === "brown-oil" &&
  selectedUpholstery.id === "light-gray"
? [
    "/albaser (1).jpg",
    "/albaser (2).jpg",
    "/albaser (3).jpg",
    "/albaser (4).jpg",
    "/albaser (1).png"
  ]
  : product.id === "alba" &&
  selectedWood.id === "natural-oil" &&
  selectedUpholstery.id === "light-gray"
? [
    "/albasn.png",
    "/albaser (1).png"
  ]
  : product.id === "alba" &&
  selectedWood.id === "gray-oil" &&
  selectedUpholstery.id === "light-gray"
? [
    "/albass.png",
    "/albaser (1).png"
  ]
  : product.id === "alba" &&
  selectedWood.id === "black-oil" &&
  selectedUpholstery.id === "light-gray"
? [
    "/albasc.png",
    "/albaser (1).png"
  ]
  : product.id === "alba" &&
  selectedWood.id === "brown-oil" &&
  selectedUpholstery.id === "dark-beige"
? [
    "/albatsk.png",
    "/albats.png"
  ]
  
  : product.id === "alba" &&
  selectedWood.id === "natural-oil" &&
  selectedUpholstery.id === "dark-beige"
? [
    "/albatbn.png",
    "/albats.png"
  ]
  : product.id === "alba" &&
  selectedWood.id === "natural-oil" &&
  selectedUpholstery.id === "dark-gray"
? [
    "/albatsn (1).jpg",
    "/albatsn (2).png",
    "/albatsn (3).jpg",
    "/albatsn (4).jpg",
    "/albatskk.png",
  ]
  : product.id === "alba" &&
  selectedWood.id === "gray-oil" &&
  selectedUpholstery.id === "dark-gray"
? [
  "/albatss (3).jpg",
    
    "/albatss (1).jpg",
    "/albatss (2).jpg",
    

    "/albatss (2).png",
    "/albatss (1).png",
    "/albatskk.png",
  ]
  : product.id === "alba" &&
  selectedWood.id === "black-oil" &&
  selectedUpholstery.id === "dark-gray"
? [
    
    "/albatsc (1).jpg",
    "/albatsc (2).jpg",
    "/albatsc (3).jpg",
    "/albatsc (4).jpg",
    "/albatsc (5).jpg",
       "/albatskk.png",
]
  : product.id === "alba" &&
  selectedWood.id === "brown-oil" &&
  selectedUpholstery.id === "milky"
? [
    "/albamolk (1).jpg",
    "/albamolk (2).jpg",
    "/albamolk (3).jpg",
    "/albamolk (4).jpg",
    "/albamolk (5).jpg",
    "/albamolk (6).jpg",
    "/albamolk (1).png"
  ]
  : product.id === "alba" &&
  selectedWood.id === "natural-oil" &&
  selectedUpholstery.id === "milky"
? [
    "/albamoln (1).jpg",
    "/albamoln (1).png",
    "/albamoln (2).jpg",
    "/albamoln (2).png",
    "/albamoln (3).jpg",
    "/albamolk (1).png"
  ]
  : product.id === "alba" &&
  selectedWood.id === "gray-oil" &&
  selectedUpholstery.id === "milky"
? [
  "/albamols (1).jpg",
    "/albamols (1).png",
    "/albamols (2).jpg",
    "/albamols (3).jpg",
    "/albamols (4).png",
    "/albamolk (1).png"
  ]
  : product.id === "alba" &&
  selectedWood.id === "black-oil" &&
  selectedUpholstery.id === "milky"
? [
    "/albamolc (1).jpg",
    "/albamolc (2).jpg",
    "/albamolc (3).jpg",
    "/albamolc (4).jpg",
    "/albamolc (1).png",
    "/albamolk (1).png"
  ]
  : product.id === "alba" &&
  selectedWood.id === "brown-oil" &&
  selectedUpholstery.id === "dark-gray"
? [
    
    "/albatsk (1).png",
    "/albatsk (2).jpg",
    "/albatsk (3).jpg",
    "/albatsk (4).jpg",
    "/albatskk.png"
  ]
  : product.id === "alba" &&
  selectedWood.id === "gray-oil" &&
  selectedUpholstery.id === "dark-beige"
? [
    "/albatbs.png",
    "/albats.png",
  ]

: product.id === "alba" &&
  selectedWood.id === "black-oil" &&
  selectedUpholstery.id === "dark-beige"
? [
    "/albatbc.png",
    "/albats.png",
  ]
: selectedWood.id === "brown-oil" && selectedUpholstery.id === "emerald"
  ? [
      "/supra-izym.png",
      "/supra-izym-1.png",
      "/supra-izym-2.png",
    ]
   : product.id === "supra" &&
  selectedWood.id === "brown-oil" &&
  selectedUpholstery.id === "light-gray"
? [
    "/supra-ss.png",
    "/supra-ss-1.png",
    "/supra-ss-2.png",
    "/supra-ss-3.png"
  ]
   : product.id === "supra" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "light-gray"

? [
    
    "/supra-ss-nm (1).jpg",
    "/supra-ss-nm (2).jpg",
    "/supra-ss-nm (3).jpg",
    "/supra-ss-nm (4).jpg",
    "/supra-ss-2.png",
    "/supra-ss-3.png",
  ]
: product.id === "supra-semi-bar" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "light-gray"
? [
  "/bar-ss (3).png",
  "/bar-ss (6).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "brown-oil" &&
selectedUpholstery.id === "light-gray"
? [
    "/bar-ss.png",
    "/bar-ss (1).jpg",
    "/bar-ss (1).png",
    "/bar-ss (7).png",
    "/bar-ss (6).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "light-gray"
? [
    "/bar-ss (3).jpg",
    "/bar-ss (6).png"
]

: product.id === "supra-semi-bar" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "dark-beige"
? [
    "/bar-tb (3).png",
    "/bar-tb (2).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "dark-gray"
? [
    "/bar-ts (3).png",
    "/bar-ts (7).png"
]
: product.id === "supra-semi-bar" &&
  selectedWood.id === "brown-oil" &&
  selectedUpholstery.id === "dark-beige"
? [
    "/bar-tb (1).png",
    "/bar-tb (2).png"
  ]
  : product.id === "supra-semi-bar" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "milky"
? [
    "/bar-mol (3).png",
    "/bar-mol (7).png"
]
  : product.id === "supra-semi-bar" &&
  selectedWood.id === "brown-oil" &&
  selectedUpholstery.id === "milky"
? [
    "/bar-mol (6).png",
    "/bar-mol (2).jpg",
    "/bar-mol (1).jpg",
    "/bar-mol.jpg",
    "/bar-mol (2).png",
    "/bar-mol (7).png"
  ]
  : product.id === "supra-semi-bar" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "blue"
? [
    "/bar-sin (7).png",
    "/bar-sin (4).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "terracotta"
? [
    "/bar-ter (5).png",
    "/bar-ter (2).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "mustard"
? [
    "/bar-gor (1).png",
    "/bar-gor (7).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "black"
? [
    "/bar-cher (3).png",
    "/bar-cher (7).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "brown"
? [
    "/bar-kor.png",
    "/bar-kor (1).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "gray-oil" &&
selectedUpholstery.id === "light-gray"
? [
    "/bar-ss (4).png",
    "/bar-ss (7).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "gray-oil" &&
selectedUpholstery.id === "dark-beige"
? [
    "/bar-tb (5).png",
    "/bar-tb (2).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "gray-oil" &&
selectedUpholstery.id === "milky"
? [
    "/bar-mol (5).png",
    "/bar-mol (7).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "gray-oil" &&
selectedUpholstery.id === "dark-gray"
? [
    "/bar-ts (8).png",
    "/bar-ts (7).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "gray-oil" &&
selectedUpholstery.id === "blue"
? [
    "/bar-sin (2).png",
    "/bar-sin (4).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "gray-oil" &&
selectedUpholstery.id === "brown"
? [
    "/BAR-KOR-3.png",
    "/bar-kor (1).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "gray-oil" &&
selectedUpholstery.id === "terracotta"
? [
    "/bar-ter (7).png",
    "/bar-ter (2).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "gray-oil" &&
selectedUpholstery.id === "mustard"
? [
    "/bar-gor (2).png",
    "/bar-gor (7).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "gray-oil" &&
selectedUpholstery.id === "black"
? [
    "/bar-cher (2).png",
    "/bar-cher (7).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "black-oil" &&
selectedUpholstery.id === "light-gray"
? [
    "/bar-ss (5).png",
    "/bar-ss (6).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "black-oil" &&
selectedUpholstery.id === "dark-beige"
? [
    "/bar-tb (4).png",
    "/bar-tb (2).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "black-oil" &&
selectedUpholstery.id === "milky"
? [
    "/bar-mol (4).png",
    "/bar-mol (7).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "black-oil" &&
selectedUpholstery.id === "dark-gray"
? [
    "/bar-ts (2).png",
    "/bar-ts (7).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "black-oil" &&
selectedUpholstery.id === "blue"
? [
    "/bar-sin (3).png",
    "/bar-sin (4).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "black-oil" &&
selectedUpholstery.id === "terracotta"
? [
    "/bar-ter (6).png",
    "/bar-ter (2).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "black-oil" &&
selectedUpholstery.id === "mustard"
? [
    "/bar-gor (3).png",
    "/bar-gor (7).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "black-oil" &&
selectedUpholstery.id === "black"
? [
    "/bar-cher (4).png",
    "/bar-cher (7).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "black-oil" &&
selectedUpholstery.id === "brown"
? [
    "/bar-kor5.png",
    "/bar-kor (1).png"
]
: product.id === "supra-semi-bar" &&
selectedWood.id === "natural-oil" &&
selectedUpholstery.id === "light-gray"
? [
    "/bar-ss (3).png",
    "/bar-ss (6).png"
  ]

: product.id === "supra-semi-bar" &&
selectedWood.id === "brown-oil" &&
selectedUpholstery.id === "dark-gray"
? [
    "/bar-ts (1).png",
    "/bar-ts (1).jpg",
    "/bar-ts (4).png",
    "/bar-ts (5).png",
    "/bar-ts (6).png",
    "/bar-ts (7).png"
  ]
  
: selectedWood.id === "black-oil" &&
selectedUpholstery.id === "light-gray"
? [
 
    "/supra-ss-hm.png",
    "/supra-ss-2.png",
    "/supra-ss-3.png",
  ]
  : selectedWood.id === "black-oil" && selectedUpholstery.id === "dark-beige"
? [
    "/supra-tb-hm.png",
    "/supra-tb(5).png",
    "/supra-tb(6).png",
  ]
  : selectedWood.id === "black-oil" && selectedUpholstery.id === "milky"
? [
    "/supra-mol-hm.png",
    "/supra-mol-3.png",
    "/supra-mol-4.png",
  ]
  : selectedWood.id === "black-oil" && selectedUpholstery.id === "brown"
? [
    "/supra-kor-hm.png",
    "/supra-kor-4.png",
    "/supra-kor-5.png",
  ]
  : selectedWood.id === "black-oil" && selectedUpholstery.id === "dark-gray"
? [
    "/supra-ser-hm (1).jpg",
    "/supra-ser-hm (2).jpg",
    "/supra-ser-hm (3).jpg",
    "/supra-ser-hm (4).jpg",
    "/supra-3.png",
    "/supra-4.png",
  ]
  : selectedWood.id === "black-oil" && selectedUpholstery.id === "emerald"
? [
    "/supra-izym-hm.png",
    "/supra-izym-1.png",
    "/supra-izym-2.png",
  ]
  : selectedWood.id === "black-oil" && selectedUpholstery.id === "terracotta"
? [
    "/supra-ter-hm.png",
    "/supra-ter-3.png",
    "/supra-ter-4.png",
  ]
  : selectedWood.id === "black-oil" && selectedUpholstery.id === "mustard"
? [
    "/supra-gor-hm.png",
    "/supra-gor-1.png",
    "/supra-gor-2.png",
  ]
  : selectedWood.id === "natural-oil" && selectedUpholstery.id === "milky"
? [
    "/supra-mol-nm.png",
    "/supra-mol-3.png",
    "/supra-mol-4.png",
  ]
  : selectedWood.id === "natural-oil" && selectedUpholstery.id === "brown"
? [
    "/supra-kor-nm.png",
    "/supra-kor-4.png",
    "/supra-kor-5.png",
  ]
  : selectedWood.id === "natural-oil" && selectedUpholstery.id === "dark-gray"
? [
    "/supra-ser-nm.png",
    "/supra-3.png",
    "/supra-4.png",
  ]
  : selectedWood.id === "natural-oil" && selectedUpholstery.id === "emerald"
? [
    "/supra-iz-nm.png",
    "/supra-izym-1.png",
    "/supra-izym-2.png",
  ]
  : selectedWood.id === "natural-oil" && selectedUpholstery.id === "terracotta"
? [
    "/supra-ter-nm.png",
    "/supra-ter-3.png",
    "/supra-ter-4.png",
  ]
  : selectedWood.id === "natural-oil" && selectedUpholstery.id === "mustard"
? [
    "/supra-gor-nm.png",
    "/supra-gor-1.png",
    "/supra-gor-2.png",
  ]
  : selectedWood.id === "natural-oil" && selectedUpholstery.id === "dark-beige"
? [
    "/supra-tb-nm.png",
    "/supra-tb(5).png",
    "/supra-tb(6).png",
  ]
  
  : selectedWood.id === "brown-oil" && selectedUpholstery.id === "dark-beige"
? [
    "/supra-tb (1).jpg",
    "/supra-tb (2).jpg",
    "/supra-tb (3).jpg",
    "/supra-tb (4).jpg",
    "/supra-tb(5).png",
    "/supra-tb(6).png",
  ]
  
  : product.id === "supra-semi-bar" &&
selectedWood.id === "brown-oil" &&
selectedUpholstery.id === "terracotta"
? [
    "/bar-ter (1).png",
    "/bar-ter (1).jpg",
    "/bar-ter (3).png",
    "/bar-ter (4).png",
    "/bar-ter (2).png"
  ]

: product.id === "supra-semi-bar" &&
selectedWood.id === "brown-oil" &&
selectedUpholstery.id === "mustard"
? [
    "/bar-gor (4).png",
    "/bar-gor (1).jpg",
    "/bar-gor (2).jpg",
    "/bar-gor (5).png",
    "/bar-gor (6).png",
    "/bar-gor (7).png"
  ]
  : product.id === "supra-semi-bar" &&
selectedWood.id === "brown-oil" &&
selectedUpholstery.id === "blue"
? [
    "/bar-sin (1).png",
    "/bar-sin (5).png",
    "/bar-sin (8).png",
    "/bar-sin (1).jpg",
    "/bar-sin (6).png",
    "/bar-sin (4).png"
  ]
  : product.id === "supra-semi-bar" &&
selectedWood.id === "brown-oil" &&
selectedUpholstery.id === "black"
? [
    "/bar-cher (1).png",
    "/bar-cher (1).jpg",
    "/bar-cher (2).jpg",
    "/bar-cher (5).png",
    "/bar-cher (6).png",
    "/bar-cher (7).png"
  ]
  : product.id === "supra-semi-bar" &&
selectedWood.id === "brown-oil" &&
selectedUpholstery.id === "brown"
? [
    "/bar-kor (2).png",
    "/bar-kor (1).png"
  ]
  
  : selectedWood.id === "brown-oil" && selectedUpholstery.id === "milky"
    ? [
      
        "/supra-mol.jpg",
        "/supra-mol-1.jpg",
        "/supra-mol-2.jpg",
        "/supra-mol-3.png",
        "/supra-mol-4.png",
      ]
      : product.id === "supra-foldable" &&
  selectedWood.id === "natural-oil" &&
  selectedUpholstery.id === "light-gray"
? [
    "/supra-ss-nm (1).jpg",
    "/supra-ss-nm (2).jpg",
    "/supra-ss-nm (3).jpg",
    "/supra-ss-nm (4).jpg",
    "/supra-ss-2.png"
  ]
      : selectedWood.id === "gray-oil" && selectedUpholstery.id === "milky"
? [
    "/supra-mol-cm.jpg",
    "/supra-mol-cm1.jpg",
    "/supra-mol-cm2.jpg",
    "/supra-mol-cm3.jpg",
    "/supra-mol-3.png",
    "/supra-mol-4.png",
]
: selectedWood.id === "gray-oil" && selectedUpholstery.id === "dark-beige"
? [
    "/supra-tb-cm.png",
    "/supra-tb(5).png",
    "/supra-tb(6).png",
  ]
      : selectedWood.id === "brown-oil" && selectedUpholstery.id === "mustard"
  ? [
      "/supra-gor.png",
      "/supra-gor-1.png",
      "/supra-gor-2.png",
    ]
    : selectedWood.id === "gray-oil" && selectedUpholstery.id === "brown"
? [
    "/supra-kor-1.png",
    "/supra-kor-4.png",
    "/supra-kor-5.png",
  ]
  : selectedWood.id === "gray-oil" && selectedUpholstery.id === "dark-gray"
? [
    "/supra-ser.png",
    "/supra-3.png",
    "/supra-4.png",
  ]
  : selectedWood.id === "gray-oil" && selectedUpholstery.id === "emerald"
? [
    "/supra-iz-cm.png",
    "/supra-izym-1.png",
    "/supra-izym-2.png",
  ]
  : selectedWood.id === "gray-oil" && selectedUpholstery.id === "terracotta"
? [
    "/supra-ter-cm.png",
    "/supra-ter-3.png",
    "/supra-ter-4.png",
  ]
  : selectedWood.id === "gray-oil" && selectedUpholstery.id === "mustard"
? [
    "/supra-gor-cm.png",
    "/supra-gor-1.png",
    "/supra-gor-2.png",
  ]
    : selectedWood.id === "brown-oil" && selectedUpholstery.id === "light-gray"
? [
    "/supra-ss.png",
    "/supra-ss-1.png",
    "/supra-ss-2.png",
    "/supra-ss-3.png",
  ]
  : selectedWood.id === "gray-oil" && selectedUpholstery.id === "light-gray"
? [
    "/supra-ss-cm.png",
    "/supra-ss-2.png",
    "/supra-ss-3.png",
  ]
       : selectedWood.id === "brown-oil" && selectedUpholstery.id === "brown"
    ? [
        "/supra-kor.jpg",
        "/supra-kor-1.jpg",
        "/supra-kor-2.jpg",
        "/supra-kor-3.jpg",
        "/supra-kor-4.png",
        "/supra-kor-5.png",
      ]
  : selectedWood.id === "brown-oil" && selectedUpholstery.id === "terracotta"
? [
  "/supra-ter.png",
  "/supra-ter-2.jpg",
  "/supra-ter-3.png",
  "/supra-ter-4.png",
]

: selectedWood.id === "brown-oil" && selectedUpholstery.id === "dark-gray"
? [
        "/supra.jpg",
        "/supra-1.jpg",
        "/supra-2.jpg",
        "/supra-3.png",
        "/supra-4.png",
      ]
      
    : [
        "/supra.jpg",
      ];
    const productImages =
  product.id === "round-table"
    ? product.images || [product.image]
    : product.id === "malina" && galleryPhotos?.[0]?.includes("supra")
      ? product.images || [product.image]
      : galleryPhotos || product.images || [product.image];
const [selectedPhoto, setSelectedPhoto] = useState(productImages[0]);
const selectedProductVariant = {
  ...product,
  id: `${product.id}-${selectedUpholstery.id}-${selectedWood.id}`,
  name: product.name,
  image: selectedPhoto,
  selectedUpholstery: selectedUpholstery.name,
  selectedWood: selectedWood.name,
};
useEffect(() => {
  setSelectedPhoto(productImages[0]);
}, [selectedWood.id, selectedUpholstery.id, product.id]);
  

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-stone-50 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl flex flex-col md:flex-row shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="md:w-1/2 p-6 bg-stone-100 flex flex-col gap-4">
          <img 
         src={selectedPhoto}
            alt={product.name} 
            className="w-full aspect-square object-cover rounded-lg shadow-inner"
          />
           <div className="grid grid-cols-5 gap-2">
  {productImages.map((photo, i) => (
  <button
    key={i}
    type="button"
    onClick={() => setSelectedPhoto(photo)}
    className="w-full aspect-square bg-white rounded-lg overflow-hidden"
  >
    <img
      src={photo}
      alt={product.name}
      className="w-full h-full object-contain"
    />
  </button>
))}
</div>
 </div>

        <div className="md:w-1/2 p-8 flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-serif text-stone-900">{product.name}</h2>
              <p className="text-xl text-stone-600 mt-2 font-medium">{product.price}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-stone-200 rounded-full transition-colors"><X size={24}/></button>
          </div>

          <p className="text-stone-600 leading-relaxed">{product.description}</p>


          <div className={product.id === 'round-table' ? 'hidden' : ''}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-500 mb-3">Обивка: {selectedUpholstery.name}</h4>
            <div className="flex flex-wrap gap-3">
          {(
  product.id === "malina"
    ? upholsteryOptions.filter(opt =>
        ["dark-beige", "milky", "dark-gray", "brown"].includes(opt.id)
      )
    : product.id === "supra-semi-bar"
    ? upholsteryOptions.filter(opt => opt.id !== "emerald")
    : product.id === "alba"
    ? upholsteryOptions.filter(opt =>
        ["light-gray", "dark-beige", "milky", "brown", "dark-gray"].includes(opt.id)
      )
    : product.id === "chaise-longue"
    ? upholsteryOptions.filter(opt =>
        ["dark-gray", "milky", "brown", "khaki"].includes(opt.id)
      )
    : product.id === "supra-foldable"
    ? upholsteryOptions.filter(opt =>
        !["blue", "black", "khaki"].includes(opt.id)
      )
    : upholsteryOptions

).map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedUpholstery(opt)}
                  className={cn(
                    "w-8 h-8 rounded-full border-2 transition-all",
                    selectedUpholstery.id === opt.id ? "border-stone-900 scale-110 shadow-md" : "border-transparent"
                  )}
                  style={{ backgroundColor: opt.color }}
                  title={opt.name}
                />
              ))}
            </div>
          </div>

          <div className={product.id === 'round-table' ? 'hidden' : ''}>
            <h4
  className={product.id === "chaise-longue" ? "hidden" : "text-sm font-semibold uppercase tracking-wider text-stone-500 mb-3"}
>
  Каркас: {selectedWood.name}
</h4>
           <div
  className={
    product.id === "chaise-longue"
      ? "hidden"
      : "flex flex-wrap gap-3"
  }
>
              {woodOptions.map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedWood(opt)}
                  className={cn(
                    "w-8 h-8 rounded-full border-2 transition-all",
                    selectedWood.id === opt.id ? "border-stone-900 scale-110 shadow-md" : "border-transparent"
                  )}
                  style={{ backgroundColor: opt.color }}
                  title={opt.name}
                />
              ))}
            </div>
          </div>

         <div className="grid grid-cols-2 gap-4 mt-4">
  <button
    onClick={() => onAddToCart(selectedProductVariant)}
    className="flex items-center justify-center gap-2 bg-stone-900 text-white py-4 px-6 rounded-full font-medium hover:bg-stone-800 transition-colors"
  >
    <ShoppingCart size={18} />
    В корзину
  </button>

  <button
    onClick={() => onToggleWishlist(selectedProductVariant)}
    className="flex items-center justify-center gap-2 border border-stone-300 py-4 px-6 rounded-full font-medium hover:bg-stone-200 transition-colors"
  >
    <Heart
      size={18}
      fill={isInWishlist(selectedProductVariant.id) ? "currentColor" : "none"}
    />
    {isInWishlist(selectedProductVariant.id) ? "В избранном" : "Избранное"}
  </button>
</div>

          <div className="border-t border-stone-200 pt-6 mt-4">
            <ul className="space-y-2 text-sm text-stone-600">
  
 {product.id !== "round-table" && (
  <li className="flex justify-between border-b border-stone-100 pb-1">
    <span>Материал сидения</span>
    <span className="text-stone-900">{product.specs.seatMaterial}</span>
  </li>
)}

  <li className="flex justify-between border-b border-stone-100 pb-1">
    <span>{product.id === "round-table" ? "Материал" : "Материал каркаса"}</span>
    <span className="text-stone-900">{product.specs.frameMaterial}</span>
  </li>

  {product.id !== "round-table" && (
  <li className="flex justify-between border-b border-stone-100 pb-1">
    <span>Материал обивки</span>
    <span className="text-stone-900">
      {product.specs.upholsteryMaterial || "Антивандальный велюр"}
    </span>
  </li>
)}

  <li className="flex justify-between border-b border-stone-100 pb-1">
    <span>Покрытие</span>
    <span className="text-stone-900">{product.specs.coating}</span>
  </li>
  <li className="flex justify-between border-b border-stone-100 pb-1">
  <span>Размеры</span>
  <span className="text-stone-900">{product.specs.dimensions}</span>
</li>

{product.id !== "round-table" &&
 product.id !== "alba" &&
 product.id !== "malina" &&
 product.dimensions?.folded && (
  <li className="flex justify-between border-b border-stone-100 pb-1">
    <span>Размеры в сложенном виде</span>
    <span className="text-stone-900">{product.dimensions.folded}</span>
  </li>
)}

<li className="flex justify-between border-b border-stone-100 pb-1">
  <span>Вес</span>
  <span className="text-stone-900">{product.specs.weight}</span>
</li>


               {/* Placeholders for future specs */}
               <li className="h-4"></li>
               <li className="h-4"></li>
             </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 text-center md:text-left">
    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">{title}</h2>
    {subtitle && <p className="text-stone-500 max-w-xl text-lg">{subtitle}</p>}
  </div>
);

// --- Main App ---

export default function App() {
  
  const [cartItems, setCartItems] = useState<any[]>(() => {
  const saved = localStorage.getItem("cartItems");
  return saved ? JSON.parse(saved) : [];
});

const [wishlistItems, setWishlistItems] = useState<any[]>(() => {
  const saved = localStorage.getItem("wishlistItems");
  return saved ? JSON.parse(saved) : [];
});

const [isCartOpen, setIsCartOpen] = useState(false);
const [isWishlistOpen, setIsWishlistOpen] = useState(false);
const [consultSuccessOpen, setConsultSuccessOpen] = useState(false);
const [customerName, setCustomerName] = useState("");
const [customerPhone, setCustomerPhone] = useState("");

const [consultName, setConsultName] = useState("");
const [consultPhone, setConsultPhone] = useState("");
const [isConsultConsentAccepted, setIsConsultConsentAccepted] = useState(false);
const [isPersonalDataAccepted, setIsPersonalDataAccepted] = useState(false);
const [orderSuccessOpen, setOrderSuccessOpen] = useState(false);

const [loading, setLoading] = useState(true);
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems]);

useEffect(() => {
  localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
}, [wishlistItems]);
const addToCart = (product: Product) => {
  setCartItems((prev) => {
    const exists = prev.find((item) => item.id === product.id);

    if (exists) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });

  setIsCartOpen(true);
};

const toggleWishlist = (product: Product) => {
  setWishlistItems((prev) => {
    const exists = prev.find((item) => item.id === product.id);

    if (exists) {
      return prev.filter((item) => item.id !== product.id);
    }

    return [...prev, product];
  });
};
const removeFromWishlist = (productId: string) => {
  setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
};

const moveWishlistToCart = (product: Product) => {
  addToCart(product);
  removeFromWishlist(product.id);
};
const removeFromCart = (productId: string) => {
  setCartItems((prev) => prev.filter((item) => item.id !== productId));
};

const increaseCartQuantity = (productId: string) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === productId
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    )
  );
};

const decreaseCartQuantity = (productId: string) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: Math.max((item.quantity || 1) - 1, 1),
          }
        : item
    )
  );
};
const getCartTotal = () => {
  return cartItems.reduce((sum, item) => {
    const price = Number(String(item.price).replace(/\D/g, ""));
    return sum + price * (item.quantity || 1);
  }, 0);
};

const handleCheckout = async () => {
  if (!customerName || !customerPhone || !isPersonalDataAccepted) {
    alert("Заполните имя, телефон и подтвердите согласие.");
    return;
  }

  if (cartItems.length === 0) {
    alert("Корзина пустая.");
    return;
  }

  const orderText = cartItems
    .map(
      (item) =>
        `${item.name}
Обивка: ${item.selectedUpholstery}
Каркас: ${item.selectedWood}
Количество: ${item.quantity || 1}
Цена: ${item.price}`
    )
    .join("\n\n");

  try {
  await fetch("http://localhost:3001/send-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: customerName,
      phone: customerPhone,
      items: cartItems,
      total: getCartTotal(),
    }),
  });
} catch (err) {
  alert("Ошибка отправки заказа");
  return;
}

 setCartItems([]);
setCustomerName("");
setCustomerPhone("");
setIsPersonalDataAccepted(false);

setIsCartOpen(false);
setSelectedProduct(null);
setOrderSuccessOpen(true);
};
const handleConsultation = async () => {
  if (!consultName || !consultPhone || !isConsultConsentAccepted) {
    alert("Заполните имя, телефон и подтвердите согласие.");
    return;
  }

  try {
    await fetch("http://localhost:3001/send-consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: consultName,
        phone: consultPhone,
      }),
    });

    setConsultName("");
setConsultPhone("");
setIsConsultConsentAccepted(false);

setConsultSuccessOpen(true);
  } catch (err) {
    alert("Ошибка отправки заявки.");
  }
};
const isInWishlist = (productId: string) => {
  return wishlistItems.some((item) => item.id === productId);
};
  if (loading) {
    return (
      <div className="h-screen w-full bg-stone-50 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="text-center"
        >
          <h1 className="text-6xl font-serif tracking-tighter text-stone-900 mb-4">ТРЭС</h1>
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: '100%' }} 
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-[2px] bg-stone-900 mx-auto"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-stone-200 selection:text-stone-900">
    <Navbar
  onCartClick={() => setIsCartOpen(true)}
  onWishlistClick={() => setIsWishlistOpen(true)}
 cartCount={cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)}
  wishlistCount={wishlistItems.length}
/>

      {/* Hero Section */}
      <section className="relative min-h-[760px] overflow-hidden pt-36 md:h-screen md:pt-0 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/main-photo.jpg"
            alt="Interior"
            className="h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/28 to-black/58 md:bg-black/35 md:backdrop-brightness-80" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-5 text-white md:px-6 md:text-center">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="max-w-[620px] pt-0 md:mx-auto md:mt-20 md:max-w-6xl"
          >
           {/* Заголовок для мобильной версии */}
<h1
  className="
    md:hidden
    font-serif
    text-[24px]
    font-light
    leading-[1.08]
    tracking-[-0.02em]
    text-white
    max-w-[280px]
  "
>
  Мебель ручной
  <br />
  работы для дома,
  <br />
  кафе и террас
</h1>

{/* Заголовок для компьютера */}
<h1
  className="
    hidden
    md:block
    font-serif
    text-4xl
    lg:text-[64px]
    leading-[0.95]
    tracking-[-0.04em]
    text-white
  "
>
  Мебель ручной работы для дома,
  <br />
  кафе и террас
</h1>

            

            <p
  className="
    mt-5
    max-w-[280px]
    text-[14px]
    leading-7
    text-white/90
    md:hidden
  "
>
  Создаём стулья, столы и шезлонги
  <br />
  из берёзового шпона, качественных тканей
  <br />
  и долговечных покрытий.
</p>

<p
  className="
    hidden
    md:block
    mt-5
    md:mx-auto
    md:max-w-2xl
    text-[15px]
    md:text-lg
    leading-7
    text-white/86
  "
>
  Создаём стулья, столы и шезлонги из берёзового шпона, качественных тканей и долговечных покрытий.
</p>
          </motion.div>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:grid md:mt-10 md:grid-cols-4 md:gap-10 md:text-center"
          >
            <div className="rounded-[26px] border border-white/15 bg-white/13 p-4 backdrop-blur-xl md:flex md:flex-col md:items-center md:bg-transparent md:border-0 md:backdrop-blur-none">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#f6eadb] shadow-md md:h-20 md:w-20 md:mb-5">
                <HandHeart className="h-6 w-6 text-stone-700 md:h-10 md:w-10" strokeWidth={1.8} />
              </div>
              <h3 className="text-[15px] font-semibold leading-tight text-white md:text-xl">Собственное производство</h3>
              <p className="mt-2 text-[12px] leading-5 text-white/72 md:text-base md:leading-8">Изготавливаем мебель вручную в Чебоксарах.</p>
            </div>

            <div className="rounded-[26px] border border-white/15 bg-white/13 p-4 backdrop-blur-xl md:flex md:flex-col md:items-center md:bg-transparent md:border-0 md:backdrop-blur-none">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#f6eadb] shadow-md md:h-20 md:w-20 md:mb-5">
                <ShieldCheck className="h-6 w-6 text-stone-700 md:h-10 md:w-10" strokeWidth={1.8} />
              </div>
              <h3 className="text-[15px] font-semibold leading-tight text-white md:text-xl">Надёжные материалы</h3>
              <p className="mt-2 text-[12px] leading-5 text-white/72 md:text-base md:leading-8">Берёзовый шпон, антивандальная ткань, масло Borma.</p>
            </div>

            <div className="rounded-[26px] border border-white/15 bg-white/13 p-4 backdrop-blur-xl md:flex md:flex-col md:items-center md:bg-transparent md:border-0 md:backdrop-blur-none">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#f6eadb] shadow-md md:h-20 md:w-20 md:mb-5">
                <Leaf className="h-6 w-6 text-stone-700 md:h-10 md:w-10" strokeWidth={1.8} />
              </div>
              <h3 className="text-[15px] font-semibold leading-tight text-white md:text-xl">Комфорт в деталях</h3>
              <p className="mt-2 text-[12px] leading-5 text-white/72 md:text-base md:leading-8">Продумываем посадку, форму и ткань на каждый день.</p>
            </div>

            <div className="rounded-[26px] border border-white/15 bg-white/13 p-4 backdrop-blur-xl md:flex md:flex-col md:items-center md:bg-transparent md:border-0 md:backdrop-blur-none">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#f6eadb] shadow-md md:h-20 md:w-20 md:mb-5">
                <Truck className="h-6 w-6 text-stone-700 md:h-10 md:w-10" strokeWidth={1.8} />
              </div>
              <h3 className="text-[15px] font-semibold leading-tight text-white md:text-xl">Доставка по России</h3>
              <p className="mt-2 text-[12px] leading-5 text-white/72 md:text-base md:leading-8">Бережно упаковываем и отправляем в разные города.</p>
            </div>
          </motion.div>

          <motion.a
            href="#catalog"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Смотреть каталог
          </motion.a>
        </div>
      </section>
<section className="bg-[#f5efe6] px-5 py-12 md:hidden">
  <section className="bg-[#f5efe6] px-5 py-12 md:hidden">
  <div className="space-y-7">

    <div className="flex gap-5 border-b border-stone-300/50 pb-7">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#eadcc8]">
        <HandHeart className="h-8 w-8 text-stone-800" strokeWidth={1.7} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-stone-900">
          Собственное производство
        </h3>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          Изготавливаем мебель вручную на собственном производстве в Чебоксарах.
        </p>
      </div>
    </div>

    <div className="flex gap-5 border-b border-stone-300/50 pb-7">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#eadcc8]">
        <ShieldCheck className="h-8 w-8 text-stone-800" strokeWidth={1.7} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-stone-900">
          Надёжные материалы
        </h3>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          Берёзовый шпон, антивандальная ткань и покрытие маслом Borma.
        </p>
      </div>
    </div>

    <div className="flex gap-5 border-b border-stone-300/50 pb-7">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#eadcc8]">
        <Leaf className="h-8 w-8 text-stone-800" strokeWidth={1.7} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-stone-900">
          Комфорт в деталях
        </h3>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          Продуманная посадка, эргономика и качественная отделка каждой модели.
        </p>
      </div>
    </div>

    <div className="flex gap-5">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#eadcc8]">
        <Truck className="h-8 w-8 text-stone-800" strokeWidth={1.7} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-stone-900">
          Доставка по России
        </h3>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          Надёжно упаковываем и отправляем мебель по всей России.
        </p>
      </div>
    </div>

  </div>
</section>
</section>
 {/* About Section */}
<section id="about" className="about-brand">
  <div className="about-card">
    <div className="about-stats">
      <div className="stat-item">
        <h3>120 <span>кг</span></h3>
        <p>Максимальная<br />нагрузка</p>
      </div>

      <div className="stat-item">
        <h3>100%</h3>
        <p>Натуральный<br />берёзовый шпон</p>
      </div>

      <div className="stat-item">
        <h3>1 <span>год</span></h3>
        <p>Гарантия<br />на мебель</p>
      </div>

      <div className="stat-item">
        <h3>По всей РФ</h3>
        <p>Доставка транспортными<br />компаниями</p>
      </div>
    </div>

    <div className="about-content">
      <h2>О бренде ТРЭС</h2>

      <p>
        Мы создаём мебель для домов, кафе, ресторанов и коммерческих пространств.
        Каждое изделие сочетает современный дизайн, практичность и долговечность.
      </p>

      <div className="about-images">
        <img src="/glavnoy.jpg" alt="Мебель SEL I RAD" className="about-img-big" />
        <img src="/glavnoy-2.jpg" alt="Интерьер SEL I RAD" className="about-img-small" />
      </div>
    </div>
  </div>
</section>

      {/* Catalog Section */}
      <section id="catalog" className="py-24 bg-stone-100 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Каталог моделей" subtitle="Выберите идеальное решение для вашего интерьера из нашей коллекции." />
          <div className="grid md:grid-cols-3 gap-8">
            {products.map(product => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative h-80 overflow-hidden">
                 <img
  src={product.image}
  alt={product.name}
  className="w-full h-full object-contain bg-white"
/>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-2">{product.name}</h3>
                  <p className="text-stone-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-2 text-stone-900 font-bold uppercase text-xs tracking-widest hover:gap-4 transition-all"
                  >
                    Узнать подробнее <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section id="production" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="materials-gallery">
  <img src="/izgotov (1).jpg" alt="Производство мебели" className="material-img img-1" />
  <img src="/izgotov (2).jpg" alt="Материалы" className="material-img img-2" />
  <img src="/izgotov (3).jpg" alt="Ткань и обивка" className="material-img img-3" />
  <img src="/izgotov (4).jpg" alt="Стул SEL I RAD" className="material-img img-4" />
</div>
          <div className="md:w-1/2 order-1 md:order-2">
            <SectionHeading title="Из чего изготовлена наша мебель" />
            <div className="space-y-6 text-stone-600">
              <p>
  Мы используем только проверенные материалы и качественную фурнитуру.
  Каждое изделие создаётся на собственном производстве и проходит контроль качества перед отправкой.
</p>
               <div className="space-y-4">
                <div className="flex gap-4">
  <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center shrink-0">1</div>
  <div>
    <h4 className="font-bold text-stone-900">Берёзовый шпон</h4>
    <p>20 слоёв натурального шпона для прочности конструкции и красивой текстуры.</p>
  </div>
</div>

<div className="flex gap-4">
  <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center shrink-0">2</div>
  <div>
    <h4 className="font-bold text-stone-900">Премиальные масла</h4>
    <p>Масло Tikkurila защищает древесину и подчёркивает её естественную красоту.</p>
  </div>
</div>

<div className="flex gap-4">
  <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center shrink-0">3</div>
  <div>
    <h4 className="font-bold text-stone-900">Износостойкие ткани</h4>
    <p>Ткани проходят строгий отбор и подходят для ежедневного использования.</p>
  </div>
</div>

<div className="flex gap-4">
  <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center shrink-0">4</div>
  <div>
    <h4 className="font-bold text-stone-900">Контроль качества</h4>
    <p>Каждое изделие проходит 3 этапа проверки перед отправкой клиенту.</p>
  </div>
</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-stone-900 text-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
  Нам доверяют
</h2>

<p className="text-stone-400 text-center mb-10">
  Честные отзывы и фотографии наших покупателей с Wildberries, Ozon и Avito.
</p>
          <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-stone-800/50 p-8 rounded-3xl border border-stone-700">
  <div className="flex gap-1 mb-4 text-amber-400">
    {Array(5).fill(0).map((_, j) => <span key={j}>★</span>)}
  </div>

  <p className="text-amber-400 text-xl font-semibold mb-4">
    5.0 Wildberries
  </p>

  <p className="font-bold mb-3">Вероника</p>

  <p className="text-stone-300 mb-6">
    Вау! Спасибо! Очень удобно сидеть.
  </p>

  <img
    src="/отзыв вб.png"
    alt="Отзыв Wildberries"
    className="w-full h-[500px] object-cover rounded-2xl"
  />

  <a
    href="https://www.wildberries.ru/catalog/687279272/detail.aspx"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white underline hover:text-amber-400"
  >
    
  </a>
</div>

<div className="bg-stone-800/50 p-8 rounded-3xl border border-stone-700">
  <div className="flex gap-1 mb-4 text-amber-400">
    {Array(5).fill(0).map((_, j) => <span key={j}>★</span>)}
  </div>

  <p className="text-amber-400 text-xl font-semibold mb-4">
    5.0 Ozon
  </p>

  <p className="font-bold mb-3">Марина Н.</p>

  <p className="text-stone-300 mb-6">
    Очень довольны покупкой! Стул удобный, устойчивый и выглядит намного дороже своей цены.
    Легко складывается, не занимает много места. Качество материалов отличное,
    сидеть комфортно даже долгое время. Рекомендуем! 😊
  </p>

  <img
  src="/отзыв озон.png"
  alt="Отзыв Ozon"
  className="w-full rounded-2xl mt-4 mb-4"
/>

<a
  href="https://www.ozon.ru/product/stulya-dlya-kuhni-2-sht-4321570559/?reviewsVariantMode=2"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white underline hover:text-amber-400"
>
  
</a>
</div>
<div className="bg-stone-800/50 p-8 rounded-3xl border border-stone-700">
  <div className="flex gap-1 mb-4 text-amber-400">
    {Array(5).fill(0).map((_, j) => (
      <span key={j}>★</span>
    ))}
  </div>

  <p className="text-amber-400 text-xl font-semibold mb-4">
    5.0 Avito
  </p>

  <p className="font-bold mb-3">
    Оксана
  </p>

  <p className="text-stone-300 mb-6">
    Осталась очень довольна покупкой! Продавец — ответственный и пунктуальный:
    всё привезли точно в оговоренный срок. Упаковка на высшем уровне —
    стулья доехали в идеальном состоянии. Качество самих стульев — огонь:
    выглядят дорого, сидеть удобно, сборка без нареканий.
  </p>

<img
 src="/отзыв авито.png"
 alt="Отзыв Avito"
 className="w-full h-[420px] object-cover rounded-2xl"
/>

<a
href="https://www.avito.ru/profile/rating"
target="_blank"
rel="noopener noreferrer"
className="text-white underline hover:text-amber-400"

>





  </a>
</div>

          </div>
          
        </div>
      </section>

      {/* Marketplace Links */}
     <section className="py-16 bg-stone-50 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-10">
      Наша мебель на маркетплейсах!
    </h2>

    <div className="border border-teal-700 rounded-3xl p-10 bg-white">
      <div className="flex flex-wrap items-center justify-center gap-16">

        <a
          href="https://www.wildberries.ru/brands/312265617-trees"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/wb-logo.jpg"
            alt="Wildberries"
            className="h-20 object-contain"
          />
        </a>

        <a
          href="https://www.ozon.ru/seller/trees-3935150/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/ozon-logo.png"
            alt="Ozon"
            className="h-20 object-contain"
          />
        </a>

        <a
          href="https://www.avito.ru/profile/extended"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/avito-logo.png"
            alt="Avito"
            className="h-20 object-contain"
          />
        </a>

      </div>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
        <SectionHeading title="Часто задаваемые вопросы" />
        <div className="space-y-4">
          {[
            { q: "Как оформить заказ?", a: "Вы можете оформить заказ через корзину на нашем сайте, либо связавшись с нашим менеджером в Telegram или ВКонтакте. Мы обсудим все детали и поможем с выбором комплектации." },
            { q: "Какими способами можно оплатить заказ?", a: "Мы принимаем оплату банковскими картами, через СБП, а также по счету для юридических лиц." },
            { q: "Как происходит доставка?", a: "Доставка осуществляется транспортными компаниями по всей России. Каждое изделие бережно упаковывается, чтобы доехать до вас в идеальном состоянии." },
            { q: "Можно ли оформить возврат товара?", a: "Да, вы можете вернуть товар надлежащего качества в течение 14 дней, если он не был в эксплуатации и сохранил свой товарный вид." },
            { q: "Как ухаживать за мебелью, чтобы она служила долго?", a: "Мы рекомендуем использовать мягкую ткань для удаления пыли. Избегайте прямых солнечных лучей и высокой влажности. Раз в год покрытие маслом можно обновлять." }
          ].map((item, idx) => (
            <details key={idx} className="group border-b border-stone-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none py-4">
                <span className="text-lg font-medium">{item.q}</span>
                <ChevronDown className="group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-stone-600 mt-2 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-6">Остались вопросы?</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Свяжитесь с нами — наш менеджер подробно проконсультирует, ответит на вопросы и поможет выбрать подходящую мебель для вашего интерьера.
            </p>
            <div className="flex gap-4">
          <div className="flex gap-4">
  <a
    href="https://web.max.ru/147793786"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all shadow-sm"
  >
    <img src="/maxlogo.png" alt="MAX" className="w-5 h-5" />
  </a>

  <a
    href="https://vk.com/im?sel=-230120705"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all shadow-sm"
  >
   <img src="/vklogo.png" alt="VK" className="w-5 h-5 object-contain" />
  </a>
</div>
            </div>
          </div>
          <form className="bg-white p-10 rounded-3xl shadow-sm space-y-6" onSubmit={e => e.preventDefault()}>
  <div>
    <label className="block text-sm font-medium mb-2 text-stone-500 uppercase tracking-wider">
      Имя
    </label>
    <input
      type="text"
      value={consultName}
onChange={(e) => setConsultName(e.target.value)}
      className="w-full bg-stone-50 border-stone-200 border rounded-xl px-4 py-3 outline-none focus:border-stone-900 transition-colors"
      placeholder="Ваше имя"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-2 text-stone-500 uppercase tracking-wider">
      Номер телефона
    </label>
    <input
      type="tel"
      value={consultPhone}
onChange={(e) => setConsultPhone(e.target.value)}
      className="w-full bg-stone-50 border-stone-200 border rounded-xl px-4 py-3 outline-none focus:border-stone-900 transition-colors"
      placeholder="+7 (___) ___-__-__"
    />
  </div>

  <div className="flex items-start gap-3">
    <input
  type="checkbox"
  id="consent"
  checked={isConsultConsentAccepted}
  onChange={(e) => setIsConsultConsentAccepted(e.target.checked)}
  className="mt-1 accent-stone-900"
/>
    <label htmlFor="consent" className="text-sm text-stone-500">
      Соглашаюсь на обработку персональных данных
    </label>
  </div>

  <button
  onClick={handleConsultation}
  disabled={
    !consultName ||
    !consultPhone ||
    !isConsultConsentAccepted
  }
  className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-stone-800 transition disabled:bg-stone-300 disabled:cursor-not-allowed"
>
    Получить консультацию
  </button>

  <div className="mt-6 p-5 bg-stone-50 rounded-2xl border border-stone-200">
    <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-4">
      Контакты
    </p>

    <div className="space-y-2">
      <p className="text-xl font-serif text-stone-900">
        +7 917 665-90-81
      </p>

      <p className="text-base text-stone-600">
        supramebel@mail.ru
      </p>
    </div>

    <div className="mt-5 pt-4 border-t border-stone-200">
      <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-1">
        Работаем
      </p>
      <p className="text-base text-stone-800">
        с 9:00 до 19:00
      </p>
    </div>

    <div className="flex gap-3 pt-5">
      <a
        href="https://web.max.ru/-75866389120388"
target="_blank"
rel="noreferrer"
        className="w-11 h-11 rounded-xl border border-stone-300 bg-white flex items-center justify-center hover:bg-stone-900 transition-all"
      >
        <img src="/maxlogo.png" alt="MAX" className="w-6 h-6 object-contain" />
      </a>

      <a
        href="https://t.me/mebeltrees"
target="_blank"
rel="noreferrer"
        className="w-11 h-11 rounded-xl border border-stone-300 bg-white flex items-center justify-center hover:bg-stone-900 transition-all"
      >
        <img src="/tglogo.png" alt="Telegram" className="w-8 h-8 object-contain" />
      </a>

      <a
        href="https://vk.com/trees.mebel"
target="_blank"
rel="noreferrer"
        className="w-11 h-11 rounded-xl border border-stone-300 bg-white flex items-center justify-center hover:bg-stone-900 transition-all"
      >
        <img src="/vklogo.png" alt="VK" className="w-6 h-6 object-contain" />
      </a>
    </div>
  </div>
</form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-4xl font-serif text-white">ТРЭС</h3>
              <p className="text-sm leading-relaxed">
  Производство мебели в Чебоксарах
</p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Навигация</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">О бренде</a></li>
                <li><a href="#catalog" className="hover:text-white transition-colors">Каталог</a></li>
                <li><a href="#production" className="hover:text-white transition-colors">Производство</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Контакты</h4>
              <ul className="space-y-3 text-sm">
               <div className="space-y-3">
  <p className="text-lg font-medium">
    +7 917 665-90-81
  </p>

  <p>
    supramebel@mail.ru
  </p>

  <p>
    г. Чебоксары, ул. Калинина, 68
  </p>
</div>
              </ul>
            </div>
           <div>
  <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">
    Маркетплейсы
  </h4>

  <div className="flex items-center gap-4">
    <a
      href="https://www.wildberries.ru/brands/312265617-trees/stulya"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/вб.png"
        alt="Wildberries"
        className="h-10 w-auto transition-transform hover:scale-105"
      />
    </a>

    <a
      href="https://www.ozon.ru/seller/trees-3935150/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/озон.png"
        alt="Ozon"
        className="h-10 w-auto transition-transform hover:scale-105"
      />
    </a>

    <a
      href="https://www.avito.ru/profile/extended"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/авито.png"
        alt="Avito"
        className="h-5 w-auto self-center transition-transform hover:scale-105"
      />
    </a>
  </div>
</div>
          </div>
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© ТРЭС. Все права защищены.</p>
            <div className="flex gap-6 items-center">
  <a
    href="https://t.me/mebeltrees"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/tglogo.png" alt="Telegram" className="w-10 h-10" />
  </a>

  <a
    href="https://vk.com/trees.mebel"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/vklogo.png" alt="VK" className="w-6 h-6" />
  </a>

  <a
    href="https://web.max.ru/-75866389120388"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/maxlogo.png" alt="Max" className="w-6 h-6" />
  </a>
</div>
            <div className="space-y-3 text-sm">
  <a
    href="/privacy.html"
    target="_blank"
    className="block hover:text-white transition-colors"
  >
    Политика конфиденциальности
  </a>

  <a
    href="/consent.html"
    target="_blank"
    className="block hover:text-white transition-colors"
  >
    Согласие на обработку персональных данных
  </a>

  <a
    href="/agreement.html"
    target="_blank"
    className="block hover:text-white transition-colors"
  >
    Пользовательское соглашение
  </a>
</div>
          </div>
        </div>
      </footer>
      {isCartOpen && (
  <div className="fixed inset-0 z-[999] bg-black/40 flex justify-end">
    <div className="w-full max-w-md h-full bg-white p-6 overflow-y-auto">
      <button
        onClick={() => setIsCartOpen(false)}
        className="mb-6 text-sm underline"
      >
        Закрыть
      </button>

      <h2 className="text-3xl font-serif mb-6">Корзина</h2>

      {cartItems.length === 0 ? (
        <p className="text-stone-500">Корзина пока пустая.</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl bg-stone-100"
                />

                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-stone-500">{item.price}</p>

                  <div className="text-xs text-stone-500 mt-1">
                    <div>Обивка: {item.selectedUpholstery}</div>
                    <div>Каркас: {item.selectedWood}</div>
                  </div>
<div className="flex items-center gap-3 mt-3">
  <button
    onClick={() => decreaseCartQuantity(item.id)}
    className="w-8 h-8 rounded-full border border-stone-300 hover:bg-stone-100"
  >
    −
  </button>

  <span className="text-sm min-w-4 text-center">
    {item.quantity || 1}
  </span>

  <button
    onClick={() => increaseCartQuantity(item.id)}
    className="w-8 h-8 rounded-full border border-stone-300 hover:bg-stone-100"
  >
    +
  </button>
</div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-3 px-3 py-2 border border-stone-300 text-xs rounded-full hover:bg-stone-100"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-5 space-y-4">
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Ваше имя"
              className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-stone-900"
            />

            <input
              type="tel"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder="Телефон"
              className="w-full border border-stone-300 rounded-xl px-4 py-3 outline-none focus:border-stone-900"
            />

            <label className="flex gap-3 text-xs text-stone-500 leading-snug">
              <input
                type="checkbox"
                checked={isPersonalDataAccepted}
                onChange={(e) => setIsPersonalDataAccepted(e.target.checked)}
                className="mt-1"
              />
              <span>Я согласен(а) на обработку персональных данных</span>
            </label>

            <button
  onClick={handleCheckout}
  disabled={!customerName || !customerPhone || !isPersonalDataAccepted}
  className="w-full bg-stone-900 text-white py-4 rounded-full font-medium hover:bg-stone-700 disabled:bg-stone-300 disabled:cursor-not-allowed"
>
  Оформить заказ
</button>
          </div>
        </>
      )}
    </div>
  </div>
)}
{isWishlistOpen && (
  <div className="fixed inset-0 z-[999] bg-black/40 flex justify-end">
    <div className="w-full max-w-md h-full bg-white p-6 overflow-y-auto">
      <button
        onClick={() => setIsWishlistOpen(false)}
        className="mb-6 text-sm underline"
      >
        Закрыть
      </button>

      <h2 className="text-3xl font-serif mb-6">Избранное</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-stone-500">В избранном пока ничего нет.</p>
      ) : (
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            
            <div key={item.id} className="flex gap-4 border-b pb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-xl bg-stone-100"
              />

             <div>
  <h3 className="font-medium">{item.name}</h3>

  <p className="text-stone-500">{item.price}</p>

  <div className="text-xs text-stone-500 mt-1">
    <div>Обивка: {item.selectedUpholstery}</div>
    <div>Каркас: {item.selectedWood}</div>
  </div>

  <div className="flex gap-2 mt-3">
  <button
    onClick={() => moveWishlistToCart(item)}
    className="px-3 py-2 bg-stone-900 text-white text-xs rounded-full hover:bg-stone-700"
  >
    В корзину
  </button>

  <button
    onClick={() => removeFromWishlist(item.id)}
    className="px-3 py-2 border border-stone-300 text-xs rounded-full hover:bg-stone-100"
  >
    Удалить
  </button>
</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
)}
{orderSuccessOpen && (
  
  <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4">
    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center">

      <img
        src="/трэс.png"
        alt="ТРЭС"
        className="w-20 h-20 mx-auto mb-5 object-contain"
      />

      <div className="w-20 h-20 rounded-full bg-[#F7F0E8] flex items-center justify-center mx-auto mb-6">
        <span className="text-4xl text-[#B88746]">✓</span>
      </div>

      <h2 className="text-3xl font-serif text-stone-900 mb-4">
        Заявка успешно отправлена!
      </h2>

      <p className="text-stone-600 leading-7 mb-6">
        Спасибо за ваш заказ.
        <br /><br />
        Наш менеджер скоро свяжется с вами
        по телефону для подтверждения заказа,
        уточнения деталей и согласования доставки.
      </p>

      <div className="border-t border-stone-200 pt-5 text-sm text-stone-500 space-y-2 mb-8">
        <div>✓ Собственное производство</div>
        <div>✓ Гарантия 1 год</div>
        <div>✓ Доставка по всей России</div>
      </div>

      <button
        onClick={() => setOrderSuccessOpen(false)}
        className="w-full bg-stone-900 text-white py-4 rounded-full font-medium hover:bg-stone-700 transition"
      >
        Отлично
      </button>

    </div>
  </div>
)}
{consultSuccessOpen && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4">
    <div className="w-full max-w-md rounded-[28px] bg-white p-8 text-center shadow-2xl">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eadcc8] text-3xl">
        ✓
      </div>

      <h2 className="font-serif text-3xl text-stone-900">
        Заявка отправлена
      </h2>

      <p className="mt-4 text-base leading-7 text-stone-600">
        Спасибо! Менеджер ТРЭС скоро свяжется с вами
        и поможет с выбором мебели.
      </p>

      <button
        onClick={() => setConsultSuccessOpen(false)}
        className="mt-7 w-full rounded-full bg-stone-900 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-stone-700 transition"
      >
        Отлично
      </button>
    </div>
  </div>
)}


      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
  product={selectedProduct}
  onClose={() => setSelectedProduct(null)}
  onAddToCart={addToCart}
  onToggleWishlist={toggleWishlist}
  isInWishlist={isInWishlist}
/>
        )}
      </AnimatePresence>
    </div>
  );
}
