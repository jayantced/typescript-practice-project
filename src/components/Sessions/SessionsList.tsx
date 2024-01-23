type SessionsListProps = {sessions: {
    id: string;
    image: string;
    title: string;
    description: string;
}[]}

export default function SessionsList({sessions}: SessionsListProps) {
  return (
    <ul id="sessions-list">
        {sessions.map((session) =>
        <li>
          <img src={session.image}/>
          <h2>{session.title}</h2>
          <p>{session.description}</p>
          <button>Learn More</button>
        </li>
      )}
    </ul>
  )
}
