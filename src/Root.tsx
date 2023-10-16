import {Composition, Folder} from 'remotion';
import { Scene1, scene1Schema } from './Compositions/Scene1/Scene1';
import { Scene2 } from './Compositions/Scene1/Scene2';

// Each <Composition> is an entry in the sidebar!


export const RemotionRoot: React.FC = () => {
	const fps =30
	return (
		<>
			<Folder name="Scenes">
				<Composition
					// You can take the "id" to render a video:
					// npx remotion render src/index.ts <id> out/video.mp4
					id="Scene2"
					// Component={Scene1}
					component={Scene2}
					durationInFrames={150}
					fps={fps}
					width={1920}
					height={1080}
					// You can override these props for each render:
					// https://www.remotion.dev/docs/parametrized-rendering
					schema={scene1Schema}
					defaultProps={{
						titleText: 'Welcome to Remotion',
						titleColor: '#000',
						logoColor1: '#91EAE4',
						logoColor2: '#86A8E7',
					}}
				/>		
			</Folder>			
		</>
	);
};
