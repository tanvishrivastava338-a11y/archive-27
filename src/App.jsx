import { useState } from "react"
import { motion } from "motion/react"
import archiveCinema from "./assets/archive-cinema.jpg"
import archiveLetter from "./assets/archive-letter.jpg"
import archiveTelephone from "./assets/archive-telephone.jpg"
import archiveHouse from "./assets/archive-house.jpg"
import archiveSunday from "./assets/archive-sunday.jpg"
import archivePhotograph from "./assets/archive-photograph.jpg"
import archivePlatform from "./assets/archive-platform.jpg"

function App() {
  const [selectedObject, setSelectedObject] = useState(null)
const [cart, setCart] = useState([])
const [showCart, setShowCart] = useState(false)
const [showCheckout, setShowCheckout] = useState(false)

  const archiveObjects = {
  cinema: {
    number: "OBJECT 001",
    location: "PARIS · 1968",
    title: "The Last Cinema",
    image: archiveCinema,
    alt: "The Last Cinema, Paris, 1968",

    price: 18500,
    currency: "₹",
    stock: 1,
    availability: "IN STOCK",

    category: "PLACE · MEMORY · 1968",
    type: "ARCHIVAL OBJECT",
    material: "PHOTOGRAPHIC PRINT",
    dimensions: "24 × 36 IN",
    edition: "01 / 10",
    condition: "ARCHIVAL CONDITION",

    description:
      "A cinema that disappeared before anyone thought to photograph it.",

    story:
      "The cinema stood on a narrow Parisian street for almost four decades.",

    storyTwo:
      "Its final screening took place in the summer of 1968. The building was demolished soon after. No official photograph of its final night exists.",

    year: "1968",
    status: "LOST",

    shipping: "Ships within 3–5 business days",
    returns: "14-day return window",
    authenticity: "Certificate of archive authenticity included",

    notes: [
      "Final screening recorded by three witnesses.",
      "Original building demolished in late 1968.",
      "No surviving photograph of the final night has been located.",
    ],
  },

  letter: {
    number: "OBJECT 014",
    location: "MARSEILLE · 1987",
    title: "A Letter Never Sent",
    image: archiveLetter,
    alt: "A Letter Never Sent, Marseille, 1987",

    price: 9200,
    currency: "₹",
    stock: 1,
    availability: "IN STOCK",

    category: "LETTER · MEMORY · 1987",
    type: "ARCHIVAL DOCUMENT",
    material: "PAPER · INK",
    dimensions: "8.3 × 11.7 IN",
    edition: "01 / 05",
    condition: "PRESERVED",

    description:
      "A message written carefully, folded once, and never delivered.",

    story:
      "The letter was discovered inside an old apartment in Marseille decades after it was written.",

    storyTwo:
      "The recipient was never identified. The handwriting suggests the letter was written during a final summer before the author left the city.",

    year: "1987",
    status: "UNDELIVERED",

    shipping: "Ships within 3–5 business days",
    returns: "14-day return window",
    authenticity: "Certificate of archive authenticity included",

    notes: [
      "Letter discovered inside an abandoned Marseille apartment.",
      "Recipient was never identified.",
      "Original envelope carries no return address.",
    ],
  },

  telephone: {
    number: "OBJECT 027",
    location: "LONDON · 1979",
    title: "The Red Telephone",
    image: archiveTelephone,
    alt: "The Red Telephone, London, 1979",

    price: 24000,
    currency: "₹",
    stock: 1,
    availability: "IN STOCK",

    category: "OBJECT · SOUND · 1979",
    type: "ARCHIVAL OBJECT",
    material: "BAKELITE",
    dimensions: "8 × 9 × 7 IN",
    edition: "01 / 03",
    condition: "RESTORED",

    description:
      "A telephone that once connected one quiet room to the outside world.",

    story:
      "The red telephone belonged to a small London flat occupied by the same family for nearly thirty years.",

    storyTwo:
      "When the building was renovated, the phone was removed. Its number had already been disconnected years earlier.",

    year: "1979",
    status: "DISCONNECTED",

    shipping: "Ships within 5–7 business days",
    returns: "14-day return window",
    authenticity: "Certificate of archive authenticity included",

    notes: [
      "Telephone belonged to a London family apartment.",
      "Original number was disconnected before removal.",
      "The building was renovated in the early 1980s.",
    ],
  },

  house: {
    number: "OBJECT 041",
    location: "LISBON · 1993",
    title: "The House With Blue Windows",
    image: archiveHouse,
    alt: "The House With Blue Windows, Lisbon, 1993",

    price: 15600,
    currency: "₹",
    stock: 1,
    availability: "IN STOCK",

    category: "PLACE · HOME · 1993",
    type: "ARCHIVAL PHOTOGRAPH",
    material: "GELATIN SILVER PRINT",
    dimensions: "20 × 28 IN",
    edition: "02 / 10",
    condition: "ARCHIVAL CONDITION",

    description:
      "A house remembered more clearly for its windows than its walls.",

    story:
      "The house stood at the end of a narrow Lisbon street, its blue windows visible from almost every corner.",

    storyTwo:
      "By the late 1990s, the building had changed owners several times. The original windows were eventually replaced, leaving only photographs and memories behind.",

    year: "1993",
    status: "ALTERED",

    shipping: "Ships within 3–5 business days",
    returns: "14-day return window",
    authenticity: "Certificate of archive authenticity included",

    notes: [
      "Original blue windows were visible from the main street.",
      "House changed ownership several times.",
      "The original windows were eventually replaced.",
    ],
  },

  sunday: {
    number: "OBJECT 063",
    location: "SOMEWHERE IN EUROPE · 2001",
    title: "Sunday at 4:17 PM",
    image: archiveSunday,
    alt: "Sunday at 4:17 PM, Somewhere in Europe, 2001",

    price: 11800,
    currency: "₹",
    stock: 1,
    availability: "IN STOCK",

    category: "MOMENT · MEMORY · 2001",
    type: "ARCHIVAL PHOTOGRAPH",
    material: "PHOTOGRAPHIC PRINT",
    dimensions: "18 × 24 IN",
    edition: "03 / 10",
    condition: "ARCHIVAL CONDITION",

    description:
      "A quiet afternoon remembered only because someone stopped to look.",

    story:
      "At exactly 4:17 PM on a Sunday in 2001, a photograph was taken from an apartment window somewhere in Europe.",

    storyTwo:
      "The location was never recorded. The photograph survived, but the person who took it left no note explaining why that particular moment mattered.",

    year: "2001",
    status: "UNLOCATED",

    shipping: "Ships within 3–5 business days",
    returns: "14-day return window",
    authenticity: "Certificate of archive authenticity included",

    notes: [
      "Photograph dated Sunday, 4:17 PM.",
      "Exact location was never recorded.",
      "Photographer remains unidentified.",
    ],
  },

  photograph: {
    number: "OBJECT 089",
    location: "VIENNA · 1974",
    title: "The Photograph Without a Name",
    image: archivePhotograph,
    alt: "The Photograph Without a Name, Vienna, 1974",

    price: 13200,
    currency: "₹",
    stock: 1,
    availability: "IN STOCK",

    category: "PHOTOGRAPH · MEMORY · 1974",
    type: "ARCHIVAL PHOTOGRAPH",
    material: "GELATIN SILVER PRINT",
    dimensions: "16 × 20 IN",
    edition: "01 / 10",
    condition: "PRESERVED",

    description:
      "A photograph preserved without a name, date, or explanation.",

    story:
      "The photograph was found inside a second-hand book purchased in Vienna in the late 1990s.",

    storyTwo:
      "Three people stand outside a railway station, but none could be identified. The image remains one of the archive's most incomplete records.",

    year: "1974",
    status: "UNIDENTIFIED",

    shipping: "Ships within 3–5 business days",
    returns: "14-day return window",
    authenticity: "Certificate of archive authenticity included",

    notes: [
      "Photograph discovered inside a second-hand book.",
      "Three unidentified figures appear in the frame.",
      "No original caption or inscription survives.",
    ],
  },

  platform: {
    number: "OBJECT 104",
    location: "PRAGUE · 1982",
    title: "Platform No. 6",
    image: archivePlatform,
    alt: "Platform No. 6, Prague, 1982",

    price: 16700,
    currency: "₹",
    stock: 1,
    availability: "IN STOCK",

    category: "PLACE · TRANSIT · 1982",
    type: "ARCHIVAL PHOTOGRAPH",
    material: "PHOTOGRAPHIC PRINT",
    dimensions: "24 × 30 IN",
    edition: "04 / 10",
    condition: "ARCHIVAL CONDITION",

    description:
      "A railway platform remembered by the people who waited there.",

    story:
      "Platform No. 6 once served a smaller railway station on the edge of Prague.",

    storyTwo:
      "The platform was removed during a later reconstruction. Old passengers still remember the number, although the platform itself no longer exists.",

    year: "1982",
    status: "REMOVED",

    shipping: "Ships within 3–5 business days",
    returns: "14-day return window",
    authenticity: "Certificate of archive authenticity included",

    notes: [
      "Platform served the station before reconstruction.",
      "The original platform was removed.",
      "Passenger records from the period are incomplete.",
    ],
  },
}

const addToCart = (object) => {
  setCart((currentCart) => {
    const existingItem = currentCart.find(
      (item) => item.number === object.number
    )

    if (existingItem) {
      return currentCart.map((item) =>
        item.number === object.number
          ? {
              ...item,
              quantity: Math.min(item.quantity + 1, object.stock),
            }
          : item
      )
    }

    return [
      ...currentCart,
      {
        ...object,
        quantity: 1,
      },
    ]
  })

  setShowCart(true)
}

const updateCartQuantity = (number, change) => {
  setCart((currentCart) =>
    currentCart
      .map((item) => {
        if (item.number !== number) return item

        const newQuantity = item.quantity + change

        return {
          ...item,
          quantity: Math.max(
            1,
            Math.min(newQuantity, item.stock)
          ),
        }
      })
  )
}

const removeFromCart = (number) => {
  setCart((currentCart) =>
    currentCart.filter((item) => item.number !== number)
  )
}

const cartCount = cart.reduce(
  (total, item) => total + item.quantity,
  0
)

const cartTotal = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
)

