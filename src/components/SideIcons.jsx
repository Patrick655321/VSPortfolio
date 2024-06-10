import sixfivefive from '../img/sixfivefive.png'
import topArrows from '../img/topArrows.jpg'

export default function SideIcons() {
    const iconList = [
      {
        iconName: "Files",
        imagePath: sixfivefive,
        linkPath: "",
      },
      {
        iconName: "Search",
        imagePath: sixfivefive,
        linkPath: "",
      },
      {
        iconName: "Github",
        imagePath: sixfivefive,
        linkPath: "",
      },
      {
        iconName: "Debug",
        imagePath: sixfivefive,
        linkPath: "",
      },
      {
        iconName: "Extensions",
        imagePath: sixfivefive,
        linkPath: "",
      },
      {
        iconName: "Azure",
        imagePath: sixfivefive,
        linkPath: "",
      },
    ];

    
  return (
    <aside id="sideIcons">
        <div>
            {iconList.map(({iconName, imagePath, linkPath}) => (
                <a href={linkPath}>
                    <img src={imagePath} alt={iconName} />
                </a>
            ))}

        </div>
      
    </aside>
  )
}
