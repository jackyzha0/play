import text from '../dialogue/local-abundance.md'
import Page from '../components/page'

export default function NewWords() {
  return <Page dialogue={text} active="P" by="Miguel" />
}
