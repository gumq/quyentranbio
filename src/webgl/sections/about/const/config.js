import * as THREE from 'three';

const BGUniformsConfig = {
	baseColor: new THREE.Color('#000000'),
	area1Color: new THREE.Color('#FFFFFF'),
	area2Color: new THREE.Color('#FFFFFF'),
	area1Position: new THREE.Vector2(0.2, 0.2),
	area2Position: new THREE.Vector2(0.9, 0.9)
};

const TextUniformConfig = {
	topColor: new THREE.Color('rgb(245,230,255)'),
	bottomColor: new THREE.Color('rgb(255,255,255)')
};

const TextConfig = {
	mainTitle: `About !`,
	subTitle: `Hi! You can call me Mr. Gum! 
	i'm a handsome developer :).
	If you also like me or
	 have some good ideas, 
	please contact me 
	for a pleasant discussion ~`
};
const AnimeName = '[ Tran Le Quyen ]';

const AnimeTitleUniforms = {
	topColor: new THREE.Color('rgb(245,230,255)'),
	bottomColor: new THREE.Color('rgb(255,255,255)')
};

export { BGUniformsConfig, TextUniformConfig, TextConfig, AnimeName, AnimeTitleUniforms };
