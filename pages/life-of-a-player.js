import text from '../dialogue/life-of-a-player.md'
import Page from '../components/page'

export default function NewWords() {
  return <Page dialogue={text} active="P" by="Justin" />
}
