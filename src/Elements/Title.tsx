import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
// import {FONT_FAMILY} from '../Compositions/HelloWorld/constants';
import { loadFont } from "@remotion/google-fonts/TitanOne";
const { fontFamily } = loadFont(); // "Titan One"

const title: React.CSSProperties = {
	fontFamily: fontFamily,
	fontWeight: 'bold',
	fontSize: 100,
	textAlign: 'center',
	position: 'absolute',
	bottom: 160,
	width: '100%',
	textShadow: '-5px -5px 0 #fff, 5px -5px 0 #fff, -5px 5px 0 #fff, 5px 5px 0 #fff'
};

const word: React.CSSProperties = {
	marginLeft: 10,
	marginRight: 10,
	display: 'inline-block',
};

export const Title: React.FC<{ titleText: string; titleColor: string }> = ({titleText, titleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const words = titleText.split(' ');	
	return (
		<h1 style={title}>
			{words.map((t, i) => {				
				const delay = i * 10;

				const scale = spring({
					fps: videoConfig.fps,
					frame: frame - delay,
					config: {
						damping: 10,						
						mass: 1,
						stiffness: 100,
						overshootClamping: false
					},
				});

				return (
					<span
						key={t}
						style={{
							...word,
							color: titleColor,
							transform: `scale(${scale})`,
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
