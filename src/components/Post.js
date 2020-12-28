import React from "react";
import {Card, Button} from "react-bootstrap"

const Post = (props) => (
    <article className="p-3">
        <Card>
            <Card.Img variant="top" src={props.image} alt={props.alt || "default"} />
            <Card.Body>
                <Card.Title dangerouslySetInnerHTML={{__html: props.title}} />
                <Card.Text dangerouslySetInnerHTML={{__html: props.excerpt}} />
                <Button variant="warning" href={props.readMore}>Read more</Button>
            </Card.Body>
        </Card>  
    </article>  
)

export default Post;