const buyNow = (object) => {
  setCart([
    {
      ...object,
      quantity: 1,
    },
  ])

  setShowCheckout(true)
  setSelectedObject(null)
  setShowCart(false)
}

  return (
    <main className="archive-home">

      <header className="archive-header">
        <span className="archive-logo">ARCHIVE 27</span>

        <span className="archive-status">
          DIGITAL COLLECTION · 001
        </span>

        <button
  className="archive-menu"
  onClick={() =>
    document
      .getElementById("index")
      ?.scrollIntoView({ behavior: "smooth" })
  }
>
  INDEX
</button>
      </header>

      <section className="hero">

        <div className="hero-meta">
          <span>EST. 2026</span>
          <span>AN ARCHIVE OF THE ALMOST FORGOTTEN</span>
        </div>

        <div className="hero-main">

          <div className="hero-label">
            <span>COLLECTION</span>
            <strong>01 / 27</strong>
          </div>

          <div className="hero-title">
            <p className="hero-kicker">THE HUMAN ARCHIVE</p>

            <h1>
              Everything
              <br />
              <em>disappears.</em>
            </h1>
          </div>

          <div className="hero-note">
            <span>TRACE 001</span>

            <p>
              Objects, places, sounds
              <br />
              and stories left behind.
            </p>
          </div>

        </div>

        <div className="hero-bottom">

          <button
  className="enter-button"
  onClick={() =>
    document
      .getElementById("collection")
      ?.scrollIntoView({ behavior: "smooth" })
  }
>
  ENTER THE ARCHIVE
  <span>↓</span>
</button>

          <span className="hero-scroll">
            SCROLL TO EXPLORE
          </span>

        </div>

      </section>

      <section className="artifact">

  <div className="artifact-header">
    <span>OBJECT 001</span>
    <span>ARCHIVE / 27</span>
  </div>

  <motion.div
  className="artifact-grid"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
>

    <motion.div
  className="artifact-image"
  initial={{ opacity: 0, scale: 1.04 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  <img
  src={archiveCinema}
  alt="The Last Cinema, Paris, 1968"
/>
    </motion.div>

    <div className="artifact-content">

      <span className="artifact-category">
        PLACE · MEMORY · 1968
      </span>

      <h2>
        The Last
        <br />
        Cinema
      </h2>

      <p className="artifact-location">
        PARIS, FRANCE
      </p>

      <p className="artifact-description">
        A cinema that disappeared before anyone thought
        to photograph it. Its final screening was recorded
        only in the memory of those who were there.
      </p>

      <button className="artifact-link"
      onClick={() => setSelectedObject(archiveObjects.cinema)}
      >
        OPEN OBJECT
        <span>↗</span>
      </button>

    </div>

  </motion.div>

</section>
{selectedObject && (
  <motion.section
    className="object-view"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.45 }}
  >
    <div className="object-view-topbar">
      <motion.button
        className="object-close"
        onClick={() => setSelectedObject(null)}
        whileHover={{ x: -5 }}
        transition={{ duration: 0.2 }}
      >
        ← RETURN TO ARCHIVE
      </motion.button>

      <button
        className="object-cart-button"
        onClick={() => setShowCart(true)}
      >
        CART
        <span>{cartCount.toString().padStart(2, "0")}</span>
      </button>
    </div>

    <div className="object-view-header">
      <span>{selectedObject.number}</span>
      <span>{selectedObject.location}</span>
      <span>{selectedObject.availability}</span>
    </div>

    <div className="product-main">
      <div className="product-image-column">
        <div className="object-view-image">
          <img
            src={selectedObject.image}
            alt={selectedObject.alt}
          />
        </div>

        <div className="product-image-caption">
          <span>ARCHIVE 27 / ORIGINAL RECORD</span>
          <span>{selectedObject.edition}</span>
        </div>
      </div>

      <div className="product-information">
        <span className="product-category">
          {selectedObject.category}
        </span>

        <h1>{selectedObject.title}</h1>

        <p className="product-description">
          {selectedObject.description}
        </p>

        <div className="product-price">
          {selectedObject.currency}
          {selectedObject.price.toLocaleString("en-IN")}
        </div>

        <div className="product-availability">
          <span className="availability-dot"></span>
          {selectedObject.availability} · {selectedObject.stock} AVAILABLE
        </div>

        <div className="product-actions">
          <button
            className="product-add-button"
            onClick={() => addToCart(selectedObject)}
          >
            ADD TO CART
            <span>+</span>
          </button>

          <button
            className="product-buy-button"
            onClick={() => buyNow(selectedObject)}
          >
            BUY THIS OBJECT
            <span>↗</span>
          </button>
        </div>

        <button
          className="offer-button"
          onClick={() =>
            alert(
              "Make an offer functionality can be connected to a backend later."
            )
          }
        >
          MAKE AN OFFER
        </button>

        <div className="product-meta">
          <div>
            <span>TYPE</span>
            <strong>{selectedObject.type}</strong>
          </div>

          <div>
            <span>YEAR</span>
            <strong>{selectedObject.year}</strong>
          </div>

          <div>
            <span>MATERIAL</span>
            <strong>{selectedObject.material}</strong>
          </div>

          <div>
            <span>DIMENSIONS</span>
            <strong>{selectedObject.dimensions}</strong>
          </div>

          <div>
            <span>EDITION</span>
            <strong>{selectedObject.edition}</strong>
          </div>

          <div>
            <span>CONDITION</span>
            <strong>{selectedObject.condition}</strong>
          </div>
        </div>

        <div className="purchase-notes">
          <div>
            <span>SHIPPING</span>
            <p>{selectedObject.shipping}</p>
          </div>

          <div>
            <span>RETURNS</span>
            <p>{selectedObject.returns}</p>
          </div>

          <div>
            <span>AUTHENTICITY</span>
            <p>{selectedObject.authenticity}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="product-story">
      <div className="product-story-label">
        <span>THE RECORD</span>
        <span>TRACE / 03</span>
      </div>

      <div className="product-story-content">
        <div>
          <span className="story-kicker">
            ARCHIVAL DESCRIPTION
          </span>

          <h2>
            Every object
            <br />
            leaves a <em>trace.</em>
          </h2>
        </div>

        <div className="story-copy">
          <p>{selectedObject.story}</p>
          <p>{selectedObject.storyTwo}</p>
        </div>
      </div>
    </div>

    <div className="archive-notes">
      <div className="archive-notes-heading">
        <span>ARCHIVAL NOTES</span>
        <span>TRACE / 03</span>
      </div>

      {selectedObject.notes.map((note, index) => (
        <div className="archive-note" key={note}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{note}</p>
        </div>
      ))}
    </div>

    <div className="product-bottom-cta">
      <div>
        <span>THIS OBJECT CAN BE ACQUIRED</span>
        <h3>
          Take a piece
          <br />
          of the archive.
        </h3>
      </div>

      <button
        onClick={() => addToCart(selectedObject)}
      >
        ADD TO CART
        <span>+</span>
      </button>
    </div>
  </motion.section>
)}

{showCart && (
  <motion.div
    className="cart-overlay"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <motion.aside
      className="cart-panel"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="cart-header">
        <div>
          <span>ARCHIVE 27</span>
          <h2>Your Cart</h2>
        </div>

        <button
          className="cart-close"
          onClick={() => setShowCart(false)}
        >
          ×
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>THE CART IS EMPTY.</p>
          <span>
            Objects waiting to be remembered.
          </span>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.number}>
                <img
                  src={item.image}
                  alt={item.alt}
                />

                <div className="cart-item-info">
                  <span>{item.number}</span>

                  <h3>{item.title}</h3>

                  <p>
                    {item.currency}
                    {item.price.toLocaleString("en-IN")}
                  </p>

                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        updateCartQuantity(item.number, -1)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateCartQuantity(item.number, 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-item"
                    onClick={() =>
                      removeFromCart(item.number)
                    }
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              <span>TOTAL</span>

              <strong>
                ₹{cartTotal.toLocaleString("en-IN")}
              </strong>
            </div>

            <button
              className="checkout-button"
              onClick={() => {
                setShowCheckout(true)
                setShowCart(false)
              }}
            >
              PROCEED TO CHECKOUT
              <span>↗</span>
            </button>
          </div>
        </>
      )}
    </motion.aside>
  </motion.div>
)}

