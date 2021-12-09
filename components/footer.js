import Link from 'next/link'

export default function Footer({ wordcount, author }) {
  return <div className="footer">
    <p>{wordcount} words, written by {author}.</p>
    <Link href="/"><a>← Return to the warmth of the campfire.</a></Link>
  </div>
}
