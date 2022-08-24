import pt1 from '../dialogue/about_1.md'
import pt2 from '../dialogue/about_2.md'
import Page from '../components/page'
import Link from 'next/link'

export default function Home() {
  return <>
    <Page dialogue={pt1} active="G" includeFooter={false} />
    <div className="main-body main-index">
      <ol type="I">
        <li><Link href="/defining-play"><a>On defining play</a></Link></li>
        <li><Link href="/new-words"><a>On terminology and definitions</a></Link></li>
        <li><Link href="/life-of-a-player"><a>On novelty and surprise</a></Link></li>
        <li><Link href="/lusory-attitude"><a>On intrinsic motivation and the lusory attitude</a></Link></li>
        <li><Link href="/play-to-win"><a>On playing in a post-work society</a></Link></li>
        <li><Link href="/local-abundance"><a>On playgrounds and balance</a></Link></li>
      </ol>
    </div>
    <Page dialogue={pt2} active="G" includeHeader={false} includeFooter={false} />
  </>
}
