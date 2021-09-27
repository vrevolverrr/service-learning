export default function OGTags(props) {
    return (
        <div>
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content="https://www.imdb.com/title/tt0117500/" />
            <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
            <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
        </div>
    );
}