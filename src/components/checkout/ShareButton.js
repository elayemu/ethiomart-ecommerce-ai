const ShareButton = ({ url }) => (
    <div>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">Share on Facebook</a>
        <a href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank" rel="noopener noreferrer">Share on Twitter</a>
    </div>
);

export default ShareButton;