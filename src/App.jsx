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

  const archiveObjects = {
  cinema: {
    number: "OBJECT 001",
    location: "PARIS · 1968",
    title: "The Last Cinema",
    image: archiveCinema,
    alt: "The Last Cinema, Paris, 1968",
    category: "PLACE · MEMORY · 1968",
    description:
      "A cinema that disappeared before anyone thought to photograph it.",
    story:
      "The cinema stood on a narrow Parisian street for almost four decades.",
    storyTwo:
      "Its final screening took place in the summer of 1968. The building was demolished soon after. No official photograph of its final night exists.",
    status: "LOST",
    year: "1968",
status: "LOST",
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
    category: "LETTER · MEMORY · 1987",
    description:
      "A message written carefully, folded once, and never delivered.",
    story:
      "The letter was discovered inside an old apartment in Marseille decades after it was written.",
    storyTwo:
      "The recipient was never identified. The handwriting suggests the letter was written during a final summer before the author left the city.",
    status: "UNDELIVERED",
    year: "1987",
status: "UNDELIVERED",
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
    category: "OBJECT · SOUND · 1979",
    description:
      "A telephone that once connected one quiet room to the outside world.",
    story:
      "The red telephone belonged to a small London flat occupied by the same family for nearly thirty years.",
    storyTwo:
      "When the building was renovated, the phone was removed. Its number had already been disconnected years earlier.",
    status: "DISCONNECTED",
    year: "1979",
status: "DISCONNECTED",
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
  category: "PLACE · HOME · 1993",
  description:
    "A house remembered more clearly for its windows than its walls.",
  story:
    "The house stood at the end of a narrow Lisbon street, its blue windows visible from almost every corner.",
  storyTwo:
    "By the late 1990s, the building had changed owners several times. The original windows were eventually replaced, leaving only photographs and memories behind.",
  status: "ALTERED",
  year: "1993",
status: "ALTERED",
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
  category: "MOMENT · MEMORY · 2001",
  description:
    "A quiet afternoon remembered only because someone stopped to look.",
  story:
    "At exactly 4:17 PM on a Sunday in 2001, a photograph was taken from an apartment window somewhere in Europe.",
  storyTwo:
    "The location was never recorded. The photograph survived, but the person who took it left no note explaining why that particular moment mattered.",
  year: "2001",
  status: "UNLOCATED",
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
  category: "PHOTOGRAPH · MEMORY · 1974",
  description:
    "A photograph preserved without a name, date, or explanation.",
  story:
    "The photograph was found inside a second-hand book purchased in Vienna in the late 1990s.",
  storyTwo:
    "Three people stand outside a railway station, but none could be identified. The image remains one of the archive's most incomplete records.",
  year: "1974",
  status: "UNIDENTIFIED",
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
  category: "PLACE · TRANSIT · 1982",
  description:
    "A railway platform remembered by the people who waited there.",
  story:
    "Platform No. 6 once served a smaller railway station on the edge of Prague.",
  storyTwo:
    "The platform was removed during a later reconstruction. Old passengers still remember the number, although the platform itself no longer exists.",
  year: "1982",
  status: "REMOVED",
  notes: [
    "Platform served the station before reconstruction.",
    "The original platform was removed.",
    "Passenger records from the period are incomplete.",
  ],
},
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

    <motion.button
  className="object-close"
  onClick={() => setSelectedObject(null)}
  whileHover={{ x: -5 }}
  transition={{ duration: 0.2 }}
>
  ← RETURN TO ARCHIVE
</motion.button>

    <div className="object-view-header">
      <span>{selectedObject.number}</span>
      <span>{selectedObject.location}</span>
    </div>

    <motion.div
  className="object-view-content"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.15,
    ease: "easeOut",
  }}
>

      <motion.div
  className="object-view-image"
  initial={{ opacity: 0, scale: 1.03 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 1,
    delay: 0.2,
    ease: "easeOut",
  }}
>
        <img
          src={selectedObject.image}
          alt={selectedObject.alt}
        />
      </motion.div>

      <div className="object-view-story">

        <span>{selectedObject.title}</span>

        <h2>
  {selectedObject.title}
</h2>
        <p>{selectedObject.story}</p>

<p>{selectedObject.storyTwo}</p>

        <div className="object-meta">
          <span>LOCATION</span>
<strong>{selectedObject.location}</strong>

<span>YEAR</span>
<strong>{selectedObject.year}</strong>

<span>STATUS</span>
<strong>{selectedObject.status}</strong>
        </div>

        <div className="archive-notes">

  <div className="archive-notes-heading">
    <span>ARCHIVAL NOTES</span>
    <span>TRACE / 03</span>
  </div>

 {selectedObject.notes.map((note, index) => (
  <div className="archive-note" key={note}>
    <span>0{index + 1}</span>
    <p>{note}</p>
  </div>
))}

</div>

      </div>

    </motion.div>

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