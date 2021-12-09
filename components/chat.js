import ReactMarkdown from 'react-markdown'

export default function Chat({ dialogue, active }) {
  return <div className="chat-container">
    {dialogue.map(({ speaker, text }, i) => <div key={i} className={`chat-item ${active === speaker ? 'chat-active' : 'chat-inactive'}`}>
      <div className="chat-speaker"><h2>{speaker}</h2></div>
      <ReactMarkdown className="chat-text">{text}</ReactMarkdown>
    </div>)}
  </div>
}
