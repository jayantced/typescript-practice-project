import SessionItem from "./SessionItem";

type SessionsListProps = {sessions: {
    id: string;
    image: string;
    title: string;
    summary: string;
}[]}

export default function SessionsList({sessions}: SessionsListProps) {
  return (
    <ul id="sessions-list">
        {sessions.map((session) =>
        <li>
          <SessionItem {...session} />
        </li>
      )}
    </ul>
  )
}
