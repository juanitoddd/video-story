import React from 'react';
import { Img, staticFile } from 'remotion';

export const Background: React.FC<{ fileName: string }> = ({fileName}) => {	
	const imgBG = staticFile(`/img/${fileName}`);	
	return (
		<Img src={imgBG} />
	);
};
