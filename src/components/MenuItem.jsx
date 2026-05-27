export default function MenuItem({ image, text, description }) {
  const Item = ({ image, text, description }) => {
    return (
      <div className="Item">
        <div className="Image">
          <img src={image} />
        </div>
        <div className="Text">{text}</div>
        <div className="Description">{description}</div>
      </div>
    );
  };
}