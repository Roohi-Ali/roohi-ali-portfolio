import './Items.css'

const ItemBar = ({ item, level }) => {
    return (
      <div className="item-container">
        <span className="item-name">{item}</span>
        <div className="item-bar">
          <div className="item-level" style={{ width: `${level * 10}%` }}>
            {/* {level}/10 */}
          </div>
        </div>
      </div>
    );
  };
  
  const ItemsSection = () => {
    return (
      <div className="items-section">
        <h3>My Proficiencies</h3>
        <ItemBar item="JavaScript" level={9} />
        <ItemBar item="TypeScript" level={8} />
        <ItemBar item="React" level={8} />
        <ItemBar item="Node.js" level={7} />
        <ItemBar item="Express" level={7} />
        <ItemBar item="MongoDB" level={7} />
        <ItemBar item="Firebase" level={7} />
        {/* Add more items as needed */}
      </div>
    );
  };
  
  export default ItemsSection;
  