import './Card.css';

export function Card({ title, content, imageUrl, githubLink, hashtags = [] }) {
  const colors = ["#4fb3f6", "#7CD388", "#F77E9C"];

  return (
    <div className="card">
      <div className="cardContent">
        <div className="relativeWrapper">
          <img src={imageUrl} alt="Main" className="mainImage" />
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="githubLink"
          >
            <img
              src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
              alt="GitHub Icon"
              className="githubIcon"
            />
          </a>
        </div>
        <a className="title">{title}</a>
        <a className="content">{content}</a>
        <div className="hashtagsContainer">
          {hashtags.map((tag, index) => {
            const color = colors[index % colors.length];
            return (
              <span key={index} style={{ color }}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
