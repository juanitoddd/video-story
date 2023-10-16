import {AbsoluteFill} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import { Title } from '../../Elements/Title';
import { Background } from '../../Elements/Background';
import TransitionSeries from 'remotion-transition-series';
import { Slide } from '../../VisualEffects/Transitions/Slide';

export const scene1Schema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor1: zColor(),
	logoColor2: zColor(),
});

export const Scene2: React.FC<z.infer<typeof scene1Schema>> = () => {
	// const frame = useCurrentFrame();
	// const {durationInFrames, fps} = useVideoConfig();

  return (
		<TransitionSeries>
      
			<TransitionSeries.Sequence durationInFrames={45}>          
				<AbsoluteFill style={{backgroundColor: 'white'}}>
					First
					<Title titleText={'hola'} titleColor={'#fff'} />
					<Background fileName='background.png'></Background>
				</AbsoluteFill>
      </TransitionSeries.Sequence>
			
			<TransitionSeries.Transition durationInFrames={15} />

			<TransitionSeries.Sequence durationInFrames={60}>
				<AbsoluteFill style={{backgroundColor: 'white'}}>
					Second
					<Title titleText={'hola'} titleColor={'#fff'} />
					<Background fileName='background1.png'></Background>
				</AbsoluteFill>
			</TransitionSeries.Sequence>

		</TransitionSeries>	
	)
}