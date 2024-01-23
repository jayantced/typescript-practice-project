import Button from "../../UI/Button";

type SessionItemProps = {
    id: string;
    image: string;
    title: string;
    description: string;
}

export default function SessionItem({id, image, title, description}: SessionItemProps) {
  return (
    <article>
        <img />
        <div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <p>
                <Button to={id}>Learn More</Button>
            </p>
        </div>
    </article>
  )
}