{showCheckout && (
  <motion.section
    className="checkout-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <div className="checkout-header">
      <button
        className="object-close"
        onClick={() => setShowCheckout(false)}
      >
        ← BACK
      </button>

      <span>ARCHIVE 27 / CHECKOUT</span>
    </div>

    <div className="checkout-content">
      <div className="checkout-intro">
        <span>ACQUIRE AN OBJECT</span>

        <h1>
          Complete
          <br />
          your <em>acquisition.</em>
        </h1>

        <p>
          Your selected archive object has been reserved
          for this transaction.
        </p>
      </div>

      <div className="checkout-form">
        <div className="checkout-section">
          <span>01 / YOUR DETAILS</span>

          <input
            type="text"
            placeholder="FULL NAME"
          />

          <input
            type="email"
            placeholder="EMAIL ADDRESS"
          />

          <input
            type="text"
            placeholder="PHONE NUMBER"
          />
        </div>

        <div className="checkout-section">
          <span>02 / DELIVERY</span>

          <input
            type="text"
            placeholder="ADDRESS"
          />

          <div className="checkout-row">
            <input
              type="text"
              placeholder="CITY"
            />

            <input
              type="text"
              placeholder="POSTAL CODE"
            />
          </div>

          <input
            type="text"
            placeholder="COUNTRY"
            defaultValue="INDIA"
          />
        </div>

        <div className="checkout-summary">
          <div>
            <span>OBJECT</span>
            <strong>
              {cart[0]?.title || "Archive Object"}
            </strong>
          </div>

          <div>
            <span>PRICE</span>
            <strong>
              ₹
              {cartTotal.toLocaleString("en-IN")}
            </strong>
          </div>
        </div>

        <button
          className="place-order-button"
          onClick={() => {
            alert(
              "Order placed successfully. Thank you for acquiring a piece of Archive 27."
            )

            setCart([])
            setShowCheckout(false)
            setSelectedObject(null)
          }}
        >
          PLACE ORDER
          <span>↗</span>
        </button>

        <p className="checkout-disclaimer">
          This is a demonstration checkout for the
          ARCHIVE 27 experience. No real payment will
          be processed.
        </p>
      </div>
    </div>
  </motion.section>
)}

