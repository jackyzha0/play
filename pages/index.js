import pt1 from '../dialogue/about_1.md'
import pt2 from '../dialogue/about_2.md'
import Page from '../components/page'

export default function Home() {
  return <>
    <Page dialogue={pt1} active="G" includeFooter={false} />
    <div className="main-body main-index">
      <ol type="I">
        <li><a href="/play-to-win">On the role of play in a post-work society</a></li>
        <li><a href="/new-words">On terminology and definitions</a></li>
      </ol>
    </div>
    <Page dialogue={pt2} active="G" includeHeader={false} includeFooter={false} />
  </>
}
