import {AbsoluteFill, useCurrentFrame, useVideoConfig, spring} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import { Title } from '../../Elements/Title';
import { Background } from '../../Elements/Background';

export const scene1Schema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor1: zColor(),
	logoColor2: zColor(),
});

export const Scene1: React.FC<z.infer<typeof scene1Schema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor1,
	logoColor2,
}) => {
	// const frame = useCurrentFrame();
	// const {durationInFrames, fps} = useVideoConfig();

  return (
	<AbsoluteFill style={{backgroundColor: 'white'}}>
    <Title titleText={propOne} titleColor={propTwo} />
		<Background fileName='background.png'></Background>
  </AbsoluteFill>
	)
}