<section className="collection" id="collection">

  <div className="collection-header">
    <div>
      <span>THE COLLECTION</span>
      <p>27 traces of things almost forgotten.</p>
    </div>

    <span>001—027</span>
  </div>

  <div className="collection-grid">

    <article
  className="collection-item collection-large"
  onClick={() => setSelectedObject(archiveObjects.letter)}
>
      <motion.div
  className="collection-image"
  whileHover={{ y: -6 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
>
  <img
    src={archiveLetter}
    alt="A Letter Never Sent, Marseille, 1987"
  />
  <span>OBJECT 014</span>
</motion.div>

      <div className="collection-info">
        <h3>A Letter Never Sent</h3>
        <span>MARSEILLE · 1987</span>
      </div>
    </article>

    <article
  className="collection-item collection-small"
  onClick={() => setSelectedObject(archiveObjects.telephone)}
>
      <motion.div
  className="collection-image"
  whileHover={{ y: -6 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
>
  <img
    src={archiveTelephone}
    alt="The Red Telephone, London, 1979"
  />
  <span>OBJECT 027</span>
</motion.div>

      <div className="collection-info">
        <h3>The Red Telephone</h3>
        <span>LONDON · 1979</span>
      </div>
    </article>

    <article className="collection-item collection-medium"
    onClick={() => setSelectedObject(archiveObjects.house)}
    >
      <motion.div
  className="collection-image"
  whileHover={{ y: -6 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
>
  <img
    src={archiveHouse}
    alt="The House With Blue Windows, Lisbon, 1993"
  />
  <span>OBJECT 041</span>
</motion.div>

      <div className="collection-info">
        <h3>The House With Blue Windows</h3>
        <span>LISBON · 1993</span>
      </div>
    </article>

  </div>

</section>

<section className="manifesto">
  <div className="manifesto-label">
    <span>ARCHIVE 27</span>
    <span>THE REASON WE KEEP LOOKING</span>
  </div>

  <div className="manifesto-main">

    <div className="manifesto-note manifesto-note-left">
  <span>FIELD NOTE / 001</span>
  <p>
    Some things survive
    only because someone
    remembers them.
  </p>
</div>

    <p className="manifesto-small">EVERYTHING DISAPPEARS.</p>

    <h2>
      We keep
      <br />
      <em>the trace.</em>
    </h2>

    <p className="manifesto-description">
      Not everything deserves to be remembered.
      But everything leaves something behind.
    </p>

    <div className="manifesto-note">
  <span>TRACE / 027</span>
  <p>
    What disappears from view
    does not always disappear
    completely.
  </p>
</div>
  </div>

  <div className="manifesto-footer">
    <span>027 OBJECTS</span>
    <span>∞ STORIES</span>
    <span>EST. 2026</span>
  </div>
</section>

<section className="archive-index" id="index">
  <div className="index-header">
  <div>
    <span>THE INDEX</span>
    <p>
      Selected records from the archive.
      <br />
      7 of 27 objects currently documented.
    </p>
  </div>
  <span>001—027</span>
</div>

  <div className="index-list">
  <div className="index-row index-row-head">
    <span>NO.</span>
    <span>OBJECT</span>
    <span>PLACE</span>
    <span>YEAR</span>
  </div>

  <motion.div
    className="index-row"
    whileHover={{ x: 8 }}
    onClick={() => setSelectedObject(archiveObjects.cinema)}
  >
    <span>001</span>
    <span>The Last Cinema</span>
    <span>Paris, France</span>
    <span>1968</span>
  </motion.div>

  <motion.div
    className="index-row"
    whileHover={{ x: 8 }}
    onClick={() => setSelectedObject(archiveObjects.letter)}
  >
    <span>014</span>
    <span>A Letter Never Sent</span>
    <span>Marseille, France</span>
    <span>1987</span>
  </motion.div>

  <motion.div
    className="index-row"
    whileHover={{ x: 8 }}
    onClick={() => setSelectedObject(archiveObjects.telephone)}
  >
    <span>027</span>
    <span>The Red Telephone</span>
    <span>London, England</span>
    <span>1979</span>
  </motion.div>

  <motion.div
    className="index-row"
    whileHover={{ x: 8 }}
    onClick={() => setSelectedObject(archiveObjects.house)}
  >
    <span>041</span>
    <span>The House With Blue Windows</span>
    <span>Lisbon, Portugal</span>
    <span>1993</span>
  </motion.div>

  <motion.div
  className="index-row"
  whileHover={{ x: 8 }}
  onClick={() => setSelectedObject(archiveObjects.sunday)}
>
  <span>063</span>
  <span>Sunday at 4:17 PM</span>
  <span>Somewhere in Europe</span>
  <span>2001</span>
</motion.div>

<motion.div
  className="index-row"
  whileHover={{ x: 8 }}
  onClick={() => setSelectedObject(archiveObjects.photograph)}
>
  <span>089</span>
  <span>The Photograph Without a Name</span>
  <span>Vienna, Austria</span>
  <span>1974</span>
</motion.div>

<motion.div
  className="index-row"
  whileHover={{ x: 8 }}
  onClick={() => setSelectedObject(archiveObjects.platform)}
>
  <span>104</span>
  <span>Platform No. 6</span>
  <span>Prague, Czechia</span>
  <span>1982</span>
</motion.div>
</div>
</section>

<section className="archive-footer">
  <div className="footer-top">
    <span>ARCHIVE 27</span>
    <span>END OF CURRENT RECORD</span>
  </div>

  <div className="footer-main">
    <p>THE ARCHIVE IS NEVER COMPLETE.</p>

    <h2>
      What will
      <br />
      you <em>leave behind?</em>
    </h2>

    <button
  className="footer-button"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
      RETURN TO THE BEGINNING
      <span>↑</span>
    </button>
  </div>

  <div className="footer-bottom">
    <span>© 2026 ARCHIVE 27</span>
    <span>DIGITAL COLLECTION / 001—027</span>
    <span>THE HUMAN ARCHIVE</span>
  </div>
</section>
    </main>
  )
}

export default App