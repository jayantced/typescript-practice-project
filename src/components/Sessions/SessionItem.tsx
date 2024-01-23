import Button from "../UI/Button";

type SessionItemProps = {
    id: string;
    image: string;
    title: string;
    summary: string;
}

export default function SessionItem({id, image, title, summary}: SessionItemProps) {
  return (
    <article className='session-item'>
        <img src={image} alt={title} />
        <div className="session-data">
            <div>
                <h3>{title}</h3>
                <p>{summary}</p>
            </div>
            <p className="actions">
                <Button to={id}>Learn More</Button>
            </p>
        </div>
    </article>
  )
}
