

export default function Footer({ wordcount, author }) {
  return <div className="footer">
    <p>{wordcount} words, written by {author}.</p>
    <a href="/">← Return to the warmth of the campfire.</a>
  </div>
}
