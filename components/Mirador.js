import React, { useEffect } from "react";
import mirador from "mirador";

// class Mirador extends Component {
//   componentDidMount() {
//     const { config, plugins } = this.props;
//     mirador.viewer(config, plugins);
//   }
//   render() {
//     const { config } = this.props;
//     return <div id={config.id} />;
//   }
// }

export default function Mirador(props) {
  const config = {
    id: "mirador",
    // annotation: {
    //   adapter: (canvasId) =>
    //     new LocalStorageAdapter(`localStorage://?canvasId${canvasId}`),
    //   exportLocalStorageAnnotations: true, // display annotation JSON export button
    // },
    window: {
      defaultSideBarPanel: "annotations",
      sideBarOpenByDefault: true,
    },
    catalog: [
      {
        manifestId:
          "https://sad-leakey-4368a8.netlify.app/img/derivatives/iiif/dc/manifest.json",
      },
    ],
    windows: [
      {
        loadedManifest: `${props.loadedManifest}`,
      },
    ],
  };

  const plugins = [];

  useEffect(() => {
    mirador.viewer(config, plugins);
  });

  return <div id="mirador" />;
}
