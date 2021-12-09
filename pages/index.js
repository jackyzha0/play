import convert from '../utils/convertMdToJson'
import pt1 from '../dialogue/about_1.md'
import pt2 from '../dialogue/about_2.md'
import Page from '../components/page'

export default function Home() {
  return <>
    <Page dialogue={convert(pt1)} active="G" />
    <Page dialogue={convert(pt2)} active="G" includeHeader={false} />
  </>
}
