import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { SiteContainer } from "@/components/layout/SectionContainer";
import SectionTitle from "@/components/layout/SectionTitle";

type Product = {
  name: string;
  origPrice: string;
  price: string;
  img: string;
  badge?: string;
  rating?: number;
};

const products: Product[] = [
  {
    name: "Shutter-Bird: Issue #1",
    origPrice: "$9.99",
    price: "$7.99",
    img: "/assets/comics/comic-1.png",
    badge: "New",
    rating: 5,
  },
  {
    name: "Afriwood Hero Hoodie",
    origPrice: "$39.99",
    price: "$35.99",
    img: "/assets/products/product-1.png",
    badge: "New",
    rating: 5,
  },
  {
    name: "Zazuu Kicks",
    origPrice: "$39.99",
    price: "$35.99",
    img: "/assets/products/product-2.png",
    badge: "New",
    rating: 5,
  },
  {
    name: "Afriwood Universe Poster",
    origPrice: "$39.99",
    price: "$35.99",
    img: "/assets/products/product-3.png",
    badge: "New",
    rating: 5,
  },
];

function ProductRating({ count = 5 }: { count?: number }) {
  return (
    <div className="shop-card__rating" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`shop-card__star ${i < count ? "shop-card__star--filled" : "shop-card__star--empty"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ShopCard({ product }: { product: Product }) {
  return (
    <Link href="/store" className="shop-card group">
      <div className="shop-card__media">
        <span className="shop-card__wishlist" aria-hidden>
          <Heart size={16} />
        </span>
        {product.badge ? <span className="shop-card__badge">{product.badge}</span> : null}
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="shop-card__image"
          sizes="(max-width: 1023px) 45vw, 260px"
        />
      </div>
      <div className="shop-card__body">
        <h3 className="shop-card__title">{product.name}</h3>
        <div className="shop-card__prices">
          <span className="shop-card__price-original">{product.origPrice}</span>
          <span className="shop-card__price-sale">{product.price}</span>
        </div>
        <ProductRating count={product.rating ?? 5} />
      </div>
    </Link>
  );
}

export default function ShopPreview() {
  return (
    <section className="shop-section" aria-label="Afriwood Official Shop">
      <SiteContainer>
        <SectionTitle subtitle="Gear up with official comics, merch, and collectibles.">
          Afriwood Official Shop
        </SectionTitle>

        <ul className="shop-grid list-none">
          {products.map((product) => (
            <li key={product.name} className="min-w-0">
              <ShopCard product={product} />
            </li>
          ))}
        </ul>

        <div className="shop-cta-wrap">
          <Link href="/store" className="shop-cta">
            Visit Shop
          </Link>
        </div>
      </SiteContainer>
    </section>
  );
}
