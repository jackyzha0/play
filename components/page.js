const CAMPFIRE = `
                    (       
    .              ).  *     
 _.-\\=          o (:') o    
(@))_))        o (/v~\\~ o   
                o  o  o     
`

import Chat from '../components/chat'

export default function Page({ dialogue, active, includeHeader = true }) {
  return (
    <div>
      <div className="campfire">
        {includeHeader && <pre>{CAMPFIRE}</pre>}
        <Chat dialogue={dialogue} active={active} />
      </div>
    </div>
  )
}
