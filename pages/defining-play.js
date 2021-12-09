import text from '../dialogue/defining-play.md'
import Page from '../components/page'

export default function NewWords() {
  return <Page dialogue={text} active="A" by="Joel" />
}
