import {AbsoluteFill} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import { Title } from '../../Elements/Title';
import { Background } from '../../Elements/Background';
import TransitionSeries from 'remotion-transition-series';

// Transitions
import { Slide } from '../../VisualEffects/Transitions/Slide';
import { CircularWipe } from '../../VisualEffects/Transitions/CircularWipe';
import { Pan } from '../../VisualEffects/Transitions/Pan';

export const scene1Schema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor1: zColor(),
	logoColor2: zColor(),
});

export const Scene2: React.FC<z.infer<typeof scene1Schema>> = () => {
	// Const frame = useCurrentFrame();
	// const {durationInFrames, fps} = useVideoConfig();

  return (
		<TransitionSeries>
			<TransitionSeries.Sequence durationInFrames={45}>          
				<AbsoluteFill style={{backgroundColor: 'white'}}>					
					<Title titleText="First" titleColor="#fff" />
					<Background fileName='background.png' />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			
			<TransitionSeries.Transition durationInFrames={15} />

			<TransitionSeries.Sequence durationInFrames={60}>
				<AbsoluteFill style={{backgroundColor: 'white'}}>					
					<Title titleText="Second" titleColor="#fff" />
					<Background fileName='background1.png' />
				</AbsoluteFill>
			</TransitionSeries.Sequence>

			<TransitionSeries.Transition
				durationInFrames={30}
				transitionComponent={(props) => <CircularWipe {...props} direction="in" />}
			/>

			<TransitionSeries.Sequence durationInFrames={60}>
				<AbsoluteFill style={{backgroundColor: 'white'}}>					
					<Background fileName='background.png' />
				</AbsoluteFill>
			</TransitionSeries.Sequence>

			<TransitionSeries.Transition
				durationInFrames={30}
				transitionComponent={(props) => <Pan {...props} direction="right" />}
			/>

			<TransitionSeries.Sequence durationInFrames={60}>
				<AbsoluteFill style={{backgroundColor: 'white'}}>										
					<Background fileName='background1.png' />
				</AbsoluteFill>
			</TransitionSeries.Sequence>

		</TransitionSeries>	
	)
}