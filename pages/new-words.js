import text from '../dialogue/new-words.md'
import Page from '../components/page'

export default function NewWords() {
  return <Page dialogue={text} active="W" />
}
