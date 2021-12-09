import text from '../dialogue/lusory-attitude.md'
import Page from '../components/page'

export default function NewWords() {
  return <Page dialogue={text} active="B" by="Becky" />
}
