import Markdown from 'markdown-to-jsx'

export default function Chat({ dialogue, active }) {
  return <div className="chat-container">
    {dialogue.map(({ speaker, text }, i) => <div key={i} className={`chat-item ${active === speaker ? 'chat-active' : 'chat-inactive'}`}>
      <div className="chat-speaker"><h2>{speaker}</h2></div>
      <Markdown className="chat-text">{text}</Markdown>
    </div>)}
  </div>
}
