const CAMPFIRE = `
                    (       
    .              ).  *     
 _.-\\=          o (:') o    
(@))_))        o (/v~\\~ o   
                o  o  o     
`

import Chat from '../components/chat'
import Footer from '../components/footer'
import convert from '../utils/convertMdToJson'

export default function Page({ dialogue, active, by, includeHeader = true, includeFooter = true }) {
  return (
    <div className="main-body">
      <div className="campfire">
        {includeHeader && <pre>{CAMPFIRE}</pre>}
      </div>
      <Chat dialogue={convert(dialogue)} active={active} />
      {includeFooter && <Footer author={by} wordcount={dialogue.split(" ").length} />}
    </div>
  )
}
