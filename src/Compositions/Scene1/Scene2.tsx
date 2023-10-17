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
import { SlidingDoors } from '../../VisualEffects/Transitions/SlidingDoors';
import { LinearWipe } from '../../VisualEffects/Transitions/LinearWipe';
import { Dissolve } from '../../VisualEffects/Transitions/Dissolve';
import { FadeThroughColor } from '../../VisualEffects/Transitions/FadeThroughColor';

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
			
			<TransitionSeries.Transition durationInFrames={20} />

			<TransitionSeries.Sequence durationInFrames={45}>
				<AbsoluteFill style={{backgroundColor: 'white'}}>					
					<Title titleText="Second" titleColor="#fff" />
					<Background fileName='background1.png' />
				</AbsoluteFill>
			</TransitionSeries.Sequence>

			<TransitionSeries.Transition
				durationInFrames={20}
				transitionComponent={(props) => <CircularWipe {...props} direction="in" />}
			/>

			<TransitionSeries.Sequence durationInFrames={45}>
				<AbsoluteFill style={{backgroundColor: 'white'}}>					
					<Background fileName='background.png' />
				</AbsoluteFill>
			</TransitionSeries.Sequence>

			<TransitionSeries.Transition
				durationInFrames={20}
				transitionComponent={(props) => <Pan {...props} direction="right" />}
			/>

			<TransitionSeries.Sequence durationInFrames={45}>
				<AbsoluteFill style={{backgroundColor: 'white'}}>										
					<Background fileName='background1.png' />
				</AbsoluteFill>
			</TransitionSeries.Sequence>

			<TransitionSeries.Transition
				durationInFrames={20}
				transitionComponent={(props) => <SlidingDoors {...props} angle={45} />}
			/>

			<TransitionSeries.Sequence durationInFrames={45}>
				<AbsoluteFill style={{backgroundColor: 'white'}}>										
					<Background fileName='background.png' />
				</AbsoluteFill>
			</TransitionSeries.Sequence>

			<TransitionSeries.Transition
				durationInFrames={20}
				transitionComponent={(props) => <LinearWipe {...props} angle={-45} />}
			/>

			<TransitionSeries.Sequence durationInFrames={45}>
				<AbsoluteFill style={{backgroundColor: 'white'}}>										
					<Background fileName='background1.png' />
				</AbsoluteFill>
			</TransitionSeries.Sequence>

			<TransitionSeries.Transition
				durationInFrames={20}
				transitionComponent={(props) => <Dissolve {...props} />}
			/>

			<TransitionSeries.Sequence durationInFrames={45}>
				<AbsoluteFill style={{backgroundColor: 'white'}}>										
					<Background fileName='background.png' />
				</AbsoluteFill>
			</TransitionSeries.Sequence>

			<TransitionSeries.Transition
				durationInFrames={20}
				transitionComponent={(props) => <FadeThroughColor {...props} color='#ff0' />}
			/>

			<TransitionSeries.Sequence durationInFrames={45}>
				<AbsoluteFill style={{backgroundColor: 'white'}}>										
					<Background fileName='background1.png' />
				</AbsoluteFill>
			</TransitionSeries.Sequence>

		</TransitionSeries>	
	)
}