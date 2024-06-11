import sixfivefive from '../img/sideIcons/sixfivefive.jpg'
import topArrows from '../img/topArrows.jpg'
import '../styling/SideIcons.css'
import explorer from '../img/sideIcons/explorer.png'


export default function SideBar() {
    
  const topIcons = [
      {
        iconName: "Files",
        imagePath: explorer,
        linkPath: "",
      },
      {
        iconName: "Search",
        imagePath: explorer,
        linkPath: "",
      },
      {
        iconName: "Github",
        imagePath: explorer,
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

  const bottomIcons = [
    {
      iconName: "Accounts",
      imagePath: sixfivefive,
      linkPath: "",
    },
    {
      iconName: "Setting",
      imagePath: explorer,
      linkPath: "",
    }
  ]
    
  return (
        <div id="sideBar">
          <div id="topIcons">
            {topIcons.map(({iconName, imagePath, linkPath}) => (
                <a href={linkPath}>
                    <img class="sideiconstop" id={iconName} src={imagePath} alt={iconName} />
                </a>
            ))}
            </div>
            <div id='bottomIcons'>
            {bottomIcons.map(({iconName, imagePath, linkPath}) => (
                <a href={linkPath}>
                    <img class="sideiconsbottom" id={iconName} src={imagePath} alt={iconName} />
                </a>
            ))}
            </div>
        </div>
  )
}
